<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 20/10/16
 * Time: 05:41 PM
 */

namespace App\Http\Backend\Repositories;

use App\Http\Backend\Events\Promotion\SaveEvent as SaveGallery;
use App\Http\Backend\Events\Promotion\DeleteEvent as DeleteGallery;
use App\Http\Entities\Promotion;

class PromotionRepo extends BaseRepo
{
    protected $defaultFilters = [
        'keyword' => null,
        'active' => null,
        'inverse' => false,
        'items' => 10,
    ];

    public function setModel()
    {
        return new Promotion();
    }

    public function setSectionName()
    {
        return 'Promotions';
    }

    public function save($item, $request)
    {
        if (!$item) $item = $this->setModel();
        $exists = $item->exists;
        $item->fill($request->except('_token'))->save();
        #------------ Guardar Ids, Tags y Galería ------------
        event(new SaveGallery($item, $request, $exists));
        return $item->id;
    }

    public function paginate($filters)
    {
        $list = $this->model;

        #----------- Buscar palabra clave -----------
        if (!empty($filters['keyword'])) {
            $list = $list->where(function ($query) use ($filters) {
                $query->where('title', 'LIKE', "%{$filters['keyword']}%");
            });
        }


        $direction = ($filters['inverse'] == false) ? 'DESC' : 'ASC';

        $list = $list->orderBy('title', $direction)->paginate($filters['items']);

        return $list;
    }

    public function delete($ids)
    {
        #------------ Eliminar Ids, Tags y Galería ------------
        event(new DeleteGallery($list = $this->model->whereIn('id', $ids)->with('galleries')));
        $list->delete();
    }

}