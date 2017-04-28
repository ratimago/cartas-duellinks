<?php namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\UserRepo;
use App\Http\Backend\Repositories\BaseRepo;

class BaseController extends Controller
{
    protected $repo;
    protected $sectionName;
    protected $maxSlugLength = 60;

    public function __construct(BaseRepo $repo)
    {
        $this->repo = $repo;
        $this->sectionName = $this->repo->setSectionName();
    }

    /*
     * =============== Datos completos de usuario ===============
     */
    public function getUser()
    {
        $user = new UserRepo();
        return $user->getUserData();
    }

    /*
     * =============== Lista de Registros ===============
     */
    public function getIndex($extra = [])
    {
        //::es útil hacer rereferencia a variables o funciones en clases base, o referenciar funciones en clases que aún no tienen instancias


        $filters = $this->repo->getFilters($this->sectionName);

        $data = ['list' => $this->repo->paginate($filters)];
       // dd($filters);
        if (is_array($extra)) $data = array_merge($data, $extra);

        // Nest sirve para pasar subvistas
        // Debo Quitar
        return view("Backend.{$this->sectionName}.index", $data)
            ->nest('filters', "Backend.{$this->sectionName}.filters", [
                'filters' => $filters,
                'extra' => $extra
            ])
            ->with('message', \Session::get("{$this->sectionName}.message"))
            ->with('warning', \Session::get("{$this->sectionName}.warning"))
            ->with('c_filters', $filters);
    }

    /*
     * =============== Formulario para Agregar y Editar Registros ===============
     */
    public function getRegistro($id = null, $extra = [])
    {
        //dd(explode('/',$extra['referer']));
        //dd($this->repo->getItem($id));
        $title = $this->sectionName;
        // Se agregó para identificar en que formulario nos ubicamos
        $active = null;
        if ($this->sectionName == 'Autoresponders') {
            $obj = $this->repo->find($id);
            $active = $obj->slug;
        }

        @$referencia = $extra['referer'] ? explode('/',$extra['referer']) : null;

        $data = [
            'id'        => $id,
            'item'      => $this->repo->getItem($id),
            'title'     => ucfirst($title),
            'active'    => $active,
            'referencia'   => @end($referencia),
        ];


        if (is_array($extra)) $data = array_merge($data, $extra);


        return view("Backend.{$this->sectionName}.edit", $data)->withMessage(\Session::get("{$this->sectionName}.message"));
    }

    /*
     * =============== Guardar y Modificar Datos ===============
     */
    public function doUpdate($request, $id)
    {
        $id = $this->repo->save($this->repo->getItem($id), $request);
        $this->repo->setMessage($this->sectionName, \Lang::get('Datos actualizados'), \Backend::msgType('success'));

        $redirect = $this->repo->returnToIndex
            ? ['route' => null, 'id' => null]
            : ['route' => '.edit', 'id' => $id];

        //return redirect()->route(strtolower($this->sectionName) . $redirect['route'], $redirect['id']);
        if ($this->sectionName == 'Promotions' || $this->sectionName == 'Staticmenus' || $this->sectionName == 'Blocks'
            || $this->sectionName == 'Autoresponders'
        ) {
            return redirect()->route(strtolower($this->sectionName) . '.edit', $id);
        } else {
            return redirect()->route(strtolower($this->sectionName));
        }
    }

    /*
     * =============== Eliminar Registros ===============
     */
    public function anyEliminar($id = null)
    {
        $idList = !empty($id) ? [$id] : \Input::get('selected');
        $delete = $this->repo->delete($idList);

        array_key_exists('warning', $delete ? $delete : [])
            ? $this->repo->setWarning(
            $this->sectionName,
            \Lang::get('general.deleteNot', ['items' => implode(', ', $delete['warning'])]),
            \Backend::msgType('warning')
        )
            : $this->repo->setMessage($this->sectionName, \Lang::get('Registros eliminados correctamente'), \Backend::msgType('success'));;

        return redirect()->back();
    }

    /*
     * =============== Filtar Registros ===============
     */
    public function anyFiltrar()
    {

        $this->repo->setFilters($this->sectionName);
        return redirect()->route(strtolower($this->sectionName));
    }

    /*
     * =============== Cambiar Visibilidad de Registros ===============
     */
    public function postActive()
    {
        $changed = $this->repo->toogleVisibility(\Input::get('selected'));
        $message = "{$changed} elemento(s) modificado(s) correctamente.";

        $this->repo->setMessage($this->sectionName, $message, \Backend::msgType('success'));

        return redirect()->back();
    }

    /*
     * =============== Cambiar Estatus de Registros ===============
     */
    public function postStatus($field)
    {
        $changed = $this->repo->toogleStatus($field, \Input::get('selected'));
        $message = "{$changed} elemento(s) modificado(s) correctamente.";

        $this->repo->setMessage($this->sectionName, $message, \Backend::msgType('success'));

        return redirect()->back();
    }

    /*
     * =============== Guardar Archivos ===============
     */
    public function saveFile($request, $field, $path, $name)
    {
        $fileName = null;

        if ($request->hasFile($field)) {
            !is_dir($path) ? mkdir($path, 0777, true) : null;

            $file = $request->file($field);
            $fileName = "{$name}.{$file->getClientOriginalExtension()}";

            $file->move($path, $fileName);
        }

        return $fileName;
    }

    /*
     * ================== Conversion de Slug ==================
     */
    public function setSlug($name, $id = null)
    {
        // Nos aseguramos de que no se sobrepase la longitud máxima para el slug
        $originalSlug = $slug = substr(str_slug($name), 0, $this->maxSlugLength);
        $valid = false;

        if (!empty($id)) {
            $item = $this->repo->find($id);
            $slug = $item->slug;
        } else {
            do {
                $item = $this->repo->findField('slug', $slug);
                $item ? $slug = $originalSlug . '-' . strtolower(str_random(4)) : $valid = true;
            } while (!$valid);
        }

        return $slug;
    }

    /*
     * ================== Página no encontrada ==================
     */
    public function notFoundUnless($value)
    {
        return !$value ? abort(404) : $value;
    }

}
