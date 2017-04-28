<aside class="col s12 l3 center-align menu-acercade">
    <div class="titulo left-align">
        <h2>Coorporativo <span class="texto-rojo">ISUZU</span></h2>
    </div>

    <ul class="menu left-align">
        @foreach($blocks as $block)
            @if($block->slug != 'isuzu-en-la-antartida')
            <li {{ (@$active == 'acerca-de/'.$block->slug) ? 'class=active' : null  }}><a href="/acerca-de/{{ $block->slug }}">{{ $block->title }} </a></li>
            @endif
            @endforeach
    </ul>
</aside>
