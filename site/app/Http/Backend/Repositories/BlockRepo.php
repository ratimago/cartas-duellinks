<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 20/10/16
 * Time: 05:39 PM
 */

namespace App\Http\Backend\Repositories;


use App\Http\Backend\Events\Block\SaveEvent as SaveGallery;
use App\Http\Backend\Events\Block\DeleteEvent as DeleteGallery;
use App\Http\Entities\Block;

class BlockRepo extends BaseRepo
{
    protected $defaultFilters = [
        'keyword' => null,
        'staticmenu_id' => null,
        'filters' => 'name',
        'active' => null,
        'inverse' => false,
        'items' => 10,
    ];

    public function setModel()
    {
        return new Block();
    }

    public function setSectionName()
    {
        return 'Blocks';
    }

    public function save($item, $request)
    {
        if(!$item) $item = $this->setModel();
        $exists = $item->exists;
        $item->fill($request->except('_token'))->save();
        #------------ Guardar Ids, Tags y Galería ------------
        event(new SaveGallery($item, $request, $exists));
        return $item->id;
    }

    public function paginate($filters)
    {
        $list = $this->model->with('staticmenu');

        if (!empty($filters['filters'])) {
            #----------- Buscar palabra clave -----------
            if (!empty($filters['keyword'])) {
                $list = $list->where(function ($query) use ($filters) {
                    $query->where($filters['filters'], 'LIKE', "%{$filters['keyword']}%");
                });
            }
        }
        #----------- Buscar por Seccion -----------
        !empty($filters['staticmenu_id']) ? $list = $list->where('staticmenu_id', $filters['staticmenu_id']) : null;

        $direction = ($filters['inverse'] == false) ? 'DESC' : 'ASC';

        $list = $list->orderBy('name', $direction)->paginate($filters['items']);

        return $list;
    }

    public function delete($ids) {
        #------------ Eliminar Ids, Tags y Galería ------------
        event(new DeleteGallery($list = $this->model->whereIn('id', $ids)->with('galleries')));
        $list->delete();
    }

}