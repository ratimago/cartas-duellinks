<?php namespace App\Http\Frontend\Controllers;

use App\Http\Frontend\Repositories\PromotionRepo;
use App\Http\Frontend\Repositories\StaticmenuRepo;
use App\Http\Frontend\Repositories\TruckRepo;
use App\Http\Frontend\Requests;
use App\Http\Frontend\Repositories\SectionsRepo;
use App\Http\Frontend\Repositories\TestimonialsRepo;
use Illuminate\Routing\Route;
use App\Http\Frontend\Repositories\BlockRepo;

class HomeController extends Controller
{
    /*
     * Home
     * @return vista
     */
    public function index(StaticmenuRepo $sectionRepo, TruckRepo $repoTruck)
    {

        //Menú Camiones
        $trucks = $this->notFoundUnless($repoTruck->getTrucks()->get());

        //---Extraer la subsección que pertenece Home y enviar la galería
        $section = $this->notFoundUnless($sectionRepo->getSection('home'));
        $block = $this->notFoundUnless($section->blocks->first());

        $gallery = $block->galleries->first();
       /* $background = null;

        if (isset($gallery)) {
            $directory = isset($gallery->directory) ? $gallery->directory : null;
            $x = 0;
            $key = -1;
            // Obtenermos la primera posicion de los elementos que pertenecen a la galeria
            $array_pos = array();
            foreach ($gallery->elements as $image) {
                array_push($array_pos, $image->position);
            }
            $min = !empty($array_pos) ? min($array_pos) : null;
            //Termina la primera posicion
            foreach ($gallery->elements as $element) {
                if ($element->position == $min) {
                    $background = $element->value;
                    $key = $x;
                }
                $x++;
            }
            unset($gallery->elements[$key]);
        }*/

        $data = ['title'    => 'Inicio',
                 'trucks'   => $trucks,
                 'gallery'  => $gallery,
                 'meta_description'  => 'Más de 100 años diseñando los mejores camiones para tu negocio ¡Cotiza ahora!
                                         Cargamos Más · Duramos Más · Rendimos Más · 100% Confiables'
        ];


        return view('Frontend.Home.index', $data)->nest('menutrucks', "Frontend.Boosters.menu", [
            'active' => isset($truck) ? $truck->slug : null,
            'trucks' => $trucks
        ]);
    }

    public function section($slug, StaticmenuRepo $sectionRepo, TruckRepo $repoTruck, BlockRepo $repo)
    {


        //Menú Camiones
        $trucks = $this->notFoundUnless($repoTruck->getTrucks()->get());
        $section = $this->notFoundUnless($sectionRepo->getSection($slug));
        $data = [];
        if($slug != 'nosotros'){
            $data = [
                'title' => $section->title,
                'text' => $section->text,
                'meta_description' => $section->meta_description,
                'section' => $section,
                'active' => $slug,
                'block' => isset($section->blocks) ? $section->blocks->first() : null,
                'blocks' => $section->blocks
            ];
        }else{
            $block = $this->notFoundUnless($repo->getSubsection($slug, 'nosotros')->first());
            $data = [
                'title' => $block->title,
                'text' => $block->text,
                'meta_description' => $block->meta_description,
                'section' => $section,
                'active' => $slug,
                'block' => isset($section->blocks) ? $section->blocks->first() : null,
                'blocks' => $section->blocks
            ];
        }


        if (isset($section->blocks) && !empty($section->blocks) && count($section->blocks) > 0) {
            //$block = $this->notFoundUnless($section->blocks->first());
            return view('Frontend.Sections.' . $section->slug, $data)->nest('menutrucks', "Frontend.Boosters.menu", [
                'active' => isset($truck) ? $truck->slug : null,
                'trucks' => $trucks
            ]);
                /*->nest('menu', "Frontend.Sections.Subsections.menu-" . $slug, [
                    'active' => $slug . '/' . $block->slug,
                    'blocks' => $section->blocks
                ]);*/
        }
        return view('Frontend.Sections.' . $section->slug, $data)->nest('menutrucks', "Frontend.Boosters.menu", [
            'active' => isset($truck) ? $truck->slug : null,
            'trucks' => $trucks
        ]);
    }


