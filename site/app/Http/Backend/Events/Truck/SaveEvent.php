<?php namespace App\Http\Backend\Events\Truck;

use Illuminate\Queue\SerializesModels;

class SaveEvent
{
    use SerializesModels;

    public $object;
    public $request;
    public $exists;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($object, $request, $exists)
    {
        $this->object   = $object;
        $this->request  = $request;
        $this->exists   = $exists;
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
