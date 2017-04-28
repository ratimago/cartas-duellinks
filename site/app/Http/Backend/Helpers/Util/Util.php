<?php namespace App\Http\Backend\Helpers\Util;

use App\Http\Backend\Repositories\SectionRepo;
use App\Http\Backend\Repositories\CategoryRepo;
use Carbon\Carbon;

class Util
{
    private $material_transport = array('0' => 'Seleccionar', '1' => 'Agua', '2' => 'Alimentos Refrigerados',
        '3' => 'Alimentos sin Refrigerar', '4' => 'Frutas y Legumbres', '5' => 'Gas', '6' => 'Grúa',
        '7' => 'Lácteos', '8' => 'Material de Construcción', '9' => 'Otro', '10' => 'Pasajeros',
        '11' => 'Refrescos/Bebidas');
    private $load_weight = array('0' => 'Seleccionar', '1' => 'Menos de una tonelada', '2' => '1 Tonelada',
        '3' => '2 Toneladas', '4' => '3 Toneladas', '5' => '4 Toneladas', '6' => '5 Toneladas',
        '7' => '6 Toneladas', '8' => '7 Toneladas', '9' => '8 Toneladas', '10' => '10-11 Toneladas',
        '11' => 'Mas de 11 toneladas');
    private $bussiness_office = array('0' => 'Seleccionar', '1' => 'Director General', '2' => 'Director de Flotilla',
        '3' => 'Ejecutivo de Compras', '4' => 'Responsable de Compras', '5' => 'Responsable de Flota', '6' => 'Dueño',
        '7' => 'Operador', '8' => 'Otro');
    private $bussiness_type = array('0' => 'Seleccionar', '1' => 'Pequeña', '2' => 'Mediana',
        '3' => 'Grande', '4' => 'Negocio Propio');
    private $type_dealership = array(1 => 'Centro de Servicio', 2 => 'Concesionario');

    /*
     * ============= Estado de un registro =============
     */
    public function active($value)
    {
        return empty($value) ? '<span class="glyphicon glyphicon-eye-close"></span>' : '<span class="glyphicon glyphicon-eye-open"></span>';
    }

    /*
     * ============= Artículo Destacado =============
     */
    public function featured($value)
    {
        return empty($value) ? null : '<span class="glyphicon glyphicon-bookmark"></span>';
    }

    /*
     * ============= Artículo Principal =============
     */
    public function principal($value)
    {
        return empty($value) ? null : '<span class="glyphicon glyphicon-star"></span>';
    }

    /*
     * ============= Artículo Home (Video) =============
     */
    public function Home($value)
    {
        return empty($value) ? null : '<span class="glyphicon glyphicon-film"></span>';
    }

    /*
     * ============= Color =============
     */
    public function color($value)
    {
        return empty($value) ? null : '<span class="glyphicon glyphicon-tint" style="color:' . $value . '"></span>';
    }

    /*
     * ============= Seleccionar opción predeterminada =============
     */
    public function selectedOption($id, $value)
    {
        return $id == $value
            ? 'selected=selected'
            : null;
    }

    /*
     * ============= Deshabilitar opción de un campo =============
     */
    public function disabledOption($value, $values = array())
    {
        return !empty($values)
            ? !in_array($value, $values)
                ? 'disabled=disabled'
                : null
            : null;
    }

    /*
     * ============= Tipo de Mensaje =============
     */
    public function msgType($type)
    {
        switch ($type) {
            case 'success'  :
                return ['alert' => 'alert-success', 'icon' => 'glyphicon-thumbs-up', 'expression' => '¡Muy bien!'];
            case 'warning'  :
                return ['alert' => 'alert-warning', 'icon' => 'glyphicon-warning-sign', 'expression' => '¡Cuidado!'];
            case 'error'    :
                return ['alert' => 'alert-danger', 'icon' => 'glyphicon-exclamation-sign', 'expression' => '¡Whoops!'];
        }
    }

