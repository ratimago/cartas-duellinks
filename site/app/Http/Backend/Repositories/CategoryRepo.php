<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 25/10/16
 * Time: 12:33 PM
 */

namespace App\Http\Backend\Repositories;


use App\Http\Entities\Category;

class CategoryRepo extends BaseRepo
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
        return new Category();
    }

    public function setSectionName()
    {
        return 'Categories';
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

        if (!empty($filters['filters'])) {
            #----------- Buscar palabra clave -----------
            if (!empty($filters['keyword'])) {
                $list = $list->where(function ($query) use ($filters) {
                    $query->where($filters['filters'], 'LIKE', "%{$filters['keyword']}%");
                });
            }
        }

        $direction = ($filters['inverse'] == false) ? 'DESC' : 'ASC';

        $list = $list->orderBy('name', $direction)->paginate($filters['items']);

        return $list;
    }

    /**
     * @return mixed
     */
    public function getCategories()
    {
        $categories = $this->setModel()->select();
        return $categories;
    }


    public function delete($ids)
    {
        if(!empty($ids))
        {
            $categories = $this->model->whereIn('id', $ids)->get();

            foreach($categories as $category)
                $category->delete();
        }
    }

}