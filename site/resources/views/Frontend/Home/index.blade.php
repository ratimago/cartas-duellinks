@extends('Frontend.master')
@section('title'){{ $title }}@endsection
@section('metadescription'){{ $meta_description }}@endsection
@section('image'){{ asset('') }}@endsection
@section('content')
<style type="text/css">
	.fish {
		min-width: 500px;
	}
</style>
    <main class="home">
        {{--@foreach($gallery->elements as $element)
             @if(isset($element->link_href))
                 <h1>{{ $element->value }}</h1>
             @endif
         @endforeach--}}
        <!--Slider principal-->
        <section class="panel slider">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <div id="slider-home">
                            @foreach($gallery->elements as $element)
                                @if(isset($element->link_href) && !empty($element->link_href))
                                    <div class="slide">
                                        <div class="row">
                                            <div class="col s12">
                                                <div class="item-video" data-merge="1">
                                                    <a class="owl-video" href="{{ $element->link_href }}"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @else
                                    {{--{{$slider[4]['video']}}--}}
                                    <div class="slide"
                                        style="background-image: url({{ asset($gallery->directory. '/' .$element->background) }})">
                                        <div class="row">
                                            <div class="col s12 l7 center-align">
                                                <img src="{{ asset($gallery->directory. '/' .$element->value) }}" alt="camion">
                                            </div>

                                            <div class="col s12 l5 center-align ">
                                                <div class="valign-wrapper">
                                                    <div class="valign">
                                                        <h2 class="left-align">{{ $element->title }}</h2>
                                                        <a href="{{ $element->link_text }}"
                                                        class="waves-effect waves-light btn">Conoce más</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endif
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="panel titulos">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h2 class="center-align animacionTitulo">LLEGA A DONDE QUIERAS</h2>
                    </div>
                </div>
            </div>
        </section>

        <section class="panel promociones parallax">
            <div class="imagen-parallax"></div>
            <div class="container contenido-parallax">
                <div class="row">
                    <div class="col s12 center-align">
                        <h2>Promociones</h2>
                        <a href="/promociones" class="waves-effect waves-light btn">Ver promociones</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="panel logotipo valign-wrapper white">
            <div class="container">
                <div class="row">
                    <div class="col s12 center-align">
                        <h1><img src="{{asset('/imagenes/isuzu-logo.png')}}" class="responsive-img valign" alt="logotipo isuzu"/></h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="panel acercaDe parallax">
            <div class="imagen-parallax"></div>
            <div class="container contenido-parallax">
                <div class="row">
                    <div class="col s12 l6 offset-l3 center-align">
                        <p>Con más 10 años en México, somos fabricantes japoneses de vehículos industriales y comerciales,
                            así como de motores motor diésel con sede mundial en Tokio, Japón.</p>

                        <p>Nos centramos en el diseño, producción, ensamblaje, venta y distribución de vehículos
                            comerciales.</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 center-align">
                        <ul class="lista-animada">
                            <li class="izquierda">Diseño Japonés</li>
                            <li class="abajo">Rendimiento</li>
                            <li class="arriba">capacidad de carga</li>
                            <li class="derecha">durabilidad</li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 center-align">
                        <a href="/camiones" class="waves-effect waves-light btn">Conoce más</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="panel titulos">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h2 class="center-align animacionTitulo">TE ASISTIMOS DURANTE TODO TU CAMINO</h2>
                    </div>
                </div>
            </div>
        </section>

        <section class="panel servicio parallax">
            <div class="imagen-parallax"></div>
            <div class="container contenido-parallax">
                <div class="row">
                    <div class="col s12 l6 offset-l3 center-align">
                        <h2>Servicio</h2>

                        <p>En ISUZU nos diferenciamos por brindar un servicio de calidad, asistiendo cada momento para
                            asegurarnos de guíar y ofrecer los conocimientos esenciales para otorgarte una mayor
                            satisfacción de nuestros productos.</p>

                        <p><span>LISTOS PARA AYUDARTE</span></p>

                        <a href="/postventa/servicios" class="waves-effect waves-light btn">Conoce más</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
@endsection
