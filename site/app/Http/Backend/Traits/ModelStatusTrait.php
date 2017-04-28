<?php namespace App\Http\Backend\Traits;

trait ModelStatusTrait
{
    public function toogleStatus($field, $idList)
    {
        $items = $this->model->whereIn('id', $idList)->get();
        
        \DB::transaction(function() use($field, $items) {
            foreach($items as $item) {
                $item->$field = !(bool)$item->$field;
                $item->save();
            }
        });

        return count($items);
    }

}