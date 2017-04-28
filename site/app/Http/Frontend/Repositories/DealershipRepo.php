<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 1/11/16
 * Time: 01:31 PM
 */

namespace App\Http\Frontend\Repositories;


use App\Http\Entities\Dealership;

class DealershipRepo extends BaseRepo
{
    private $repo;

    function __construct(StateRepo $repo)
    {
        $this->repo = $repo;
    }


    public function getModel()
    {
        return new Dealership();
    }

    public function getListDealerships($slug)
    {
        $state = $this->repo->getStateBySlug($slug);
        $dealerships = $this->getModel()->where('state_id', $state->id)->where('type_dealership', 2);
        return $dealerships;
    }

//    public function getStateByName($name){
//
//    }

}