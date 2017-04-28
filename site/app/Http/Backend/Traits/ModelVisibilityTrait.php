<?php namespace App\Http\Backend\Traits;

trait ModelVisibilityTrait
{
    public function toogleVisibility($idList)
    {
        $items = $this->model->whereIn('id', $idList)->get();

        \DB::transaction(function() use($items) {
            foreach($items as $item) {
                $item->active = !(bool)$item->active;
                $item->save();
            }
        });

        return count($items);
    }

}