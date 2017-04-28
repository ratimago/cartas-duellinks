<?php namespace App\Http\Frontend\Controllers;

use App\Http\Frontend\Repositories\IntranetRepo;
use App\Http\Frontend\Requests;
use Illuminate\Routing\Route;

class IntranetController extends Controller{

    private $repo;

    public function __construct(IntranetRepo $repo){

        $this->repo = $repo;
        \Session::put(['intranet' => true]);

    }
    /*
     * Home
     * @return vista
     */
    public function index(IntranetRepo $intraRepo){
        //Menú Camiones


        $data = ['title' => 'Inicio',

            'meta_description' => 'Más de 100 años diseñando los mejores camiones para tu negocio ¡Cotiza ahora!
                Cargamos Más · Duramos Más · Rendimos Más · 100% Confiables'
        ];

        return view('Frontend.Intranet.index',$data);
    }

    public function panel(IntranetRepo $intraRepo){


        $data = ['title'            => 'Inicio',
                 'meta_description' => 'Más de 100 años diseñando los mejores camiones para tu negocio ¡Cotiza ahora!
                                        Cargamos Más · Duramos Más · Rendimos Más · 100% Confiables',
                 'file'             => $intraRepo->getFiles(),
        ];

        return view('Frontend.Intranet.panel',$data);
    }


    public function login() {

        $data = \Input::all();


       // dd($data);
        $rules = array(
            'email' => 'required|email',
            'password' => 'required|min:6',
        );
        $validator = \Validator::make($data, $rules);
        if ($validator->fails()){

            return \Redirect::to('/isuzunet')->withInput(\Input::except('password'))->withErrors($validator);
        }
        else {
            $userdata = array(
                'email'     => \Input::get('email'),
                'password'  => \Input::get('password')
            );
            //Hacer el login
            if (\Auth::validate($userdata)) {
                if (\Auth::attempt($userdata)) {
                    return \Redirect::intended('/isuzunet/panel');
                }
            }
            else {

                \Session::flash('error', 'Usuario incorrecto');
                return \Redirect::to('/isuzunet');
            }
        }
    }

    public function salir(){
        \Auth::logout();
        return \Redirect::to('/isuzunet');
    }

}
