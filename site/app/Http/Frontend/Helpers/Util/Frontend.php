<?php namespace App\Http\Frontend\Helpers\Util;

use App\Http\Frontend\Repositories\DownloadsRepo;
use App\Http\Frontend\Repositories\DirectoriesRepo;
use App\Http\Frontend\Repositories\FormsRepo;

class Frontend
{
    /*
     * ============= Categorías de Descargas =============
     */
    public function getDownloads($id)
    {
        $category = new DownloadsRepo();

        return $category->getCategories($id);
    }

    /*
     * ============= Directorios =============
     */
    public function getDirectories()
    {
        $directory = new DirectoriesRepo();

        return $directory->getDirectories();
    }

    /*
     * ============= Formularios =============
     */
    public function getForms($id)
    {
        $form = new FormsRepo();

        return $form->getForms($id);
    }

    /*
     * ============= Definir ruta de categoría =============
     */
    public function getRoute($item, $article = null)
    {
        $category = array();

        $item->category->parent_id
            ? $category = [$item->category->parent->slug, $item->category->slug]
            : $category = [$item->category->slug];

        return $category + [2 => $article];
    }

    /*
     * ============= Sustituir shortcuts =============
     */
    public function replaceShortCuts($content, $shortcut)
    {
        $find = array();
        $replace = array();

        switch ($shortcut) {
            case 'video':
                $search = '/{youtube}(.*){\/youtube}/U';
                $view = 'Frontend.Article.Modules.video';
        }

        preg_match_all($search, $content, $result);

        if (count(array_filter($result)) > 1) {
            foreach ($result[0] as $num => $item) {
                $find[] = "({$item})";
                $replace[] = view($view, ['content' => $result[1][$num]])->render();
            }
        }

        return preg_replace($find, $replace, $content);
    }

    /*
     * ============= Buscar artículo por url =============
     */
    private function findArticle($url)
    {
        $article = new ArticlesRepo();

        $url = !empty($url)
            ? explode('/', json_decode($url)->article)
            : [];

        return $article->getArticle(end($url));
    }

    /*
     * ============= Fecha =============
     */
    public function date($value)
    {
        setlocale(LC_ALL, 'es_ES.UTF-8');
        return strftime('%A %d de %B de %Y', strtotime($value));
    }

    /*
     * ============= Fecha de publicación =============
     */
    public function datePublishing($value, $article = false)
    {
        $meses = array("", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

        $value = explode('-', $value);
        $year = $value[0];
        $month = $value[1];
        $day = $value[2];
        $day = substr($day, 0, 2);
        if ($month < 10) {
            $month = str_replace('0', '', $month);
        }
        try {
            if ($article)
                return $day . ' ' . $meses[$month] . ' ' . $year;
            else
                return $meses[$month] . ' ' . $day . ', ' . $year;
        } catch (\Exception $e) {
            dd($e, $value);
        }
    }

    /*
     * ============= Formato de Fecha =============
     */
    public function dateFormat($value)
    {
        $meses = array("", "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic");

        $value = explode('-', $value);
        $year = $value[0];
        $month = $value[1];
        $day = $value[2];
        $day = substr($day, 0, 2);
        if ($month < 10) {
            $month = str_replace('0', '', $month);
        }
        try {
            return $meses[$month] . ' ' . $day;
        } catch (\Exception $e) {
            dd($e, $value);
        }
    }

    /*
     * ============= Formato de Fecha =============
     */
    public function hourFormat($value)
    {
        return strftime('%H:%M:%S %p', strtotime($value));
    }

    /*
     * ============= Formato de Fecha =============
     */
    public function formatMonth($value)
    {
        setlocale(LC_ALL, 'es_ES.UTF-8');
        //October 20, 2015
        return strftime('%B %Y', strtotime($value));
    }

    public function getLoadWeight($value){
        $value = strtoupper($value);
        $pos = strpos($value, "TON");
        return substr($value, 0, $pos+3);
    }
}