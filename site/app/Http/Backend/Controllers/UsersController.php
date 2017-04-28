<?php namespace App\Http\Backend\Controllers;

use App\Http\Backend\Requests\UserRequest;
use App\Http\Backend\Repositories\RoleRepo;
use App\Http\Backend\Repositories\UserRepo;
use App\Http\Entities\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Input;
use Maatwebsite\Excel\Facades\Excel;

class UsersController extends BaseController
{
    private $extra;

    function __construct(UserRepo $user, RoleRepo $role)
    {
        $this->extra = [
            'referer'       => @$_SERVER['HTTP_REFERER'],
            'roles'         => $role->getRoles()->lists('name', 'id')->toArray(),
        ];

        parent::__construct($user);
    }

    /*
     * =============== Panel ===============
     */
    public function getIndex($extra = null) {

        return parent::getIndex($this->extra);
    }

    /*
    * =============== Intranet ===============
    */
    public function getIntranet($extra = null) {

        $filter = ['Users' =>
                        ['filters' => [
                            'keyword'   => null,
                            'role_id'   => 3,
                            'active'    => null,
                            'inverse'   => false,
                            'items'     => 10
                        ]]];

        \Session::put(['intranet' => true]);
        \Session::put($filter);

        return parent::getIndex($this->extra);
    }

    /*
     * =============== Formulario para agregar y editar registro ===============
     */
    public function getRegistro($id = null, $extra = [])
    {
        return parent::getRegistro($id, $this->extra);
    }

    /*
     * =============== Guardar Datos ===============
     */
    public function postUpdate(UserRequest $request, $id = null)
    {
        $request->merge(['active' => $request->has('active')]);

        return $this->doUpdate($request, $id);
    }

    public function getDownload(){
        $fecha = \Carbon\Carbon::now()->format('d_m_Y');
        Excel::create('Usuarios_'.$fecha, function($excel) {
            $excel->sheet('Usuarios', function($sheet) {
                $sheet->setStyle(array(
                    'font' => array(
                        'name'      =>  'Calibri',
                        'size'      =>  12,
                        'bold'      =>  false
                    )
                ));
                // Set auto size for sheet
                $sheet->setAutoSize(true);
                // Auto filter for entire sheet
                $sheet->setAutoFilter();

                $users = User::all();
                foreach ($users as $user) {
                    if($user->active == 1)
                        $user->active = 'Activo';
                    else
                        $user->active = 'Inactivo';

                    if($user->role_id == 1)
                        $user->role_id = 'Administrador';
                    else
                        $user->role_id = 'Editor de Blog';
                }
                //dd($user);
                $sheet->fromArray($users);
            });
        })->download('xls');
    }
}
