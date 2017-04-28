@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags($meta_description), 0, 230) }} @stop
@section('content')
    <main class="postventa bueno">
        <section class="encabezado">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h1 class="white-text center-align">Accesorios</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="contenido-postventa">
            <div class="container">
                <div class="row">
                    @include('Frontend.Sections.Subsections.menu-postventa')

                    <article class="col s12 l9 notas-imagenes" id="scroll">
                        <div class="nota">
                            <p>Los accesorios Isuzu, optimizan las funcionalidades de los camiones, contribuyendo a maximizar tu inversión. Descubre nuestra variedad de accesorios en nuestro catálogo descargable.</p>

                            <div class="row">
                                <div class="col s12">
                                    <div class="center-align">
                                        <a class="btn waves-effect waves-light center-align" href="/pdf/catalogo-accesorios.pdf" target="_blank">Catálogo de accesorios</a>
                                    </div>
                                </div>
                            </div>
                            

                            <div class="row">
                                <div class="col s12">
                                    <div class="center-align">
                                        <a class="btn waves-effect waves-light center-align extra-extra-large" href="/centros-de-servicio" target="_blank">Dónde comprar accesorios para mi Isuzu</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--<div class="row">
                            <div class="col s12 l8 nota redactor redactor-blanco">
                                {!! $text  !!}
                            </div>
                            <div class="col s12 l4 imagenes center-align">
                                @foreach($section->galleries as $gallery)
                                    @foreach($gallery->elements as $image)
                                        <div class="imagenes-acercade  center-align">
                                            <img src="{{ asset($gallery->directory.'/'.$image->value) }}" alt="">
                                            <p class="nombre">
                                            <h3>{{ $image->title }}</h3>
                                            </p>
                                            <p class="cargo">{{ $image->subtitle }}</p>
                                        </div>
                                    @endforeach
                                @endforeach
                            </div>
                        </div>-->
                    </article>
                </div>
            </div>
        </section>
    </main>
@endsection
