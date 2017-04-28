<?php

namespace App\Http\Frontend\Controllers;

use App\Http\Frontend\Repositories\CenterServiceRepo;
use App\Http\Frontend\Repositories\StateRepo;
use App\Http\Frontend\Repositories\TruckRepo;
use Illuminate\Http\Request;

use App\Http\Frontend\Requests;
use App\Http\Frontend\Controllers\Controller;

class CenterServiceController extends Controller
{
    private $repo;

    function __construct(CenterServiceRepo $repo)
    {

        $this->repo = $repo;

    }

    //
    public function index(StateRepo $repoState, TruckRepo $repoTruck)
    {
        //Menú Camiones
        $trucks = $this->notFoundUnless($repoTruck->getTrucks()->get());
        $states = $repoState->getStates_CenterService()->get();
        //dd($states);
        $state = $repoState->getStates_CenterService()->first();
        $dealerships = $this->repo->getListCentersService(isset($state) ? $state->slug : '')->get();
        return view('Frontend.CentersService.index', [
            'states' => $states,
            'active' => 'dealership',
            'dealerships' => $dealerships,
            'state'       => $state
        ])->nest('menutrucks', "Frontend.Boosters.menu", [
            'active' => isset($state) ? $state->name : null,
            'trucks'    => $trucks
        ]);
    }

    public function getService($slug, StateRepo $repoState, TruckRepo $repoTruck)
    {

        //Menú Camiones
        $trucks = $this->notFoundUnless($repoTruck->getTrucks()->get());
        $states = $this->notFoundUnless($repoState->getStates_CenterService()->get());
        $dealerships = $this->notFoundUnless($this->repo->getListCentersService($slug)->get());
        return view('Frontend.CentersService.centerservice', [
            'dealerships' => $dealerships,
            'states' => $states,
            'state'  => $slug,
            'active' => $slug
        ])->nest('menutrucks', "Frontend.Boosters.menu", [
            'active' => $slug,
            'trucks'    => $trucks
        ]);

    }
}
