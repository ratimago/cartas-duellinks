<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 3/11/16
 * Time: 10:24 AM
 */

namespace App\Http\Frontend\Repositories;

use App\Http\Entities\Dealership;
use App\Http\Entities\State;

class StateRepo
{
    public function getModel()
    {
        return new State();
    }

    public function getStates()
    {
        $states = $this->getModel()->select();
        return $states;
    }

    public function getStates_Dealerships()
    {
//        select * from states where id in(
//            select dealerships.state_id from dealerships where states.id=dealerships.state_id
        $states = \DB::table('states')
            ->whereExists(function ($query) {
                $query->select(\DB::raw(1))
                    ->from('dealerships')
                    ->whereRaw('dealerships.state_id = states.id')->where('dealerships.deleted_at', null)->where('type_dealership', 2);
            });
        return $states;
    }

    public function getStates_CenterService()
    {
        $states = \DB::table('states')
            ->whereExists(function ($query) {
                $query->select(\DB::raw(1))
                    ->from('dealerships')
                    ->whereRaw('dealerships.state_id = states.id')->where('dealerships.deleted_at', null)->where('type_dealership', 1);
            });
        return $states;
    }

    public function getStateById($id)
    {
        $state = $this->getModel()->where('id', $id)->first();
        return $state;
    }

    public function getStateBySlug($slug)
    {
        $state = $this->getModel()->where('slug', $slug)->first();
        return $state;
    }
}