<?php

namespace App\Http\Frontend\Controllers;

use App\Http\Frontend\Repositories\TruckRepo;
use Illuminate\Http\Request;

use App\Http\Frontend\Requests;
use App\Http\Frontend\Controllers\Controller;

class TruckController extends Controller
{
    private $repo;

    function __construct(TruckRepo $repo)
    {
        $this->repo = $repo;
    }


    //
    public function index()
    {
        $trucks = $this->notFoundUnless($this->repo->getTrucks()->get());
        $truck = null;
        $gallery = null;
        if (isset($trucks)) {
            $first = $trucks->first();
            if (isset($first)) {
                $truck = $this->notFoundUnless($this->repo->getTruck($trucks->first()->slug));
                $gallery = $this->notFoundUnless($truck->galleries->first());
            }
        }
        //dd($truck);
        return view('Frontend.Boosters.index',
            ['trucks' => $trucks,
                'truck' => $truck,
                'gallery' => $gallery,
                'active' => 'truck',
                'meta_description' => isset($truck->meta_description) ? $truck->meta_description : "",
            ])->nest('menutrucks', "Frontend.Boosters.menu", [
            'active' => isset($truck) ? $truck->slug : null,
            'trucks' => $trucks
        ]);
    }

    // Validar aqui
    public function getTruck($slug)
    {
        $trucks = $this->notFoundUnless($this->repo->getTrucks()->get());
        $truck = $this->notFoundUnless($this->repo->getTruck($slug));

        return view('Frontend.Boosters.Truck',
            ['gallery' => $truck->galleries->first(),
                'truck' => $truck,
                'trucks' => $trucks,
                'active' => $truck->slug])->nest('menutrucks', "Frontend.Boosters.menu", [
            'active' => isset($truck) ? $truck->slug : null,
            'trucks' => $trucks
        ]);
    }

    public function getFichaTecnica($slug)
    {
        $file = $this->repo->onlyTruck($slug);
        $rutaarchivo = null;
        if (file_exists(public_path('filesUpdates/Camiones/FichaTecnica/' . $file->file_datasheet))) {
            $rutaarchivo = public_path('filesUpdates/Camiones/FichaTecnica/' . $file->file_datasheet);
            return response()->download($rutaarchivo);
        }

        return $this->notFoundUnless($rutaarchivo);
    }

    public function getCatalogo($slug)
    {
        $file = $this->repo->onlyTruck($slug);
        $rutaarchivo = null;
        if (file_exists(public_path('filesUpdates/Camiones/FichaTecnica/' . $file->file_catalog))) {
            $rutaarchivo = public_path('filesUpdates/Camiones/FichaTecnica/' . $file->file_catalog);
            return response()->download($rutaarchivo);
        }

        return $this->notFoundUnless($rutaarchivo);
    }
}
