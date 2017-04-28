<?php namespace App\Http\Backend\Events\Category;

use Illuminate\Queue\SerializesModels;

class DeleteEvent
{
    use SerializesModels;

    public $object;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($category)
    {
        $this->object = $category;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [];
    }
}