    /*
     *  ============= Rango de números en un arreglo =============
     */
    public function range($from = 1, $to = 10, $increment = 1)
    {
        for ($from; $from <= $to; $from = $from + $increment) {
            $range[$from] = $from;
        }

        return $range;
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
     * ============= Formato de Fecha =============
     */
    public function dateFormat($value)
    {
        setlocale(LC_ALL, 'es_ES.UTF-8');
        return strftime('%d/%B/%Y', strtotime($value));
    }

    /*
     * ============= Formato de Fecha =============
     */
    public function hourFormat($value)
    {
        return strftime('%H:%M:%S %p', strtotime($value));
    }

    /*
     * ============= Validar que exista un archivo =============
     */
    public function fileExists($path)
    {
        if (File::exists(public_path() . "/{$path}")) return true; else return false;
    }

    /*
     * ============= Lista de microSitios para el menu =============
     */
    public function list_ms()
    {
        $category = new CategoryRepo();

        $list = $category->getList_ms();
        $li = '';
        foreach ($list as $value) {
            $li .= '<li><a href="/mcPanel/sites/registro/' . $value->id . '">' . $value->title . '</a></li>';
        }
        return $li;
    }

    public function is_expired($date)
    {
        $now = Carbon::now();
        if ($date > $now && $date < $now->addDays(2))
            return '<div class="thumbnail expired_week">';
        elseif ($date > $now)
            return '<div class="thumbnail">';
        else
            return '<div class="thumbnail expired">';
    }

    public function getSections()
    {
        $section = new SectionRepo();
        return $section->getList();
    }

    public function getList($text, $character)
    {
        $data = explode($character, $text);
        return $data;
    }

    public function concatString($route, $name)
    {
        return $route . '/' . $name;
    }

    public function getPosition($value, $option)
    {
        $array = null;
        $pos = -1;
        switch ($option) {
            case 'm':
                $array = $this->material_transport;
                $pos = 9;
                break;
            case 'o':
                $array = $this->bussiness_office;
                $pos = 8;
                break;
            case 't':
                $array = $this->bussiness_type;
                $pos = 0;
                break;
            case 'w':
                $array = $this->load_weight;
                $pos = 0;
                break;
        }
        $clave = array_search($value, $array); // $clave = 2;
        return $clave == null ? $pos : $clave;
    }

    public function getMaterial_Transport()
    {
        return $this->material_transport;
    }

    public function getLoad_Weight()
    {
        return $this->load_weight;
    }

    public function getBussiness_Office()
    {
        return $this->bussiness_office;
    }

    public function getBussiness_Type()
    {
        return $this->bussiness_type;
    }


    public function getLatitud($coordinates)
    {
        //dd($coordinates);
        if (strpos($coordinates, ',') !== false) {
            $coordenadas = explode(',', $coordinates);
        } else {
            $coordenadas = array(19.436782, -99.18492300000003);
        }
        return $coordenadas[0];
    }

    public function getLongitud($coordinates)
    {

        if (strpos($coordinates, ',') !== false) {
            $coordenadas = explode(',', $coordinates);
        } else {
            $coordenadas = array(19.436782, -99.18492300000003);
        }
        return $coordenadas[1];
    }

    public function quitaGuiones($slug)
    {
        return str_replace("-", "", $slug);
    }

    public function getEXtension($value)
    {
        $pos = strpos($value, '.');
        $extension = substr($value, $pos + 1, strlen($value));
        $str = array('doc', 'docx', 'pdf', 'ppt', 'pptx', 'xls', 'xlsx');
        return in_array($extension, $str) ? $extension : "Document-download-icon";
    }

    public function getType(){
        return $this->type_dealership;
    }

    public function getIndexType($value){
        $clave = array_search($value, $this->type_dealership); // $clave = 2;
        return $clave;
    }

    public function getTypeIndex($index){
        return $this->type_dealership->get($index);
    }

}