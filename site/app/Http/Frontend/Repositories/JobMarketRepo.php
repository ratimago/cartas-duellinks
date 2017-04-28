<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 1/11/16
 * Time: 01:31 PM
 */

namespace App\Http\Frontend\Repositories;


use App\Http\Entities\JobMarket;

class JobMarketRepo extends BaseRepo
{
    public function getModel()
    {
        return new JobMarket();
    }

    public function save($request){
        $job = $this->getModel();
        $job->fill($request->except('_token', 'g-recaptcha-response'));
        $job->save();
    }

}