<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 1/11/16
 * Time: 01:30 PM
 */

namespace App\Http\Frontend\Repositories;


use App\Http\Entities\Category;

class CategoryRepo extends BaseRepo
{
    public function getModel()
    {
        return new Category();
    }


    public function getCategories()
    {
        $categories = $this->getModel()->select();
        return $categories;
    }

}
