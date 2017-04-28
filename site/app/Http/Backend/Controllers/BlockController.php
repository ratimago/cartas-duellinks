<?php

namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\BlockRepo;
use App\Http\Backend\Repositories\StaticmenuRepo;
use App\Http\Entities\Block;
use Illuminate\Http\Request;

use App\Http\Backend\Requests;
use App\Http\Backend\Controllers\Controller;
use App\Http\Backend\Requests\BlockRequest;

class BlockController extends BaseController
{
    private $extra;

    //
    function __construct(BlockRepo $repo, StaticmenuRepo $menu)
    {
        $this->extra = [
            'menus' => $menu->getStaticmenus()->lists('name', 'id')->toArray(),
        ];

        parent::__construct($repo);
    }


    public function getIndex($extra = null)
    {

        return parent::getIndex($this->extra);
    }

    public function getIndexCustom($idmenu)
    {


        $filters = $this->repo->getFilters('Blocks');
        $filters = array_replace($filters, array('staticmenu_id' => $idmenu));
        \Session::Put("Blocks.filters", $filters);
        //dd($filters);
        return redirect()->route('blocks');
    }

    public function getRegistro($id = null, $extra = [])
    {

        return parent::getRegistro($id, $this->extra);
    }

    public function postUpdate(BlockRequest $request, $id = null)
    {
        //dd($request);
        $request->merge(['slug' => $this->setSlug($request->get('name'), $id)]);

        return $this->doUpdate($request, $id);
    }


    public function getDownload()
    {
        $fecha = \Carbon\Carbon::now()->format('d_m_Y');
        Excel::create('Subsecciones' . $fecha, function ($excel) {
            $excel->sheet('Subsecciones', function ($sheet) {
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

                $blocks = Block::all();
                $sheet->fromArray($blocks);
            });
        })->download('xls');
    }

}
