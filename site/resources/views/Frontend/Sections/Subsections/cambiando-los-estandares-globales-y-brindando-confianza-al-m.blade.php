@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags($meta_description), 0, 230) }} @stop
@section('content')
    <main class="postventa">
        <section class="encabezado">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h1 class="white-text center-align">Acerca de</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="contenido-postventa">
            <div class="container">
                <div class="row">
                    @include('Frontend.Sections.Subsections.menu-acerca-de')

                    <article class="col s12 l9 notas-imagenes" id="scroll">
                        <div class="row">
                            <div class="col s12 l8 nota">
                                <h2>{{ $title }}</h2>

                                <div class="redactor redactor-blanco">{!! $text !!}</div>
                            </div>

                            <div class="col s12 l4 imagenes" >
                                @foreach($section->galleries as $gallery)
                                    @foreach($gallery->elements as $image)
                                        <div class="imagenes-acercade  center-align">
                                            <img src="{{ asset($gallery->directory.'/'.$image->value) }}" alt="">
                                            <p class="nombre">{{ $image->title }}</p>
                                            <p class="cargo">{{ $image->subtitle }}</p>
                                        </div>
                                    @endforeach
                                @endforeach
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>
@endsection