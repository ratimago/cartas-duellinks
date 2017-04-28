<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 20/10/16
 * Time: 05:41 PM
 */

namespace App\Http\Backend\Repositories;



use App\Http\Entities\Quotation;

class QuotationRepo extends BaseRepo
{
    protected $defaultFilters = [
        'keyword'   => null,
//        'filters'   => 'bussiness_type',
//        'truck_id'  => null,
        'state_id'  => null,
        'autoresponder_id' => null,
        'active'    => null,
        'inverse'   => false,
        'items'     => 10,
    ];

    public function setModel()
    {
        return new Quotation();
    }

    public function setSectionName()
    {
        return 'Quotations';
    }

    public function save($item, $request)
    {
        // TODO: Implement save() method.
    }

    public function paginate($filters)
    {
        $list = $this->model->with('state', 'autoresponder', 'trucks');
        //dd($list->state->name);
//        DB::table('quotations')
//            ->join('contacts', function ($join) {
//                $join->on('users.id', '=', 'contacts.user_id')->orOn(...);
//            })
//            ->get();

        //dd($list);
//        if(!empty($filters['filters'])){
            #----------- Buscar palabra clave -----------
            if(!empty($filters['keyword']))
            {
                $list = $list->where(function($query) use($filters){
                    $query->where('name', 'LIKE',"%{$filters['keyword']}%");
                });
            }
//        }
        #----------- Buscar por Estado -----------
        !empty($filters['state_id']) ? $list = $list->where('state_id', $filters['state_id']) : null;

        #----------- Buscar por Departamento -----------
        !empty($filters['autoresponder_id']) ? $list = $list->where('autoresponder_id', $filters['autoresponder_id']) : null;

        #----------- Buscar por Camion -----------
        //!empty($filters['truck_id']) ? $list = $list->where('truck_id', $filters['autoresponder_id']) : null;

        $direction = ($filters['inverse'] == false) ? 'DESC' : 'ASC';

        $list = $list->orderBy('created_at', $direction)->paginate($filters['items']);

        return $list;
    }

}