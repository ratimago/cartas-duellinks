<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 25/10/16
 * Time: 12:28 PM
 */

namespace App\Http\Backend\Repositories;

use App\Http\Backend\Events\Article\SaveEvent as SaveGallery;
use App\Http\Backend\Events\Article\DeleteEvent as DeleteGallery;
use App\Http\Entities\Article;

class ArticleRepo extends BaseRepo
{
    protected $defaultFilters = [
        'keyword' => null,
        'filters' => 'title',
        'category_id' => null,
        'active' => null,
        'inverse' => false,
        'items' => 10,
    ];

    public function setModel()
    {
        return new Article();
    }

    public function setSectionName()
    {
        return 'Articles';
    }

    public function save($item, $request)
    {
        if (!$item) $item = $this->setModel();
        $exists = $item->exists;
        $item->fill($request->except('_token', 'icono'))->save();
        #------------ Guardar Ids, Tags y Galería ------------
        event(new SaveGallery($item, $request, $exists));
        return $item->id;
    }

    public function paginate($filters)
    {
        $list = $this->model->with('category');

        if (!empty($filters['filters'])) {
            #----------- Buscar palabra clave -----------
            if (!empty($filters['keyword'])) {
                $list = $list->where(function ($query) use ($filters) {
                    $query->where($filters['filters'], 'LIKE', "%{$filters['keyword']}%");
                });
            }
        }
        #----------- Buscar por Categoría -----------
        !empty($filters['category_id']) ? $list = $list->where('category_id', $filters['category_id']) : null;

        $direction = ($filters['inverse'] == false) ? 'DESC' : 'ASC';

        $list = $list->orderBy($filters['filters'], $direction)->paginate($filters['items']);

        return $list;
    }

    /**
     * Es necesario para que se puedan eliminar
     * @param $idList
     * @return array|null
     */
    public function delete($ids)
    {
        #------------ Eliminar Ids, Tags y Galería ------------
        event(new DeleteGallery($list = $this->model->whereIn('id', $ids)->with('galleries')));
        $list->delete();
    }

    public function getArticles()
    {
        $articles = $this->setModel()->orderBy('created_at', 'DESC')->with
        (['galleries' => function ($galleries) {
            $galleries->with(['elements' => function ($elements) {
                $elements->orderBy('position', 'asc')->first();
            }])->first();
        }, 'category'])->paginate(1);
        //->with('galleries', 'category')->paginate(10);
        return $articles;
    }

}