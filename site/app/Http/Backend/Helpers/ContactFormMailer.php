<?php
namespace App\Http\Backend\Helpers;


class ContactFormMailer {
    public static function autoResponder($form,$data) {
        $name = $data['nombre']." ".$data['apellido'];        
        $email = $form->getMainEmailField();
        if($email) {
            \Mail::send('Frontend.Forms.formulario.respuestas.usuario',['response'=>$form->response, 'name'=>$name],function($message) use($email,$form,$data) {
                $message->from('no-reply@cdgb.com.mx','Giovanni Bojanini');
                $message->to($data[$email->slug]);
                $message->subject($form->subject);
            });
        }
    }

    public static function notify($form,$data) {
        $dataMail = [
            'data'      => $data,
            'form'      => $form,
            //'section'   => $form->module[0]->section,
        ];

        \Mail::send('Frontend.Forms.formulario.respuestas.administrador',$dataMail,function($message) use ($form) {
            $message->subject('Mensaje de contacto');
            $message->from('no-reply@cdgb.com.mx','Giovanni Bojanini');

            $addresses = explode(',',$form->to);
            foreach($addresses as $address) $message->to($address);

            //$message->bcc('uzziel.alonso@masclicks.com.mx');
        });
    }
}