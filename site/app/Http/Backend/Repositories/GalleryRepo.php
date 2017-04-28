<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 20/10/16
 * Time: 05:41 PM
 */

namespace App\Http\Backend\Repositories;

use App\Http\Entities\Gallery;

class GalleryRepo extends BaseRepo
{
    public function setModel()
    {
        return new Gallery();
    }

    public function setSectionName()
    {
        return 'Galleries';
    }

    public function save($item, $request)
    {
        // TODO: Implement save() method.
    }

    public function paginate($filters)
    {
        // TODO: Implement paginate() method.
    }

    /**
     * Obtener Galería y Elementos
     * @param $id
     * @return mixed
     */
    public function getGallery($id)
    {


        return $this->model
            ->with(['elements' => function($elements){
                $elements->orderBy('position', 'asc');
            }])
            ->where('id', $id)
            ->first();
    }

}