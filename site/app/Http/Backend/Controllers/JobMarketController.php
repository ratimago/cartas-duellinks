<?php

namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\AutoresponderRepo;
use App\Http\Backend\Repositories\JobMarketRepo;
use App\Http\Backend\Repositories\StateRepo;
use App\Http\Entities\JobMarket;
use Illuminate\Http\Request;

use App\Http\Backend\Requests;
use App\Http\Backend\Requests\JobMarketRequest;
use App\Http\Backend\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class JobMarketController extends BaseController
{
    private $extra;

    //
    function __construct(JobMarketRepo $repo, StateRepo $state, AutoresponderRepo $autoresponder)
    {
        $this->extra = [
            'states' => $state->getStates()->lists('name', 'id')->toArray(),
            'autoresponders' => $autoresponder->getDepartaments()->lists('departament', 'id')->toArray(),
            //'trucks'        => $truck->getTrucks()->lists('name_logo','id')->toArray(),
        ];
        parent::__construct($repo);
    }

    public function getIndex($extra = null)
    {
        return parent::getIndex($this->extra);
    }

    public function getRegistro($id = null, $extra = [])
    {
        return parent::getRegistro($id, $this->extra);
    }

    public function postUpdate(JobMarketRequest $request, $id = null)
    {
        return $this->doUpdate($request, $id);
    }


    public function getDownload()
    {
        $fecha = \Carbon\Carbon::now()->format('d_m_Y');
        Excel::create('Bolsa_Trabajo' . $fecha, function ($excel) {
            $excel->sheet('Bolsa_Trabajo', function ($sheet) {
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

                $jobs = JobMarket::all();
                foreach ($jobs as $j) {
                    $j->state_id = $j->state->name;
                }
                $sheet->fromArray($jobs);
            });
        })->download('xls');
    }

}
