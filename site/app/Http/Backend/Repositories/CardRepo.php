<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 25/10/16
 * Time: 01:25 PM
 */

namespace App\Http\Backend\Repositories;


use App\Http\Entities\Card;

class CardRepo extends BaseRepo
{
    protected $defaultFilters = [
        'keyword' => null,
        'booster_id' => null,
        'type_dealership' => null,
        'active' => null,
        'inverse' => false,
        'items' => 10,
    ];

    public function setModel()
    {
        return new Card();
    }

    public function setSectionName()
    {

        return 'Cards';
    }

    public function save($item, $request)
    {
        if (!$item) $item = $this->setModel();

        $destinationPath = 'imagenes/cartas';
        //dd($request->file('image'));

        if($request->file('image')){
            $extension = $request->file('image')->getClientOriginalExtension();
            $fileNameImage = str_replace(" ","-",$request->name).'_'.rand(11111,99999).'.'.$extension;
            $request->file('image')->move($destinationPath, $fileNameImage);

            $image = true;
        }else{
            $fileNameImage = $item->image;
        }

        $data = [
            'name'              => $request->name,
            'booster_id'        => $request->booster_id,
            'type_monster_card' => json_encode($request->type_monster_card),
            'image'             => @$fileNameImage,
            'text'              => $request->text,
        ];


        $item->fill($data)->save();
        return $item->id;
    }

    public function paginate($filters)
    {
        $list = $this->model->with('booster');

        #----------- Buscar palabra clave -----------
        if (!empty($filters['keyword'])) {
            $list = $list->where(function ($query) use ($filters) {
                //$query->where('address', 'LIKE', "%{$filters['keyword']}%");
            });
        }
        #----------- Buscar por estado -----------
        !empty($filters['state_id']) ? $list = $list->where('state_id', $filters['state_id']) : null;
        #----------- Buscar por tipo -----------
        !empty($filters['type_dealership']) ? $list = $list->where('type_dealership', $filters['type_dealership']) : null;

        $direction = ($filters['inverse'] == false) ? 'DESC' : 'ASC';

        $list = $list->orderBy('id', $direction)->paginate($filters['items']);

        return $list;
    }

    public function delete($idList)
    {
        if (!empty($idList)) {
            $dealerships = $this->model->whereIn('id', $idList)->get();
            foreach ($dealerships as $dealership)
                $dealership->delete();
        }
    }

}