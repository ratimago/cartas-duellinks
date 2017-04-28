@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags($meta_description), 0, 230) }} @stop
@section('content')
    <main class="postventa bueno catalogo garantias">
        <section class="encabezado">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h1 class="white-text center-align">Garantías</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="contenido-postventa">
            <div class="container">
                <div class="row">
                    @include('Frontend.Sections.Subsections.menu-postventa')

                    <article class="col s12 l9 garantias notas-imagenes" id="scroll">
                        <div class="row">
                            <div class="col s12">
                                {!! $text !!}
                            </div>

                            <!--<div class="col s12 l8 nota redactor redactor-blanco">

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
                            </div>-->
                        </div>

                        <div class="row">
                            <div class="col s12 center-align">
                                <a class="waves-effect waves-light btn localiza" href="/concesionarios">Localiza tu concesionario más cercano</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>
@endsection
