<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 1/11/16
 * Time: 01:28 PM
 */

namespace App\Http\Frontend\Repositories;


use App\Http\Entities\Promotion;

class PromotionRepo extends BaseRepo
{
    public function getModel()
    {
        return new Promotion();
    }

    public function getPromotion()
    {
        return $this->getModel()->with(['galleries' => function ($galleries) {
            $galleries->with(['elements' => function ($elements) {
                $elements->orderBy('position', 'asc');
            }]);
        }])->first();
    }

}