<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 20/10/16
 * Time: 05:42 PM
 */

namespace App\Http\Backend\Repositories;


use App\Http\Entities\Block;
use App\Http\Entities\Staticmenu;
use App\Http\Backend\Events\Block\SaveEvent as SaveGallery;
use App\Http\Backend\Events\Block\DeleteEvent as DeleteGallery;

class StaticmenuRepo extends BaseRepo
{
    protected $defaultFilters = [
        'keyword' => null,
        'active' => null,
        'inverse' => false,
        'items' => 10,
    ];

    public function setModel()
    {
        return new Staticmenu();
    }

    public function setSectionName()
    {
        return 'Staticmenus';
    }

    public function save($item, $request)
    {
        if (!$item) $item = $this->setModel();
        $item->fill($request->except('_token'))->save();
        return $item->id;
    }

    public function paginate($filters)
    {
        $list = $this->model->with('blocks');

        #----------- Buscar palabra clave -----------
        if (!empty($filters['keyword'])) {
            $list = $list->where(function ($query) use ($filters) {
                $query->where('name', 'LIKE', "%{$filters['keyword']}%");
            });
        }

        $direction = ($filters['inverse'] == false) ? 'DESC' : 'ASC';

        $list = $list->orderBy('name', $direction)->paginate($filters['items']);

        return $list;
    }

    public function getStaticmenus()
    {
        $menus = $this->setModel()->select();
        return $menus;
    }

    public function delete($ids)
    {
        $deleted = 0;
        $list = $this->model->whereIn('id', $ids)->with('blocks');
//        $str = '';
//        foreach($list as $item){
//            $str+=count($item->blocks) + '\n';
//        }
//        dd($str);
        $deleted = $list->delete();
        $editions = array();
        return !empty($editions) ? ['warning' => $editions] : null;
    }

}