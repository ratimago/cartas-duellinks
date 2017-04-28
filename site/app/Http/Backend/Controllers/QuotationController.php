<?php

namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\AutoresponderRepo;
use App\Http\Backend\Repositories\QuotationRepo;
use App\Http\Backend\Repositories\StateRepo;
use App\Http\Backend\Repositories\TruckRepo;
use App\Http\Entities\Autoresponder;
use App\Http\Entities\Quotation;
use App\Http\Entities\User;
use Illuminate\Http\Request;

use App\Http\Backend\Requests;
use App\Http\Backend\Requests\QuotationRequest;
use App\Http\Backend\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class QuotationController extends BaseController
{
    private $extra;

    //
    function __construct(QuotationRepo $repo, StateRepo $state, AutoresponderRepo $autoresponder/*, TruckRepo $truck*/)
    {
        $this->extra = [
            'states' => $state->getStates()->lists('name', 'id')->toArray(),
            'autoresponders' => $autoresponder->getDepartaments()->lists('section', 'id')->toArray(),
            //'trucks'        => $truck->getTrucks()->lists('name_logo','id')->toArray(),
        ];
//        dd($this->extra);
        parent::__construct($repo);
    }

    public function getRegistro($id = null, $extra = [])
    {
        return parent::getRegistro($id, $this->extra);
    }

    public function getIndex($extra = null)
    {
        return parent::getIndex($this->extra);
    }

    public function postUpdate(QuotationRequest $request, $id = null)
    {
        return $this->doUpdate($request, $id);
    }

    /**
     * Método para Filtrar x Departamento
     * @param $departament
     * @return \Illuminate\Http\RedirectResponse
     */
    public function getIndexCustom($departament)
    {
        $filters = $this->repo->getFilters('Quotations');
        $clave = array_search($departament, $this->extra['autoresponders']); // $clave = 2;
        $filters = array_replace($filters, array('autoresponder_id' => $clave));
        \Session::Put("Quotations.filters", $filters);
        return redirect()->route('quotations');
    }


    public function getDownload($id)
    {
        $fecha = \Carbon\Carbon::now()->format('d_m_Y');
        $str_quotation = Autoresponder::query()->find($id);
        $str = $str_quotation->departament;
        Excel::create($str . $fecha, function ($excel) {
            $excel->sheet('Listado', function ($sheet) {
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

                $quotations = Quotation::all();
                foreach ($quotations as $q) {
                    $q->autoresponder_id = $q->autoresponder->departament;
                    $q->state_id = $q->state->name;
                }
                $sheet->fromArray($quotations);
            });
        })->download('xls');
    }

}
