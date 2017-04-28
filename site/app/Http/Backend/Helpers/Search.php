<?php namespace App\Helpers;

class Search
{

    /*
     * ====================== Filtros Panel de Anuncios ======================
     */
    public function filterAds()
    {
        return  [
            'fields'      => [
                'title'    => 'Titulo',
                'visible'   => 'Aprobados',
            ],
            'filters'   => [

            ]
        ];
    }

}