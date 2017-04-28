<?php

namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\StaticmenuRepo;
use App\Http\Entities\Staticmenu;
use Illuminate\Http\Request;

use App\Http\Backend\Requests;
use App\Http\Backend\Requests\StaticmenuRequest;
use App\Http\Backend\Controllers\Controller;
use App\Http\Backend\Repositories\BlockRepo;
use Maatwebsite\Excel\Facades\Excel;

class StaticmenuController extends BaseController
{
    private $extra;
    private $blockRepo;

    function __construct(StaticmenuRepo $repo)
    {

        parent::__construct($repo);
        $this->blockRepo = new BlockRepo();
    }

    public function getRegistro($id = null, $extra = [])
    {

        return parent::getRegistro($id, $this->extra);
    }

    public function getIndex($extra = null)
    {

        return parent::getIndex($this->extra);
    }

    public function postUpdate(StaticmenuRequest $request, $id = null)
    {
        $request->merge(['slug' => $this->setSlug($request->get('name'), $id)]);
        return $this->doUpdate($request, $id);
        /* $request->merge(['slug' => $this->setSlug($request->get('title'), $id)]);
        $id = $this->repo->save($this->repo->getItem($id), $request);
        $menu = $this->repo->find($id);
        if (count($menu->blocks) == 0) {
            $request = ['name' => $request['name_block'],
                'title' => $request['title_block'],
                'subtitle' => $request['subtitle_block'],
                'text' => $request['text_block'],
                'staticmenu_id' => $id
            ];
            $request->merge(['slug' => $this->setSlug($request->get('title'), $idblock)]);
            $idblock = $this->blockRepo->save($this->blockRepo->getItem($idblock), $request);
        }
//
//        $redirect = $this->repo->returnToIndex
//            ? ['route' => null, 'id' => null]
//            : ['route' => '.edit', 'id' => $id];
        return redirect()->route(strtolower($this->sectionName));*/
    }


    public function getDownload()
    {
        $fecha = \Carbon\Carbon::now()->format('d_m_Y');
        Excel::create('Páginas' . $fecha, function ($excel) {
            $excel->sheet('Páginas', function ($sheet) {
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

                $pages = Staticmenu::all();
                $sheet->fromArray($pages);
            });
        })->download('xls');
    }

    public function getBlocks($id){
        return redirect()->route('blocks.custom', ['idmenu' => $id]);
    }

}
