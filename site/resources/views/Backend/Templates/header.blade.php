<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="brand" href="/mcPanel">
                <img width="190" src={{ asset('/images/unspecified.png') }} alt="">
            </a>
        </div>
        <ul class="nav navbar-nav navbar-right">
            @if (!Auth::guest())
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span
                                class="glyphicon glyphicon-off"></span> {{ Auth::user()->name }} <span
                                class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="{{ route('user.logout') }}"><span class="glyphicon glyphicon-log-out"></span> Salir</a>
                        </li>
                    </ul>
                </li>
            @endif
        </ul>
    </div>
</nav>