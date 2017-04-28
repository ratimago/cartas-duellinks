<?php

namespace App\Http\Frontend\Controllers;

use App\Http\Frontend\Repositories\AutoresponderRepo;
use App\Http\Frontend\Repositories\QuotationRepo;
use App\Http\Frontend\Repositories\StateRepo;
use App\Http\Frontend\Repositories\TruckRepo;
use Illuminate\Http\Request;

use App\Http\Frontend\Requests;
use App\Http\Frontend\Requests\QuotationRequest;
use App\Http\Frontend\Controllers\Controller;
use App\Http\Frontend\Helpers\Mails\MailsFrontend;
use Illuminate\Support\Facades\Mail;
use App\Http\Frontend\Helpers\Captcha\ReCaptcha;

class QuotationController extends Controller
{
    private $departament;
    private $states;
    private $Trucks;

    function __construct(AutoresponderRepo $repo, StateRepo $state, TruckRepo $truck)
    {
        $this->departament = $repo;
        $this->states = $state;
        $this->Trucks = $truck;
    }


    public function index($slug)
    {
        $states = $this->states->getStates()->get();
        $key = -1;
        for ($i = 0; $i < sizeof($states); $i++) {
            if (empty($states[$i]->name)) {
                $key = $i;
            }
        }
        unset($states[$key]);
        $data = $this->departament->getDepartament($slug)->first();
        $departament = $this->notFoundUnless($data);
        $states = $states->lists('name', 'id')->toArray();
        $trucks = $this->Trucks->getTrucks()->get();
        //dd($trucks);
        return view('Frontend.Quotations.Register',
            ['departament' => $departament,
                'states' => $states,
                'trucks' => $trucks,
                'active' => 'cotizaciones/' . $departament->slug,
                'title' => $departament->section])->nest('menutrucks', "Frontend.Boosters.menu", [
            'active' => isset($truck) ? $truck->slug : null,
            'trucks' => $trucks
        ]);
    }

    public function create(QuotationRequest $request, QuotationRepo $repo, MailsFrontend $mails)
    {
        $states = $this->states->getStates()->get();
        $key = -1;
        for ($i = 0; $i < sizeof($states); $i++) {
            if (empty($states[$i]->name)) {
                $key = $i;
            }
        }
        if (!empty(\Backend::getBussiness_Office()[$request['bussiness_office']]) && $request['bussiness_office'] != 0) {
            $request->merge(['bussiness_office' => \Backend::getBussiness_Office()[$request['bussiness_office']]]);
        } else {
            $request->merge(['bussiness_office' => \Backend::getBussiness_Office()[8]]);
        }
        if (!empty(\Backend::getMaterial_Transport()[$request['material_transport']]) && $request['material_transport'] != 0) {
            $request->merge(['material_transport' => \Backend::getMaterial_Transport()[$request['material_transport']]]);
        } else {
            $request->merge(['material_transport' => \Backend::getMaterial_Transport()[9]]);
        }
        if (empty($request['state_id'])) {
            $request->merge(['state_id' => $states[$key]->id]);
        }
        $request->merge(['load_weight' => \Backend::getLoad_Weight()[$request['load_weight']]]);
        $request->merge(['bussiness_type' => \Backend::getBussiness_Type()[$request['bussiness_type']]]);

        $repo->save($request);
        $this->GuardarDrive($request);
        $mails->sendMailRegisterUser($request, 1);
        //\Session::flash("quotations.message", view('Backend.Templates.message', ['message' => "Registro Enviado Correctamente"] + 'success')->render());
        return redirect()->route('thanks');
    }


    private function GuardarDrive($request)
    {
        // De donde viene?
        $departament = $this->departament->getDepartamentById($request['autoresponder_id']);
        $request->merge(['departament' => $departament->section . '[' . $departament->departament . ']']);

        //De que estado es?
        $state = $this->states->getStateById($request['state_id']);
        $request->merge(['state_str' => $state->name]);

        //dd($request);
        // Camiones Seleccionados
        $trucks = $this->Trucks->getTrucksArray($request['truck']);
        $trucks_str = "";
        foreach ($trucks as $truck) {
            $trucks_str = $truck->name . ', ' . $trucks_str;
        }
        $trucks_str = substr($trucks_str, 0, -2);
        $request->merge(['trucks' => $trucks_str]);
        //dd($request);


        //Guardamos los datos en el google docs
//        $name = "entry.435285110=" . $request['name'];
//        $email = "entry.662321291=" . $request['email'];
//        $state = "entry.1685282479=" . $request['state_str'];
//        $area_code = "entry.780938573=" . $request['area_code'];
//        $phone = "entry.1890197562=" . $request['phone'];
//        $company_name = "entry.1476968478=" . $request['company_name'];
//        $bussiness_office = "entry.1622816875=" . $request['bussiness_office'];
//        $bussiness_type = "entry.772987103=" . $request['bussiness_type'];
//        $material_transport = "entry.139732252=" . $request['material_transport'];
//        $load_weight = "entry.1047107438=" . $request['load_weight'];
//        $message_text = "entry.1597595022=" . $request['message_text'];
//        $departament = "entry.783940655=" . $request['departament'];
//        $trucks = "entry.1081361711=" . $request['trucks'];
//        $gclid = "entry.2106140684=" . $request['gclid'];

        //Datos Produccion [Cotizacion, Contacto, Financiamiento]
        $formulario_origen = "entry.28585574=" . $request['departament'];
        $modelo = "entry.541821382=" . $request['trucks'];
        $nombre = "entry.981596126=" . $request['name'];
        $correo_electronico = "entry.1507202081=" . $request['email'];
        $lada = "entry.1715774696=" . $request['area_code'];
        $telefono = "entry.828434900=" . $request['phone'];
        $estado = "entry.875098258=" . $request['state_str'];
        $material = "entry.1136626151=" . $request['material_transport'];
        $otro_material = "entry.1288889216=" . $request['other_material'];
        $peso = "entry.1216215255=" . $request['load_weight'];
        $cargo = "entry.717433591=" . $request['bussiness_office'];
        $otro_cargo = "entry.628557988=" . $request['other_office'];
        $tipo_negocio = "entry.461848349=" . $request['bussiness_type'];
        $empresa = "entry.151147252=" . $request['company_name'];
        $mensaje = "entry.2079747906=" . $request['message_text'];
        $gclid = "entry.1063171336=" . $request['gclid'];

        // Url del formulario
        //$Url = "https://docs.google.com/a/masclicks.com.mx/forms/d/e/1FAIpQLSd_e7vuy1FroGmE3-SJPT1uvuV57rBJyXG4PRDFHFpXu-QmnA/formResponse";
        // Url Produccion [Cotizacion, Contacto, Financiamiento]
        $Url = "https://docs.google.com/a/masclicks.com.mx/forms/d/e/1FAIpQLSfVgGScEWCHlzw6xzCrZIsp7zTMzMDgXVVW7OXj3_EBgg7TaA/formResponse";

        //$strRequest = "$name&$email&$state&$area_code&$phone&$company_name&$bussiness_office&$bussiness_type&$material_transport&$load_weight&$message_text&$departament&$trucks&$gclid";
        //dd($strRequest);
        // strRequest Produccion
        $strRequest = "$formulario_origen&$modelo&$nombre&$correo_electronico&$lada&$telefono&$estado&$material&$otro_material&$peso&$cargo&$otro_cargo&$tipo_negocio&$empresa&$mensaje&$gclid";

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