    public function subsection($slug, $subsection, BlockRepo $repo, StaticmenuRepo $sectionRepo, TruckRepo $repoTruck)
    {

        //Menú Camiones
        $trucks = $this->notFoundUnless($repoTruck->getTrucks()->get());
        // Condicionar si se trata de Postventa y cortarlo e identificar un bloque de otro para enviar el arreglo texto
        $section = $this->notFoundUnless($sectionRepo->getSection($slug));

        $block = $this->notFoundUnless($repo->getSubsection($slug, $subsection)->first());
        $textos = null;
        $textos = $block->text;

        if(view()->exists('Frontend.Sections.Subsections.' . $subsection)){
            return view('Frontend.Sections.Subsections.' . $subsection,
                ['section' => $block,
                    'active' => $slug . '/' . $subsection,
                    'blocks' => $section->blocks,
                    'title' => $block->title,
                    'meta_description' => $block->meta_description,
                    'text' => $this->prepareIntroGallery($textos,$block->galleries)])->nest('menutrucks', "Frontend.Boosters.menu", [
                'active' => isset($truck) ? $truck->slug : null,
                'trucks' => $trucks,
                //'segment'=> \Request::segment(3),
            ]);
        }else{
            return view('errors.404');
        }

    }

    function prepareIntroGallery($texto,$gallery){


        $parse = $texto;

        if(strstr($parse,"CODEGAL1")){
            $parse = str_replace("CODEGAL1",$this->insertGallery($gallery->where('id',4)),$parse);
        }

        if(strstr($parse,"CODEGAL2")){
            $parse = str_replace("CODEGAL2",$this->insertGallery($gallery->where('id',33)),$parse);
        }
        if(strstr($parse,"CODEGAL3")){
            $parse = str_replace("CODEGAL3",$this->insertGallery($gallery->where('id',34)),$parse);

        }

        return $parse;
    }

    private function insertGallery($gallery){

        $view = view('Frontend.Sections.Subsections.galeria_parseada', ['gallery' => $gallery]);

      return $view;
    }

    public function promotions(PromotionRepo $repo, TruckRepo $repoTruck)
    {
        //Menú Camiones
        $trucks = $this->notFoundUnless($repoTruck->getTrucks()->get());
        $promotions = $this->notFoundUnless($repo->getPromotion());
        $galleries = $this->notFoundUnless($promotions->galleries->first());

        return view('Frontend.Promotions.index', ['promotion' => isset($promotions) ? $promotions : null,
            'galleries' => isset($galleries) ? $galleries : null,
            'active' => 'promotion',
            'meta_description' => isset($promotions) ? $promotions->meta_description : ""])->nest('menutrucks', "Frontend.Boosters.menu", [
            'active' => isset($truck) ? $truck->slug : null,
            'trucks' => $trucks
        ]);
    }

    /**
     * Inicia la lista de las rutas estáticas para aplicaciones
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function applications(TruckRepo $repoTruck)
    {
        //Menú Camiones
        $trucks = $this->notFoundUnless($repoTruck->getTrucks()->get());
        return view('Frontend.Aplicaciones.index', ['active' => 'selecciona'])->nest('menutrucks', "Frontend.Boosters.menu", [
            'active' => isset($truck) ? $truck->slug : null,
            'trucks' => $trucks
        ]);
    }

    public function applicationsSection($slug, TruckRepo $repoTruck)
    {
        //Menú Camiones
        $trucks = $this->notFoundUnless($repoTruck->getTrucks()->get());
        $view = "Frontend.Aplicaciones.index";
        $slug_array = array("autobus", "barredora", "barrena-para-tierra", "camion-basurero",
            "cisterna", "food-truck", "grua-de-carga", "grua-de-arrastre", "grua-telescopica",
            "pipa-de-gas", "plataforma", "redillas", "refresquera", "refrigerado", "traslado-de-vehiculos",
            "volteo");
        foreach ($slug_array as $element) {
            if ($slug == $element) {
                $view = "Frontend.Aplicaciones." . $slug;
            }
        }
        return view($view, ['active' => $slug])->nest('menutrucks', "Frontend.Boosters.menu", [
            'active' => isset($truck) ? $truck->slug : null,
            'trucks' => $trucks
        ]);
    }
    // Termina las rutas estáticas para aplicaciones

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function thanks()
    {
        return view('Frontend.Messages.thanks');
    }

}
