<?php

namespace App\Http\Frontend\Controllers;

use App\Http\Frontend\Repositories\JobMarketRepo;
use App\Http\Frontend\Repositories\TruckRepo;
use Illuminate\Http\Request;

use App\Http\Frontend\Requests;
use App\Http\Frontend\Requests\JobMarketRequest;
use App\Http\Frontend\Controllers\Controller;

use App\Http\Frontend\Repositories\AutoresponderRepo;
use App\Http\Frontend\Repositories\StateRepo;
use App\Http\Frontend\Helpers\Mails\MailsFrontend;

class JobMarketController extends Controller
{
    private $states;
    private $departament;

    function __construct(AutoresponderRepo $repo, StateRepo $state)
    {
        $this->departament = $repo;
        $this->states = $state;
    }


    public function index(TruckRepo $repoTruck)
    {
        //Menú Camiones
        $trucks = $this->notFoundUnless($repoTruck->getTrucks()->get());
        $states = $this->states->getStates()->get();
        $key = -1;
        for ($i = 0; $i < sizeof($states); $i++) {
            if (empty($states[$i]->name)) {
                $key = $i;
            }
        }
        unset($states[$key]);
        $data = $this->departament->getDepartament('bolsa-de-trabajo')->first();
        $departament = $this->notFoundUnless($data);
        $states = $states->lists('name', 'id')->toArray();
        return view('Frontend.JobsMarket.Register',
            ['departament' => $departament,
                'states' => $states,
                'active' => 'job_market'])->nest('menutrucks', "Frontend.Boosters.menu", [
            'active' => isset($truck) ? $truck->slug : null,
            'trucks' => $trucks
        ]);
    }

    public function create(JobMarketRequest $request, JobMarketRepo $repo, MailsFrontend $mails)
    {
        //dd($request->all());
        $states = $this->states->getStates()->get();
        $key = -1;
        for ($i = 0; $i < sizeof($states); $i++) {
            if (empty($states[$i]->name)) {
                $key = $i;
            }
        }
        if (empty($request['state_id'])) {
            $request->merge(['state_id' => $states[$key]->id]);
        }
        //dd($request['state_id']);
        $repo->save($request);
        $this->SaveDrive($request);
        $mails->sendMailRegisterUser($request, 2);
        return redirect()->route('thanks');
    }

    private function SaveDrive($request)
    {
        //De que estado es?
        $state = $this->states->getStateById($request['state_id']);
        $request->merge(['state_str' => $state->name]);

        //------ Url Produccion
        $Url = "https://docs.google.com/a/masclicks.com.mx/forms/d/e/1FAIpQLSenTInX00ouyLfB9orVrdU7jwzMh_6sm4yipuFJZuBDMeA7pA/formResponse";

        //------ Datos Produccion
        $nombre_completo = "entry.1587130725=" . $request['name'];
        $edad = "entry.1834190896=" . $request['age'];
        $telefono_lada = "entry.670887661=" . $request['phone'];
        $correo_electronico = "entry.1258634359=" . $request['email'];
        $domicilio = "entry.1113254946=" . $request['address'];
        $ciudad = "entry.993086495=" . $request['city'];
        $estado = "entry.1544739985=" . $request['state_str'];
        $cambio_redisencia = "entry.491248628=" . $request['change_home'];
        $estado_civil = "entry.1619310019=" . $request['civil_status'];
        $experiencia = "entry.1193122580=" . $request['experience'];
        $razon_trabajo = "entry.330893563=" . $request['reason_work'];
        //$gclid = "=" . $request['gclid'];

//        $Url = "https://docs.google.com/a/masclicks.com.mx/forms/d/e/1FAIpQLSdJwEEsUhzfpVhOYyp9_XM0Y8mxa8Tmy8f622YKmBtdlXWJ_A/formResponse";

//        $nombre_completo = "entry.1186637533=" . $request['name'];
//        $edad = "entry.2059958973=" . $request['age'];
//        $telefono_lada = "entry.859907500=" . $request['phone'];
//        $correo_electronico = "entry.1271860260=" . $request['email'];
//        $domicilio = "entry.292188926=" . $request['address'];
//        $ciudad = "entry.1573184687=" . $request['city'];
//        $estado = "entry.1360689769=" . $request['state_str'];
//        $cambio_redisencia = "entry.432025195=" . $request['change_home'];
//        $estado_civil = "entry.898993010=" . $request['civil_status'];
//        $experiencia = "entry.715639490=" . $request['experience'];
//        $razon_trabajo = "entry.455140070=" . $request['reason_work'];
//        $gclid = "entry.346392362=" . $request['gclid'];
//
        $strRequest = "$nombre_completo&$edad&$telefono_lada&$correo_electronico&$domicilio&$ciudad&$estado&$cambio_redisencia&$estado_civil&$experiencia&$razon_trabajo";
        //&$gclid

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $Url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $strRequest);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        $result = curl_exec($ch);
        //dd($result);
        curl_close($ch);
    }
}
