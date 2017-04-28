<?php namespace App\Http\Backend\Listeners\Promotion;

use App\Http\Entities\Gallery as Galleries;
use App\Http\Backend\Repositories\PromotionRepo;

class SaveListener
{

    public function save($promotion)
    {
        //$this->ids($article);
        //$this->tags($truck);
        $this->gallery($promotion);
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
    private function gallery($promotion)
    {
        $item = $promotion->object;
        $exists = $promotion->exists;

        if(!$exists)
        {
            $gallery = new Galleries([
                'name'      => "promotion-{$item->id}",
                'position'  => 1,
                'directory' => "images/promotion/promotion-{$item->id}",
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
            'App\Http\Backend\Events\Promotion\SaveEvent',
            'App\Http\Backend\Listeners\Promotion\SaveListener@save'
        );
    }
}