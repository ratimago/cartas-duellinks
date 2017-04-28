<aside class="col s12 l3 center-align menu-acercade">
    <ul class="menu left-align">
        @foreach($blocks as $block)
            <li {{ (@$active == 'acerca-de/'.$block->slug) ? 'class=active' : null  }}>
                <a href={{ $block->slug == 'acerca-de' ? url('/acerca-de') : '#'}}>{{ $block->title }} </a>
            </li>
        @endforeach
    </ul>
</aside>
