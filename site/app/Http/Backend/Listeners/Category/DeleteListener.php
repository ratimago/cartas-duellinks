<?php namespace App\Http\Backend\Listeners\Category;

class DeleteListener
{

    public function delete($category)
    {
        $this->image($category);
    }

    /*
     * ============= Eliminar imagen de categoría =============
     */
    private function image($category)
    {
        if($category->object->exists)
        {
            if(isset($category->object->image))
            {
                if(file_exists(public_path("images/categories/{$category->object->image}")))
                    @unlink(public_path("images/categories/{$category->object->image}"));
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
            'App\Http\Backend\Events\Category\DeleteEvent',
            'App\Http\Backend\Listeners\Category\DeleteListener@delete'
        );
    }
}