<?php namespace App\Http\Backend\Traits;

trait ModelPositionsTrait
{
    public $constraints = [];

    public function setPosition($position,$item)
    {
        // Nos aseguramos que la posicion esté dentro de los límites
        $position = ((int)$position >= 1) ? $position : 1; // mayor o igual que uno

        $last = $this->getLastPosition($item->id);

        $position = ($position <= $last) ? (int)$position : $last; // menor o igual que el último elemento

        // Si se trata de una inserción en la primera posición, regresamos el valor inverso
        //if(!$item->exists and $position == 1) {
            //return $last;
        //}

        //$position = $this->GetInversePosition($position,$item->id);

        // Si se trata de la misma posición, no hay nada que hacer
        if($item->exists) {
            $oldPosition = $item->position;
            if($position == $oldPosition) return $position;
        } else $oldPosition = false;

        // Hacemos el espacio para el elemento
        if(!$oldPosition) {
            $items = $this->model->where('position','>=',$position);
            $factor = 1;
        } elseif($position <= $oldPosition) {
            $items = $this->model->where('position','<',$oldPosition)
                ->where('position','>=',$position);
            $factor = 1;
        } else {
            $items = $this->model->where('position','>',$oldPosition)
                ->where('position','<=',$position);
            $factor = -1;
        }

        $items = $this->SetConstraints($items);

        $items = $items->get();

        \DB::Transaction(function()use($items,$factor) {
            foreach($items as $itemFor) {
                $itemFor->position = $itemFor->position + $factor;
                $itemFor->save();
            }
        });

        return $position;
    }

    public function GetLastPosition($id =null) {
        $last = $this->model->orderBy('position','desc');

        $last = $this->SetConstraints($last);

        $last = $last->first();

        // Si no hay elementos, la posición es la primera
        if(!$last) {
            $position = 1;
        } else {
            $position = $last->position;
            // Si no hay id se trata de una inserción, por lo que debemos incrementar el total
            if(!$id) $position++;
        }

        return $position;
    }

    public function getInversePosition($position,$id = null,$last =null) {

        if(empty($last)) {
            $last = $this->GetLastPosition($id);
        }

        if($position > $last) $position = $last;

        $position = abs($last - $position) + 1;

        return $position;
    }

    protected function SetConstraints($item) {
        if(!empty($this->constraints)) {
            foreach($this->constraints as $constraint) {
                $item = (empty($constraint[2])) ?
                    $item->where($constraint[0],$constraint[1]) : $item->where($constraint[0],$constraint[1],$constraint[2]);
            }
        }
        return $item;
    }

    public function resetPositons() {

        $items = $this->SetConstraints($this->model);

        $items = $items->orderBy('position','asc')->get();

        \DB::Transaction(function()use($items) {
            $position = 1;
            foreach($items as $item) {
                if($item->postion != $position) {
                    $item->position = $position;
                    $item->save();
                }
                $position++;
            }
        });
    }
}