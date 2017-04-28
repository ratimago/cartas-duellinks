<?php namespace App\Http\Frontend\Helpers\Mails;


use App\Http\Frontend\Repositories\AutoresponderRepo;
use App\Http\Frontend\Repositories\StateRepo;
use App\Http\Frontend\Repositories\TruckRepo;

class MailsFrontend
{
    private $cc = 'cecilia.hernandez@masclicks.com.mx';
    private $emails;
    private $repo;
    private $issue;
    private $array;
    private $states;
    private $Trucks;
    private $departament;

    function __construct(AutoresponderRepo $repo, StateRepo $state, TruckRepo $Trucks, AutoresponderRepo $departament)
    {
        $this->repo = $repo;
        $this->states = $state;
        $this->Trucks = $Trucks;
        $this->departament = $departament;
    }


    /*
     * ================ Enviar correo de Notificacion a usuario ================
     */
    public function sendMailRegisterUser($request, $option)
    {
        $departament = $this->repo->getDepartamentById($request['autoresponder_id']);
        //dd($departament);
        $this->issue = $departament->issue;
        $this->emails = $departament->addressee_mail;
        $request->merge(['text_custom' => $departament->message_text]);
        //De que estado es?
        $state = $this->states->getStateById($request['state_id']);
        $request->merge(['state_str' => $state->name]);
        // Camiones Seleccionados
        $trucks = $this->Trucks->getTrucksArray($request['truck']);
        $trucks_str = "";
        foreach ($trucks as $truck) {
            $trucks_str = $truck->name . ', ' . $trucks_str;
        }
        $trucks_str = substr($trucks_str, 0, -2);
        $request->merge(['trucks' => $trucks_str]);

        // De donde viene?
        $departament = $this->departament->getDepartamentById($request['autoresponder_id']);
        $request->merge(['departament' => $departament->section]);

        $data = $request->all();
        \Mail::send('Frontend.Messages.Mails.Received', $data, function ($message) use ($data) {
            $message->from('no-replay@isuzu.com', 'Isuzu Motors México');
            $message->to($data['email'])->subject($this->issue);

            //!empty($this->cc) ? $message->cc($this->cc) : null;
        });

        $this->sendMailRegisterUserNotification($request, $option);
    }

    /*
     * ================ Enviar notificación al Administrador ================
     */
    public function sendMailRegisterUserNotification($request, $option)
    {
        $data = $request->all();
        if (isset($this->emails) && !empty($this->emails)) {
            if (strpos($this->emails, ',') !== false) {
                $this->array = explode(',', $this->emails);
                for ($x = 0; $x < count($this->array); $x++) {
                    if (empty($this->array[$x])) {
                        unset($this->array[$x]);
                    }
                }
            }
        } else {
            $this->array = array();
            array_push($this->array, $this->cc);
        }


        //dd($this->array);
        if ($option == 1)
            $view = 'Frontend.Messages.Mails.Sent';
        else
            $view = 'Frontend.Messages.Mails.SentJobMarket';
        \Mail::send($view, $data, function ($message) use ($data) {
            $message->from('no-replay@isuzu.com', 'Isuzu Motors México');
            $message->to(count($this->array) > 0 ? $this->array : $this->emails)->subject("Solicitud de Informacion " . $data['departament']);

            //!empty($this->cc) ? $message->cc($this->cc) : null;
        });
    }

}
