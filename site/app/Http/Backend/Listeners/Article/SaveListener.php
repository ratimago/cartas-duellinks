<?php namespace App\Http\Backend\Listeners\Article;

use App\Http\Entities\Gallery as Galleries;
use App\Http\Backend\Repositories\ArticleRepo;

class SaveListener
{

    public function save($article)
    {
        //$this->ids($article);
        //$this->tags($article);
        $this->gallery($article);
    }

    /*
     * ============= Relacionar Tags de Artículos =============
     */
    private function tags($article)
    {
        $repo = new ArticleRepo();
        $repo->saveTags($article->object, $article->request->get('tags'));
    }

    /*
     * ============= Guardar Galería =============
     */
    private function gallery($article)
    {
        $item = $article->object;
        $exists = $article->exists;

        if(!$exists)
        {
            $gallery = new Galleries([
                'name'      => "article-{$item->slug}",
                'position'  => 1,
                'directory' => "images/articles/article-{$item->slug}",
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
            'App\Http\Backend\Events\Article\SaveEvent',
            'App\Http\Backend\Listeners\Article\SaveListener@save'
        );
    }
}