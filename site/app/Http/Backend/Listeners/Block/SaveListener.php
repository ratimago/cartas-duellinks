<?php namespace App\Http\Backend\Listeners\Block;

use App\Http\Entities\Gallery as Galleries;
use App\Http\Backend\Repositories\BlockRepo;

class SaveListener
{

    public function save($block)
    {
        //$this->ids($article);
        //$this->tags($truck);
        $this->gallery($block);
    }

   /*
     * ============= Relacionar Tags de Artículos =============
     */
    /*private function tags($article)
    {
        $repo = new ArticleRepo();
        $repo->saveTags($article->object, $article->request->get('tags'));
    }*/

    /*
     * ============= Guardar Galería =============
     */
    private function gallery($block)
    {
        $item = $block->object;
        $exists = $block->exists;

        if(!$exists)
        {
            $gallery = new Galleries([
                'name'      => "block-{$item->slug}",
                'position'  => 1,
                'directory' => "images/block/block-{$item->slug}",
                'active'    => true,
            ]);

            $item->galleries()->save($gallery);
        }
    }



    /**
     * Register the listeners for the subscriber.
     * @return array
     */
    public function subscribe($events)
    {
        $events->listen(
            'App\Http\Backend\Events\Block\SaveEvent',
            'App\Http\Backend\Listeners\Block\SaveListener@save'
        );
    }
}