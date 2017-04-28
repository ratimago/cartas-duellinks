<?php namespace App\Http\Backend\Controllers;

use App\Http\Backend\Helpers\UploadHandler;
use App\Http\Backend\Helpers\Directory;
use App\Http\Backend\Repositories\BlockRepo;
use App\Http\Backend\Repositories\Gallery_ElementRepo;
use App\Http\Backend\Repositories\GalleryRepo;
use App\Http\Backend\Repositories\StaticmenuRepo;
use App\Http\Backend\Requests\ImageRequest;
use App\Http\Frontend\Repositories\PromotionRepo;

class GalleryController extends BaseController
{
    protected $elementRepo;

    function __construct(GalleryRepo $galleryRepo, Gallery_ElementRepo $elementRepo)
    {
        $this->repo = $galleryRepo;
        $this->elementRepo = $elementRepo;
    }

    /*
     * =============== Cargar elemento ===============
     */
    function ElementAck($id)
    {
        $gallery = $this->repo->Find($id);
        //dd($gallery);
        if ($gallery) {
            $fileName = \Input::get('name');
            $element = $this->elementRepo->SaveElement($fileName, $gallery);

            if ($element) {
                $data = array(
                    'element' => $element,
                    'gallery' => $gallery,
                );
                return \View::Make('Backend.Galleries.element')->with($data);
            }
        }
        return false;
    }

    function GetBackUrl()
    {
        $url = \Request::Server('HTTP_REFERER');

        if (preg_match('%galeria%', $url) or preg_match('%tooltip%', $url)) {
            $url = \Session::Get('backend.galeria.back');
        } else {
            \Session::Put('backend.galeria.back', $url);
        }

        return $url;
    }

    /*
     * ================= Mostrar elementos de una galería =================
     */
    function ShowGallery($id, $type, BlockRepo $repo)
    {
        $slug = null;

        $gallery = $this->repo->getGallery($id);
        if ($type == 'Block') {
            $bloque = $repo->find($gallery->imageable_id);
            if (isset($bloque)) {
                if (isset($bloque->slug)) {
                    $slug = $bloque->slug;
                }
            }
        }

        if ($gallery) {
            $data = [
                'gallery' => $gallery,
                'id' => $id,
                'back' => $this->GetBackUrl(),
                'type' => $type,
                'slug' => $slug
            ];

            return \View::Make('Backend.Galleries.gallery')->with($data);
        }

        return redirect()->back();
    }

    /*
     * Guardar y cargar archivos
     */
    function SaveElement($id)
    {
        $gallery = $this->repo->Find($id);

        if ($gallery) {
            // La clase UploadHandler realiza la carga de archivos fragmentados
            // enviados desde el cargador de archivos
            $UploadHandler = new UploadHandler([
                'upload_dir' => Directory::FixPath(storage_path($gallery->directory) . '/'),
                'upload_url' => asset($gallery->directory) . '/',
            ]);
        }
    }

    //=================// Actualizar elementos de galería //=================
    function UpdateElement(ImageRequest $request, $id)
    {
        //$id = \Request::get('id');
        $element = $this->elementRepo->Find($id);
        if ($element) {
            //$data = \Input::except('_token', 'background');
            $data = $request->except('_token');
            $this->elementRepo->Update($id, $data);
        }

        return \Redirect::back();
    }

    public function addVideo($galleryId)
    {
        $data = \Input::except('_token');

        if ($data['code']) {
            $this->elementRepo->saveVideo($galleryId, $data);
        }

        return redirect()->back();
    }

    /*
     * =============== Ordenar posiciones de elementos ===============
     */
    public function setOrder()
    {
        return $this->elementRepo->order(\Request::get('order'));
    }

    /*
     * ===================/ Eliminar elementos de galería /===================
     */
    function DeleteElement($id = null)
    {
        $this->elementRepo->DeleteList(!empty($id) ? [$id] : \Input::get('multiselect'));

        return redirect()->back();
    }

    /**
     * Función Personalizada
     * @param $id
     * @param $type
     * @param PromotionRepo $repo
     * @return \Illuminate\Http\RedirectResponse
     */
    public function mostrarPromocion($id, $type, PromotionRepo $repo)
    {
        $promotions = $this->notFoundUnless($repo->find(1));
        $galleries = $this->notFoundUnless($promotions->galleries->first());
        return redirect()->route('gallery', ['id' => $promotions->galleries->first(), 'type' => 'Promotion']);
    }
}