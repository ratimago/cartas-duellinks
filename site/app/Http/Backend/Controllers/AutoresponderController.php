<?php

namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\AutoresponderRepo;
use App\Http\Entities\Autoresponder;
use Illuminate\Http\Request;

use App\Http\Backend\Requests;
use App\Http\Backend\Requests\AutoresponderRequest;
use App\Http\Backend\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class AutoresponderController extends BaseController
{
    //
    function __construct(AutoresponderRepo $repo)
    {
        parent::__construct($repo);
    }


    public function postUpdate(AutoresponderRequest $request, $id = null)
    {
        $request->merge(['slug' => $this->setSlug($request->get('section'), $id)]);
        return $this->doUpdate($request, $id);
    }

    public function getDownload()
    {
        $fecha = \Carbon\Carbon::now()->format('d_m_Y');
        Excel::create('Autorespuestas' . $fecha, function ($excel) {
            $excel->sheet('Autorespuestas', function ($sheet) {
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

                $autoresponders = Autoresponder::all();
                $sheet->fromArray($autoresponders);
            });
        })->download('xls');
    }

}
