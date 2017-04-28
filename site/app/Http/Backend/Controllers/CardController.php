<?php

namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\BoosterRepo;
use App\Http\Backend\Repositories\CardRepo;
use App\Http\Entities\Card;
use Illuminate\Http\Request;

use App\Http\Backend\Requests;
use App\Http\Backend\Requests\CardRequest;
use App\Http\Backend\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class CardController extends BaseController{
    private $extra;

    function __construct(CardRepo $repo, BoosterRepo $booster)
    {
        $this->extra = [
            'booster' => $booster->getBoosters()->lists('name', 'id')->toArray(),
        ];
        parent::__construct($repo);
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
     * @param null $id
     * @param array $extra
     * @return mixed
     */
    public function getRegistro($id = null, $extra = []){
        return parent::getRegistro($id, $this->extra);
    }


    /**
     * @param TestimonialRequest $request
     * @param null $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function postUpdate(CardRequest $request, $id = null)
    {
        if ($request['chb-catalogo-drop'] == true) {
            $request['image'] = null;
        }
        //------------ Logotipo ------------
        /*
        $request->hasFile('image')
            ? $request->merge(['image' => $this->saveFile($request, 'image', public_path('imagenes/caryas'), uniqid('image'))])
            : null
        ;
        */
        return $this->doUpdate($request, $id);
    }


    public function postMaps()
    {

    }

    public function getDownload()
    {
        $fecha = \Carbon\Carbon::now()->format('d_m_Y');
        Excel::create('Consecionarios' . $fecha, function ($excel) {
            $excel->sheet('Consecionarios', function ($sheet) {
                $sheet->setStyle(array(
                    'font' => array(
                        'name' => 'Calibri',
                        'size' => 12,
                        'bold' => false
                    )
                ));
                // Set auto size for sheet
                $sheet->setAutoSize(true);
                // Auto filter for entire sheet
                $sheet->setAutoFilter();
                $dealership = Dealership::all();
                $sheet->fromArray($dealership);
            });
        })->download('xls');
    }


}
