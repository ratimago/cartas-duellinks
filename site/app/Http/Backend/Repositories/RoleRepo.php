<?php namespace App\Http\Backend\Repositories;

use App\Http\Entities\Role;

class RoleRepo
{
    /*
     * ================ Instanciar modelo ================
     */
    public function setModel()
    {
        return new Role();
    }

    /*
     * ================ Lista de roles de usuarios ================
     */
    public function getRoles()
    {
        $roles = $this->setModel()->select();

        \Auth::user()->role_id == 2 ? $roles->where('type', 'Admin') : null;

        return $roles;
    }

}