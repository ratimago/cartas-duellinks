<?php namespace App\Http\Backend\Events\Truck;

use Illuminate\Queue\SerializesModels;

class DeleteEvent
{
    use SerializesModels;

    public $list;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($list)
    {
        $this->list = $list->get();
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
