<?php namespace App\Http\Backend\Listeners\Truck;

use App\Http\Entities\Gallery as Galleries;
use App\Http\Backend\Repositories\TruckRepo;

class SaveListener
{

    public function save($truck)
    {
        //$this->ids($article);
        //$this->tags($truck);
        $this->gallery($truck);
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
    private function gallery($truck)
    {
        $item = $truck->object;
        $exists = $truck->exists;

        if(!$exists)
        {
            $gallery = new Galleries([
                'name'      => "truck-{$item->slug}",
                'position'  => 1,
                'directory' => "images/truck/truck-{$item->slug}",
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
            'App\Http\Backend\Events\Truck\SaveEvent',
            'App\Http\Backend\Listeners\Truck\SaveListener@save'
        );
    }
}