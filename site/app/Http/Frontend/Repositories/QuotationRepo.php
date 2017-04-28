<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 1/11/16
 * Time: 01:31 PM
 */

namespace App\Http\Frontend\Repositories;


use App\Http\Entities\Quotation;

class QuotationRepo extends BaseRepo
{
    public function getModel()
    {
        return new Quotation();
    }

    public function save($request)
    {
        //dd($request['truck']);
        $quotation = $this->getModel();
        $quotation->fill($request->except('_token', 'g-recaptcha-response'));
        $quotation->save();
        if (!empty($request['truck']))
            $quotation->trucks()->sync($request['truck']);
    }
}