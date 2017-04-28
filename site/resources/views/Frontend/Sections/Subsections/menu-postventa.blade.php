<aside class="col s12 l3 center-align">
    <img src="/imagenes/postventa/postventa-logo.png" alt="postventa" class="responsive-img">
    <ul class="menu left-align">
        @foreach($blocks as $block)
            <li {{ (@$active == 'postventa/'.$block->slug) ? 'class=active' : null  }}><a href="/postventa/{{ $block->slug }}">{{ $block->title }}</a></li>
        @endforeach
    </ul>
</aside>
