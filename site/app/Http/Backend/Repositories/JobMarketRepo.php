<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 25/10/16
 * Time: 12:32 PM
 */

namespace App\Http\Backend\Repositories;


use App\Http\Entities\JobMarket;

class JobMarketRepo extends BaseRepo
{
    protected $defaultFilters = [
        'keyword' => null,
        'filters' => null,
        //'autoresponder_id' => null,
        'state_id' => null,
        'active' => null,
        'inverse' => false,
        'items' => 10,
    ];

    public function setModel()
    {
        return new JobMarket();
    }

    public function setSectionName()
    {
        return 'JobsMarket';
    }

    public function save($item, $request)
    {
        // TODO: Implement save() method.
    }

    public function paginate($filters)
    {
        $list = $this->model->with('state');
        //dd($list);
        //if (!empty($filters['filters'])) {
        #----------- Buscar palabra clave -----------
        if (!empty($filters['keyword'])) {
            $list = $list->where(function ($query) use ($filters) {
                $query->where('name', 'LIKE', "%{$filters['keyword']}%");
            });
        }
        //}
        #----------- Buscar por Estado -----------
        !empty($filters['state_id']) ? $list = $list->where('state_id', $filters['state_id']) : null;

        #----------- Buscar por Departamento -----------
        //!empty($filters['autoresponder_id']) ? $list = $list->where('autoresponder_id', $filters['autoresponder_id']) : null;

        #----------- Buscar por Camion -----------
        //!empty($filters['truck_id']) ? $list = $list->where('truck_id', $filters['autoresponder_id']) : null;

        $direction = ($filters['inverse'] == false) ? 'DESC' : 'ASC';

        $list = $list->orderBy('name', $direction)->paginate($filters['items']);

        return $list;
    }


    public function delete($ids)
    {
        if (!empty($ids)) {
            $jobmarkets = $this->model->whereIn('id', $ids)->get();

            foreach ($jobmarkets as $job)
                $job->delete();
        }
    }
}