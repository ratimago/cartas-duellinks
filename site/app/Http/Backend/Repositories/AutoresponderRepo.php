<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 20/10/16
 * Time: 05:39 PM
 */

namespace App\Http\Backend\Repositories;


use App\Http\Entities\Autoresponder;

class AutoresponderRepo extends BaseRepo
{
    protected $defaultFilters = [
        'keyword' => null,
        'active' => null,
        'inverse' => false,
        'items' => 10,
    ];

    public function setModel()
    {
        return new Autoresponder();
    }

    public function setSectionName()
    {
        return 'Autoresponders';
    }

    public function save($item, $request)
    {
        if (!$item) $item = $this->setModel();
        $item->fill($request->except('_token'))->save();
        return $item->id;
    }

    public function paginate($filters)
    {
        $list = $this->model;

        #----------- Buscar palabra clave -----------
        if (!empty($filters['keyword'])) {
            $list = $list->where(function ($query) use ($filters) {
                $query->where('section', 'LIKE', "%{$filters['keyword']}%");
            });
        }

        $direction = ($filters['inverse'] == false) ? 'DESC' : 'ASC';

        $list = $list->orderBy('section', $direction)->paginate($filters['items']);

        return $list;
    }

    public function delete($ids)
    {
        if(!empty($ids))
        {
            $autoresponders = $this->model->whereIn('id', $ids)->get();

            foreach($autoresponders as $autoresponder)
                $autoresponder->delete();
        }
    }

    public function getDepartaments(){
        $departaments = $this->setModel()->select();
        return $departaments;
    }

}