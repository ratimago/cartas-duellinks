<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 8/11/16
 * Time: 12:36 PM
 */

namespace App\Http\Frontend\Repositories;


use App\Http\Entities\Block;

class BlockRepo extends BaseRepo
{
    private $slug_section;
    private $slug_subsection;


    public function getModel()
    {
        return new Block();
    }

    public function getSubsection($slug, $subsection){
//        select * from blocks join staticmenus on blocks.staticmenu_id = staticmenus.id
//        where staticmenus.slug like '%postventa%' and blocks.slug like '%servicios%'
        $this->slug_section = $slug;
        $this->slug_subsection = $subsection;
        $subsection = $this->getModel()
            ->join('staticmenus', function ($join) {
                $join->on('blocks.staticmenu_id', '=', 'staticmenus.id')
                    ->where('staticmenus.slug', 'LIKE', '%' . $this->slug_section . '%')
                    ->where('blocks.slug', 'LIKE', '%' . $this->slug_subsection . '%');
            })->with(['galleries' => function ($galleries) {
                $galleries->with(['elements' => function ($elements) {
                    $elements->orderBy('position', 'asc')->where('deleted_at', null);
                }]);
            }])->select('blocks.*');
        return $subsection;
    }

}