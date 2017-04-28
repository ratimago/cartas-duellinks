<?php

namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\ArticleRepo;
use App\Http\Backend\Repositories\CategoryRepo;
use App\Http\Entities\Article;
use Illuminate\Http\Request;

use App\Http\Backend\Requests;
use App\Http\Backend\Requests\ArticleRequest;
use App\Http\Backend\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;

class ArticleController extends BaseController
{
    private $extra;

    /**
     * @param ArticleRepo $repo
     * @param CategoryRepo $categories
     */
    function __construct(ArticleRepo $repo, CategoryRepo $categories)
    {
        $this->extra = [
            'categories' => $categories->getCategories()->lists('name', 'id')->toArray(),
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
    public function getRegistro($id = null, $extra = [])
    {
        return parent::getRegistro($id, $this->extra);
    }

    /**
     * @param ArticleRequest $request
     * @param null $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function postUpdate(ArticleRequest $request, $id = null)
    {
        // ---------- Ícono del Artículo
        $request->hasFile('icono')
            ? $request->merge(['icon' => $this->saveFile($request, 'icono', public_path('filesUpdates/Articles'), uniqid('icon'))])
            : null;

        $request->merge(['slug' => $this->setSlug($request->get('title'), $id)]);

        $request->merge(['user_id' => \Auth::user()->id]);
        //dd($request->all());
        //dd(\Auth::user()->id);
        return $this->doUpdate($request, $id);
    }


    public function getDownload()
    {
        $fecha = \Carbon\Carbon::now()->format('d_m_Y');
        Excel::create('Artículos' . $fecha, function ($excel) {
            $excel->sheet('Artículos', function ($sheet) {
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

                $articles = Article::all();
                $sheet->fromArray($articles);
            });
        })->download('xls');
    }


}
