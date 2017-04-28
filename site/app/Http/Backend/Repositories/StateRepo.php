<?php
/**
 * Created by PhpStorm.
 * User: scalf
 * Date: 25/10/16
 * Time: 11:36 AM
 */

namespace App\Http\Backend\Repositories;


use App\Http\Entities\State;

class StateRepo
{
    public function setModel()
    {
        return new State();
    }

    public function getStates()
    {
        $states = $this->setModel()->select();
        return $states;
    }

    public function getState($name)
    {
        $state = $this->setModel()->where('name', $name);
        return $state;
    }
}