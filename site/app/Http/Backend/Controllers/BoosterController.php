<?php

namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\BoosterRepo;
use App\Http\Entities\Booster;
use Illuminate\Http\Request;

use App\Http\Backend\Requests;
use App\Http\Backend\Requests\BoosterRequest;
use App\Http\Backend\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class BoosterController extends BaseController
{
    private $extra;
    //
    function __construct(BoosterRepo $boosterRepo)
    {
        parent::__construct($boosterRepo);
    }

    /**
     * @param null $extra
     * @return mixed
     */
    public function getIndex($extra = null)
    {

        return parent::getIndex($this->extra);

    }


    /**
     * @param TestimonialRequest $request
     * @param null $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function postUpdate(BoosterRequest $request, $id = null)
    {

        if ($request['chbficha'] == true) {
            $request['file_datasheet'] = null;
        }
        if ($request['chb-catalogo'] == true) {
            $request['file_catalog'] = null;
        }
        //------------ Logotipo ------------
        $request->hasFile('logotipo')
            ? $request->merge(['name_logo' => $this->saveFile($request, 'logotipo', public_path('filesUpdates/Camiones'), uniqid('icon'))])
            : null
        ;

        // ---------- Imagen de Fondo
        $request->hasFile('imagenfondo')
            ? $request->merge(['name_image_background' => $this->saveFile($request, 'imagenfondo', public_path('filesUpdates/Camiones'), uniqid('background'))])
            : null
        ;

        // ---------- Imagen de Camión
        $request->hasFile('imagencamion')
            ? $request->merge(['name_image_truck' => $this->saveFile($request, 'imagencamion', public_path('filesUpdates/Camiones'), uniqid('truck'))])
            : null
        ;

        // ---------- Imagen de Perfil
        $request->hasFile('imagenperfil')
            ? $request->merge(['name_profile' => $this->saveFile($request, 'imagenperfil', public_path('filesUpdates/Camiones'), uniqid('profile'))])
            : null
        ;

        // ---------- Archivo de Ficha Tecnica
        $request->hasFile('archivo_fichatecnica')
            ? $request->merge(['file_datasheet' => $this->saveFile($request, 'archivo_fichatecnica', public_path('filesUpdates/Camiones/FichaTecnica/'), uniqid('Ficha'))])
            : null
        ;

        // ---------- Archivo de Catalogo
        $request->hasFile('archivo_catalogo')
            ? $request->merge(['file_catalog' => $this->saveFile($request, 'archivo_catalogo', public_path('filesUpdates/Camiones/FichaTecnica/'), uniqid('Catalogo'))])
            : null
        ;

        $request->merge(['slug'   => $this->setSlug($request->get('name'), $id)]);

        return $this->doUpdate($request, $id);
    }


    public function getDownload(){
        $fecha = \Carbon\Carbon::now()->format('d_m_Y');

        Excel::create('Camiones_'.$fecha, function($excel) {
            $excel->sheet('Camiones', function($sheet) {
                $sheet->setStyle(array(
                    'font' => array(
                        'name'      =>  'Calibri',
                        'size'      =>  12,
                        'bold'      =>  false
                    )
                ));
                // Set auto size for sheet
                $sheet->setAutoSize(true);
                // Auto filter for entire sheet
                $sheet->setAutoFilter();
                $trucks = Truck::all();
                $sheet->fromArray($trucks);
            });
        })->download('xls');
    }

}
