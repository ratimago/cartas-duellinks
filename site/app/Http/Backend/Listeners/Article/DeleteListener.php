<?php namespace App\Http\Backend\Listeners\Article;

use Illuminate\Support\Facades\File;
use Illuminate\Filesystem\Filesystem;

class DeleteListener
{

    public function delete($article)
    {
        //$this->ids($article);
        //$this->tags($article);
        $this->gallery($article);
    }

    /*
     * ============= Eliminar Relación Id's de Artículos =============
     */
    private function ids($article)
    {
        foreach($article->list as $item)
        {
            if(!$item->ids->isEmpty())
            {
                \DB::table('ids')->where('idssable_id', $item->id)->delete();
            }
        }
    }

    /*
     * ============= Eliminar Relación Tags de Artículos =============
     */
    private function tags($article)
    {
        foreach($article->list as $item)
        {
            foreach($item->tags as $tag)
            {
                if(!\DB::table('taggables')->where('tag_id', $tag->id)->whereNotIn('taggable_id', [$item->id])->first())
                {
                    $tag->delete();
                }
            }

            \DB::table('taggables')->where('taggable_id', $item->id)->delete();
        }
    }

    /*
     * ============= Guardar Galería =============
     */
    private function gallery($article)
    {
        $filesystem = new Filesystem();

        foreach($article->list as $item)
        {
            if(!$item->galleries->isEmpty())
            {
                $gallery = $item->galleries->first();

                if (File::exists(public_path() . "/{$gallery->directory}")) {
                    $filesystem->deleteDirectory(public_path() . "/{$gallery->directory}");
                }

                $gallery->delete();
            }
        }
    }



    /**
     * Register the listeners for the subscriber.
     * @return array
     */
    public function subscribe($events)
    {
        $events->listen(
            'App\Http\Backend\Events\Article\DeleteEvent',
            'App\Http\Backend\Listeners\Article\DeleteListener@delete'
        );
    }
}