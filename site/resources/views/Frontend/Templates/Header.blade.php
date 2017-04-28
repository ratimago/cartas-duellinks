<header>
    <div class="navbar-fixed">
        <nav class="black">
            <div class="container">
                <div class="nav-wrapper">
                    @if(!\Session::get('intranet'))
                        @if(isset($blog))
                            <a href="/blog" class="brand-logo blog">
                                <img src="{{asset('/imagenes/blog/isuzu-blog.png')}}" alt="Logotipo de isuzu blog">
                            </a>

                            <a href="/" class="hide-on-large-only telefono-movil blog">
                                REGRESAR A <span>ISUZU</span>
                            </a>
                        @else
                            <a href="/" class="brand-logo pagina-principal">
                                <img src="{{asset('/imagenes/isuzu-logo.png')}}" alt="Logotipo de isuzu"
                                        class="responsive-img">
                            </a>

                            <a href="tel:01-800-644-7898"
                                class="hide-on-large-only telefono-movil pagina-principal truncate">
                                <i class="material-icons left texto-rojo">&#xE551;</i>MI ISUZU: <span>01-800-644-7898</span>
                            </a>

                            <a href="#!" data-activates="mobile-demo" class="button-collapse"><i
                                        class="material-icons">menu</i></a>
                        @endif

                        <ul class="right hide-on-med-and-down">
                            @if(isset($blog))
                                <li class="blog"><a href="/">Regresar a <span>ISUZU</span></a></li>
                            @else
                                <li {{ (@$active == 'truck') ? 'class=active' : null  }}>
                                    <a id="menu-camiones-todo-sitio" class="hide-on-med-and-down">Camiones</a>
                                    <a href="{{ route('truck') }}" class="hide-on-med-and-up">Camiones</a></li>
                                <!--<li {{ (@$active == 'application') ? 'class=active' : null  }}><a
                                            href="{{ route('applications') }}">Aplicaciones</a></li>-->
                                <li {{ (@$active == 'promotion') ? 'class=active' : null  }}><a
                                            href="{{ route('promotion') }}">Promociones</a></li>
                                <li {{ (@$active == 'postventa/refacciones-isuzu') ? 'class=active' : null  }}><a
                                            href="/postventa/refacciones-isuzu">Postventa</a></li>
                                <li {{ (@$active == 'cotizaciones/financiamiento') ? 'class=active' : null  }}><a
                                            href="{{ route('quotation', ['slug' => 'financiamiento']) }}">Financiamiento</a>
                                </li>
                                <li {{ (@$active == 'nosotros') ? 'class=active' : null  }}><a
                                            href="{{ url('/nosotros') }}">Nosotros</a>
                                </li>
                                <li class="pagina-principal"><a href="tel:01-800-644-7898"><i
                                                class="material-icons left texto-rojo">&#xE551;</i>MI ISUZU: <span>01-800-644-7898</span></a>
                                </li>
                            @endif
                        </ul>

                        @if(isset($blog))
                        @else
                            <ul class="side-nav black" id="mobile-demo">
                                <li class="center-align">
                                    <a href="#!">
                                        <img src="{{asset('/imagenes/isuzu-logo.png')}}" alt="Logotipo de isuzu"
                                                class="responsive-img">
                                    </a>
                                </li>
                                <!--<li {{ (@$active == 'truck') ? 'class=active' : null  }}><a href="{{ route('truck') }}">Camiones</a>
                                </li>-->
                                <li {{ (@$active == 'truck') ? 'class=active' : null  }}><a href="#modal1">Camiones</a>
                                </li>
                                <!--<li {{ (@$active == 'application') ? 'class=active' : null  }}><a
                                            href="{{ route('applications') }}">Aplicaciones</a></li>-->
                                <li {{ (@$active == 'promotion') ? 'class=active' : null  }}><a
                                            href="{{ route('promotion') }}">Promociones</a></li>
                                <li {{ (@$active == 'postventa/refacciones-isuzu') ? 'class=active' : null  }}><a
                                            href="/postventa/refacciones-isuzu">Postventa</a></li>
                                <li {{ (@$active == 'cotizaciones/financiamiento') ? 'class=active' : null  }}><a
                                            href="{{ route('quotation', ['slug' => 'financiamiento']) }}">Financiamiento</a>
                                </li>
                                <li {{ (@$active == 'nosotros') ? 'class=active' : null  }}><a
                                            href="{{ url('/nosotros') }}">Nosotros</a>
                                </li>
                            </ul>
                        @endif
                    @else
                        <!-- AQUI TRABAJAR EL HEADER DE INTRANET -->
                        <a href="/isuzunet" class="brand-logo intranet">
                            <img class="responsive-img" src="{{asset('/imagenes/intranet/isuzu-intranet-logo.png')}}" alt="Logotipo de isuzu blog">
                        </a>


                        @if(\Auth::check())
                            <div class="menu-intranet">
                                <ul>
                                    <li>Bienvenido <strong>{{ \Auth::user()->name }}</strong></li>
                                    <li><a href="/isuzunet/salir">Cerrar sesión</a></li>
                                </ul>
                            </div>
                            @endif
                    @endif
                </div>
            </div>
        </nav>
    </div>

    @if(isset($menutrucks))
        <div class="menu-camiones-fixed">
            {!! $menutrucks !!}
        </div>
    @endif


    {{--@if(@$active != 'truck')
        @if(isset($menutrucks))
            <div class="menu-camiones-fixed">
                {!! $menutrucks !!}
            </div>
        @endif
    @else
        <section class="menu-camiones white hide-on-large-only">
            <div class="row">
                <div class="col s12 center-align">
                    <ul id="menu-camiones-interna" class="white">
                        @if(isset($trucks))
                            @foreach($trucks as $truck)
                                <li {{ (@$active == $truck->slug) ? 'class=active' : null }}>
                                    <a href="{{ route('truck.getTruck', ['slug' => $truck->slug]) }}">
                                        <img src="{{ asset('filesUpdates/Camiones/'.$truck->name_profile) }}"
                                             alt="{{ $truck->name }}">

                                        <p class="truncate">
                                            <strong>{{ $truck->name }}</strong> {{ \Frontend::getLoadWeight($truck->loading_capacity) }}
                                        </p>
                                        <!-- Falta poner las toneladas -->
                                    </a>
                                </li>
                            @endforeach
                        @endif
                    </ul>
                </div>
            </div>
        </section>
    @endif--}}

    <noscript>
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <p class="white-text center-align">Bienvenido a ISUZU</p>

                    <p class="white-text center-align">La página que estás viendo requiere para su funcionamiento el uso
                        de JavaScript. Si lo has deshabilitado intencionadamente, por favor vuelve a activarlo.</p>
                </div>
            </div>
        </div>
    </noscript>

    @if(isset($blog))
    @else

        @if(!\Session::get('intranet'))
        <div class="menu-secundario center-align white">
            <div class="container">
                <div class="row">
                    <div class="col s12 l6">
                        <a href="{{ route('quotation', ['slug' => 'cotizacion']) }}" class="solicita">
                            <p {{ (@$active == 'cotizaciones/cotizacion') ? 'class=active' : null  }}><img
                                        src="/imagenes/cotizacion.png" alt="solicita tu cotizacion"> SOLICITA TU
                                COTIZACIÓN</p>
                        </a>
                    </div>
                    <div class="col s12 l6">
                        <a href="{{ route('dealership') }}" class="encuentra">
                            <p {{ (@$active == 'dealership') ? 'class=active' : null  }}><img
                                        src="/imagenes/concesionario.png" alt="encuentra tu concesionario"> ENCUENTRA TU
                                CONCESIONARIO</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        @endif
    @endif
</header>
