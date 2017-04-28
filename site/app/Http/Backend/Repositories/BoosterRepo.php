<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 20/10/16
 * Time: 05:42 PM
 */

namespace App\Http\Backend\Repositories;

use App\Http\Backend\Events\Truck\SaveEvent as SaveGallery;
use App\Http\Backend\Events\Truck\DeleteEvent as DeleteGallery;
use App\Http\Entities\Booster;

class BoosterRepo extends BaseRepo
{
    protected $defaultFilters = [
        'keyword' => null,
        'filters' => 'name',
        'active' => null,
        'inverse' => false,
        'items' => 10,
    ];

    public function setModel()
    {
        return new Booster();
    }

    public function setSectionName()
    {
        return 'Boosters';
    }

    public function save($item, $request) {
        if (!$item){
            $item = $this->setModel();
        }
        $exists = $item->exists;
        $image = false;
        $banner = false;

        #------------ Guardar Ids, Tags y Galería ------------
        $destinationPath = 'imagenes/boosters';
        //dd($request->file('image'));

        if($request->file('image')){
            $extension = $request->file('image')->getClientOriginalExtension();
            $fileNameImage = $request->slug.'_'.rand(11111,99999).'.'.$extension;
            $request->file('image')->move($destinationPath, $fileNameImage);

            $image = true;
        }

        if($request->file('banner_image')){
            $extension = $request->file('banner_image')->getClientOriginalExtension();
            $fileNameBanner = $request->slug.'_'.rand(11111,99999).'.'.$extension;
            $request->file('banner_image')->move($destinationPath, $fileNameBanner);
            $banner = true;
        }

        $item->fill($request->except('_token'))->save();

        if($image){
            $imageTempName = $request->file('image')->getPathname();
            $item->where('image',$imageTempName)->update(['image'=>$fileNameImage]);
        }

        if($banner){
            $bannerTempName = $request->file('banner_image')->getPathname();
            $item->where('banner_image',$bannerTempName)->update(['banner_image' => $fileNameBanner]);

        }




        //event(new SaveGallery($item, $request, $exists));
        return $item->id;
    }

    public function paginate($filters)
    {
        $list = $this->model;

        if (!empty($filters['filters'])) {
            #----------- Buscar palabra clave -----------
            if (!empty($filters['keyword'])) {
                $list = $list->where(function ($query) use ($filters) {
                    $query->where($filters['filters'], 'LIKE', "%{$filters['keyword']}%");
                });
            }
        }


        $direction = ($filters['inverse'] == false) ? 'DESC' : 'ASC';

        $list = $list->orderBy((!empty($filters['filters']) ? $filters['filters'] : 'name'), $direction)->paginate($filters['items']);

        return $list;
    }

    public function delete($ids){
        #------------ Eliminar Ids, Tags y Galería ------------
        event(new DeleteGallery($list = $this->model->whereIn('id', $ids)->with('galleries')));
        $list->delete();
    }

    public function getBoosters()
    {
        $booster = $this->setModel()->select();
        return $booster;
    }

}