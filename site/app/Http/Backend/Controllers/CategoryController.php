<?php

namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\CategoryRepo;
use App\Http\Entities\Category;
use Illuminate\Http\Request;

use App\Http\Backend\Requests;
use App\Http\Backend\Requests\CategoryRequest;
use App\Http\Backend\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class CategoryController extends BaseController
{
    private $extra;
    //
    function __construct(CategoryRepo $repo)
    {
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
     * @param CategoryRequest $request
     * @param null $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function postUpdate(CategoryRequest $request, $id = null)
    {
        //dd($id);
        $request->merge(['slug'   => $this->setSlug($request->get('name'), $id)]);

        return $this->doUpdate($request, $id);
    }

    public function getDownload(){
        $fecha = \Carbon\Carbon::now()->format('d_m_Y');
        Excel::create('Categorias' . $fecha, function ($excel) {
            $excel->sheet('Categorias', function ($sheet) {
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

                $categories = Category::all();
                $sheet->fromArray($categories);
            });
        })->download('xls');
    }

}
