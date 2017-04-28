<?php namespace App\Http\Frontend\Repositories;

abstract class BaseRepo
{
    protected $model;

    public function __construct()
    {
        \DB::enableQueryLog();
        $this->model = $this->getModel();
    }

    abstract public function getModel();

    /*
     * Buscar registro por ID
    */
    public function find($id)
    {
        return $this->model->find($id);
    }

    /*
	 * Buscar registro por campo
    */
    public function findField($field, $value)
    {
        return $this->model->where($field, '=', $value)->first();
    }

    /*
	 * Buscar valor máximo de un campo
    */
    public function maxField($max, $field, $value)
    {
        return $this->model->where($field, '=', $value)->max($max);
    }

    /*
	 * Eliminar registros por ID
     */
    public function destroy($ids)
    {
        return $this->model->destroy($ids);
    }
}