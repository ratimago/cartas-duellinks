<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 1/11/16
 * Time: 01:30 PM
 */

namespace App\Http\Frontend\Repositories;


use App\Http\Entities\Autoresponder;

class AutoresponderRepo extends BaseRepo
{
    public function getModel()
    {
        return new Autoresponder();
    }

    public function getDepartament($slug)
    {
        $departament = $this->getModel()->where('slug', $slug);
        return $departament;
    }

    public function getDepartamentById($id)
    {
        $departament = $this->getModel()->where('id', $id)->first();
        //dd($departament);
        return $departament;
    }

}