<?php namespace App\Http\Backend\Traits;

trait MessageTrait
{
    /*
     * ============== Mensajes para un Panel ==============
     */
    public function setMessage($sectionName, $message, $type)
    {
        return \Session::flash("{$sectionName}.message", view('Backend.Templates.message', ['message' => $message] + $type)->render());
    }

    /*
     * ============== Mensajes de alerta para un Panel ==============
     */
    public function setWarning($sectionName, $message, $type)
    {
        return \Session::flash("{$sectionName}.warning", view('Backend.Templates.message', ['message' => $message] + $type)->render());
    }

    /*
     * ============== Enviar mensajes para un Panel ==============
     */
    public function getMessage($sectionName)
    {
        return (\Session::has("{$sectionName}.message"))
            ? \Session::get("{$sectionName}.message")
            : []
        ;
    }
}