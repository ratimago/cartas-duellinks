<?php

namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\DealershipRepo;
use App\Http\Frontend\Repositories\StateRepo;
use Illuminate\Http\Request;

use App\Http\Backend\Requests;
use App\Http\Backend\Controllers\Controller;

class GmapsController extends Controller
{
    private $repo;
    private $repo_state;

    function __construct(DealershipRepo $repo, StateRepo $repostate)
    {
        $this->repo = $repo;
        $this->repo_state = $repostate;
    }

    public function getIndexCustom($id)
    {
        $dealership = $this->repo->find($id);
        $state = $this->repo_state->getStateById($dealership->state_id);
        $band = false;
        $coordenadas = null;
        if (strpos($dealership->coordinates, ',') !== false) {
            $coordenadas = explode(',', $dealership->coordinates);
            $band = true;
        } else {
            $coordenadas = array(19.436782, -99.18492300000003);
            $band = false;
        }

        return view('Backend.Gmaps.gmaps', [
            'latitud' => $coordenadas[0],
            'longitud' => $coordenadas[1],
            'address' => $dealership->address,
            'phones' => $dealership->phones,
            'state' => $state->name,
            'mensaje' => $band == false ? "Mensaje: Las Coordenadas que se muestran a continuación son genéricas,
                        por favor ingrese sus coordenadas" : ""]);
    }
}
