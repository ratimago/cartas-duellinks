<?php
/**
 * Created by PhpStorm.
 * User: sensey
 * Date: 1/11/16
 * Time: 01:28 PM
 */

namespace App\Http\Frontend\Repositories;


use App\Http\Entities\Gallery;
use App\Http\Entities\Intranet;

class IntranetRepo extends BaseRepo
{
    public function getModel()
    {
        return new Gallery();
    }

    public function getFiles() {


        $files = $this->model->where('name','intranet')
                ->with([
                    'elements'=>function($element) {
                        //$element->where('lang','=',\Session::get('lang'));
                        $element->orderBy('position');
                    }
                ])->first();


        return $files;

    }
}

