
<div class="carousel">
    @foreach($gallery as $gallery)
        @foreach($gallery->elements as $image)
            <a class="carousel-item" href="#one!">
                <img src="{{ asset($gallery->directory.'/'.$image->value) }}">
            </a>
        @endforeach
    @endforeach
</div>