<?php

namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\PromotionRepo;
use Illuminate\Http\Request;

use App\Http\Backend\Requests;
use App\Http\Backend\Requests\PromotionRequest;
use App\Http\Backend\Controllers\Controller;

class PromotionController extends BaseController
{
    private $extra;

    //
    function __construct(PromotionRepo $repo)
    {
        parent::__construct($repo);
    }

    public function getIndex($extra = null)
    {
        return parent::getIndex($this->extra);
    }


    public function postUpdate(PromotionRequest $request, $id = null)
    {
        return $this->doUpdate($request, $id);
    }

}
