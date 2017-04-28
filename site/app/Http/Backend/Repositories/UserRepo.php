<?php namespace App\Http\Backend\Repositories;

use App\Http\Entities\User;

class UserRepo extends BaseRepo
{
    protected $defaultFilters = [
        'keyword' => null,
        'role_id' => null,
        'active' => null,
        'inverse' => false,
        'items' => 10,
    ];

    private $editor = 3;

    /*
     * ================ Instanciar modelo ================
     */
    public function setModel()
    {
        return new User();
    }

    /*
     * ================ Nombre del la sección ================
     */
    public function setSectionName()
    {
        return 'Users';
    }

    /*
     * ================== Consultar registro por Id ==================
     */
    public function getItem($id)
    {
        $item = null;
        $categories = [];

        if ($id) {
            $item = $this->model->where('id', $id)->first();

            if (!$item) abort(404);

            $item->categories = $categories;
        }

        return $item;
    }

    /*
     * ================== Listado y paginación de registros ==================
     */
    public function paginate($filters)
    {

        $list = $this->model->with('role');

        #----------- Buscar palabra clave -----------
        if (!empty($filters['keyword'])) {
            $list = $list->where(function ($query) use ($filters) {
                $query->where('name', 'LIKE', "%{$filters['keyword']}%");
            });
        }
        #----------- Buscar por tipo -----------
        !empty($filters['role_id']) ? $list = $list->where('role_id', $filters['role_id']) : null;

        #----------- Buscar por estatus -----------
        !empty($filters['active']) ? $list = $list->where('active', $filters['active'] == 'si' ? true : false) : null;

        $direction = ($filters['inverse'] == false) ? 'DESC' : 'ASC';

        if($filters['role_id'] != 3){
            $list = $list->where('role_id','!=',3);
        }

        $list = $list->orderBy('name', $direction)->paginate($filters['items']);


        return $list;
    }

    /*
     * ================ Guardar y actualizar registros ================
     */
    public function save($item, $request)
    {
        if (!$item) $item = $this->setModel(); else unset($item->assets);
        unset($item->categories);

        $item->fill($request->except('_token', 'categories'))->save();

        #---------- Guardar categorias asignadas a usuarios ----------
        #$this->saveUserCategories($item, $request);

        return $item->id;
    }

    /*
     * ================ Eliminar registros ================
     */
    public function delete($ids)
    {
        if (!empty($ids)) {
            $users = $this->model->withTrashed()->whereIn('id', $ids)->get();
            foreach ($users as $user){
                $user->delete();
            }
        }

    }

    /*
     * =============== Datos completos de usuarios ===============
     */
    public function getUserData()
    {
        $assigned = array();
        $user = $this->model
            ->with('role', 'categories')
            ->find(\Auth::user()->id);

        if (\Auth::user()->role_id == $this->editor) {
            foreach ($user->categories as $item)
                $assigned[] = $item->category_id;
        }

        $user->assigned = $assigned;

        return $user;
    }

}