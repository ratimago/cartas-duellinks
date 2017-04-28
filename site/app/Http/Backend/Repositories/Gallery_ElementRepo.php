<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 25/10/16
 * Time: 12:32 PM
 */

namespace App\Http\Backend\Repositories;

use App\Http\Entities\Gallery;
use App\Http\Entities\GalleryElements;
use App\Http\Backend\Helpers\Directory;
use Carbon\Carbon;

class Gallery_ElementRepo extends BaseRepo
{
    public function setModel()
    {
        return new GalleryElements();
    }

    public function setSectionName()
    {
        return 'Gallery_Elements';
    }

    public function save($item, $request)
    {
        // TODO: Implement save() method.
    }

    public function paginate($filters)
    {
        // TODO: Implement paginate() method.
    }

    /*
    * ================= Eliminar elementos de galería =================
    */
    public function DeleteList($list = [])
    {
        if (is_array($list)) {
            $elements = $this->model
                ->whereIn('id', $list)
                ->with('gallery')
                ->get();

            $galleries = [];

            \DB::Transaction(function () use ($elements, &$galleries) {
                foreach ($elements as $element) {
                    $galleries[] = $element->gallery->id;
                    $file = Directory::FixPath(public_path($element->gallery->directory . '/' . $element->value));
                    #------------- Eliminar Archivo -------------
                    # ---- Esto para evitar que se rompa el slider o el mcPanel esta imagen nunca se borrará
                    if ($element->value != 'Fondo-Blanco.png') {
                        file_exists($file) ? unlink($file) : null;
                    }

                    #------------- Eliminar Elemento -------------
                    $element->Delete();
                }
            });

            foreach (array_unique($galleries) as $idGallery) {
                $this->ResetPositons([['gallery_id', '=', $idGallery]]);
            }
        }
    }


    /*
     * ================= Guardar elemento de la galería =================
     */
    public function SaveElement($fileName, $gallery)
    {
        $element = null;
        if ($fileName) {
            // Copiamos el archivo a la carpeta pública
            $storageFilePath = Directory::FixPath(storage_path("{$gallery->directory}/{$fileName}"));

            if (file_exists($storageFilePath)) {
                $fileInfo = pathinfo($storageFilePath);
                $extension = !empty($fileInfo['extension']) ? '.' . $fileInfo['extension'] : '';

                $newFileName = uniqid(str_slug($fileInfo['filename'] . '-')) . $extension;

                $publicFilePath = Directory::FixPath(public_path("{$gallery->directory}/{$newFileName}"));


                if (!is_dir(Directory::FixPath(public_path($gallery->directory)))) {
                    mkdir(Directory::FixPath(public_path($gallery->directory)), 0777, true);
                }

                if (rename($storageFilePath, $publicFilePath)) {
                    $element = new GalleryElements();
                    $element->value = $newFileName;
                    $element->gallery_id = $gallery->id;
                    $element->type = 'image';
                    $this->constraints = [['gallery_id', '=', $gallery->id]];
                    $element->position = $this->SetPosition(1, $element);

                    $element->save();

                    // $this->setThumb($gallery,$extension);
                    /*
                        if($extension != '.gif') {
                            $imagen = getimagesize(public_path("{$gallery->directory}/{$newFileName}"));    //Sacamos la información
                            $ancho = $imagen[0];              //Ancho
                            $alto = $imagen[1];               //Alto
                            //dd('ancho: '.$ancho.', alto: '.$alto);
                            if ($ancho > 1024) {
                                // redimencionamos la imagen
                                Image::make(public_path("{$gallery->directory}/{$newFileName}"))
                                    ->resize(1024, null, function ($constraint) {
                                        $constraint->aspectRatio();
                                    })->save(public_path("{$gallery->directory}/{$newFileName}"));
                            }
                        }
                      */

                }

            }
        }
        return $element;
    }

    public function setThumb($gallery, $extension)
    {
        $thumb = GalleryElements::where('gallery_id', $gallery->id)->orderBy('position', 'asc')->first();
        if ($thumb->subtitle == '') {
            GalleryElements::where('gallery_id', $gallery->id)->update(['subtitle' => '']);

            if ($extension != '.gif') {
                // redimencionamos la imagen
                Image::make(public_path("{$gallery->directory}/{$thumb->value}"))
                    ->resize(340, null, function ($constraint) {
                        $constraint->aspectRatio();
                    })->save(public_path("{$gallery->directory}/thumb{$extension}"));
                $thumb->subtitle = "thumb{$extension}";
            } else {
                $thumb->subtitle = $thumb->value;
            }

            $thumb->save();
        }
    }

    public function Update($id, $data)
    {
        $element = $this->model->find($id);
        $savemovil = isset($element->gallery->name) && $element->gallery->name == 'block-1' ? true : false;
        if ($savemovil) {
            if (!empty($data['background'])) {
                $time = Carbon::now();
                $name = $time . '-background';
                $fileName = $this->saveFile($data, 'background', public_path($element->gallery->directory), str_replace(" ", "-", $name));
                $data['background'] = $fileName;
            }
        }
        if ($element) {
            foreach ($data as $field => $value) {
                if ($field == 'position') {
                    $this->constraints = [['gallery_id', '=', $element->gallery_id]];
                    $element->position = $this->SetPosition($value, $element);
                } else {
                    $element->$field = $value;
                }
            }
            $element->save();
        }
    }


    public function saveFile($request, $field, $path, $name)
    {
        if (!is_dir($path)) {
            mkdir($path, 0777, true);
        }

        $file = $request[$field];
        $fileName = "{$name}.{$file->getClientOriginalExtension()}";
        $file->move($path, $fileName);

        return $fileName;
    }


    public function saveVideo($galleryId, $data, $videoId = null)
    {
        if ($videoId) {
            $video = $this->model->find($videoId);
        } else {
            $video = $this->model;
        }

        $this->constraints = [['gallery_id', '=', $galleryId]];
        $last = $this->GetLastPosition($video->id, [['gallery_id', '=', $galleryId]]);
        $position = $this->GetInversePosition($data['position'], $video->id, $last);

        $dataVideo = array(
            'type' => 'video',
            'gallery_id' => $galleryId,
            'position' => $position,
            'value' => $data['code'],
        );

        $video->fill($dataVideo)->save();

    }

    /*
     * ============= Obtener un Elemento de Galería =============
     */
    public function find($id)
    {
        return $this->setModel()
            ->find($id);
    }

    /*
     * ============= Ordenar posiciones de elementos con Ajax =============
     */
    public function order($idList)
    {
        if (!empty($idList)) {
            foreach ($idList as $position => $id) $this->model->where('id', $id)->update(['position' => $position + 1]);

            $item = GalleryElements::find($idList[0]);
            $gallery = Gallery::where('id', $item->gallery_id)->first();

            $fileInfo = storage_path("{$gallery->directory}/{$item->value}");
            $extension = !empty($fileInfo['extension']) ? '.' . $fileInfo['extension'] : '';

            // $this->setThumb($gallery,$extension);
        }
    }

}