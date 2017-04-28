<?php

namespace App\Http\Frontend\Repositories;

use App\Http\Entities\Truck;

class TruckRepo extends BaseRepo
{
    public function getModel()
    {
        return new Truck();
    }


    public function getTrucks()
    {
        $trucks = $this->getModel()->with(['galleries' => function ($galleries) {
            $galleries->with(['elements' => function ($elements) {
                $elements->orderBy('position', 'asc');
            }]);
        }]);
        return $trucks;
    }

    public function getTruck($slug)
    {
        $gallery = $this->getModel()->where('slug', $slug)->with(['galleries' => function ($galleries) {
            $galleries->with(['elements' => function ($elements) {
                $elements->orderBy('position', 'asc');
            }]);
        }])->first();
        return $gallery;
    }

    public function getTrucksArray($ids){
        $trucks = $this->getModel()->whereIn('id', $ids)->get();
        //dd($truck);
        return $trucks;
    }

    public function onlyTruck($slug)
    {
        $truck = $this->getModel()->where('slug', $slug)->first();
        return $truck;
    }

}

