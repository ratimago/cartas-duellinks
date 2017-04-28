<?php

namespace App\Http\Frontend\Controllers;

use App\Http\Frontend\Repositories\DealershipRepo;
use App\Http\Frontend\Repositories\StateRepo;
use App\Http\Frontend\Repositories\TruckRepo;
use Illuminate\Http\Request;

use App\Http\Frontend\Requests;
use App\Http\Frontend\Controllers\Controller;

class DealershipController extends Controller
{
    private $repo;

    function __construct(DealershipRepo $repo)
    {
        $this->repo = $repo;
    }

    //
    public function index(StateRepo $repoState, TruckRepo $repoTruck)
    {
        //Menú Camiones
        $trucks = $this->notFoundUnless($repoTruck->getTrucks()->get());
        $states = $repoState->getStates_Dealerships()->get();
        //dd($states);
        $state = $repoState->getStates_Dealerships()->first();
        $dealerships = $this->repo->getListDealerships(isset($state) ? $state->slug : '')->get();
        return view('Frontend.Cards.index', [
            'states' => $states,
            'active' => 'dealership',
            'dealerships' => $dealerships,
            'state'       => $state,
        ])->nest('menutrucks', "Frontend.Boosters.menu", [
            'active' => isset($state) ? $state->name : null,
            'trucks'    => $trucks
        ]);
    }

    public function getDealership($slug, StateRepo $repoState, TruckRepo $repoTruck)
    {
        //Menú Camiones
        $trucks = $this->notFoundUnless($repoTruck->getTrucks()->get());
        $states = $this->notFoundUnless($repoState->getStates_Dealerships()->get());
        $dealerships = $this->notFoundUnless($this->repo->getListDealerships($slug)->get());
        return view('Frontend.Cards.dealership', [
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
