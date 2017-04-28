<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 1/11/16
 * Time: 01:28 PM
 */

namespace App\Http\Frontend\Repositories;


use App\Http\Entities\Staticmenu;

class StaticmenuRepo extends BaseRepo
{
    public function getModel()
    {
        return new Staticmenu();
    }

    public function getSection($slug)
    {
        return $this->getModel()->where('slug', $slug)
            ->with(['blocks' => function ($blocks) {
                $blocks->with(['galleries' => function ($galleries) {
                    $galleries->with(['elements' => function ($elements) {
                        $elements->orderBy('position', 'asc');
                    }]);
                }]);
            }])->first();
    }

}