@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags($meta_description), 0, 230) }} @stop
@section('content')
    <main class="postventa">
        <section class="encabezado">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h1 class="white-text center-align">Nosotros</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="contenido-postventa">
            <div class="container">
                <div class="row no-row">
                    @include('Frontend.Sections.Subsections.menu-nosotros')

                    <article class="col s12 l9 notas-imagenes">
                        <div class="row">
                            <div class="col s12 l8 nota">
                                <h2>{{ $block->title }}</h2>

                                <div class="redactor redactor-blanco">{!! $block->text !!}</div>
                            </div>

                            <div class="col s12 l4 imagenes">
                                @foreach($block->galleries as $gallery)
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


{{--<section class="contenido-postventa">
            <div class="container">
                <div class="row">
                    @if(isset($menu))
                        {!! $menu !!}
                    @endif

                    @if(isset($block))
                        @foreach($block->galleries as $gallery)
                            @foreach($gallery->elements as $image)
                                <div class="slide">
                                    <img src="/imagenes/postventa/galeria-demo-elf100.jpg" alt="">

                                    <div class="textos">
                                        @if($image->title)
                                            <div class="titulo">
                                                <h3>{{ $image->title }}</h3>
                                            </div>
                                        @endif

                                        @if($image->subtitle)
                                            <div class="descripcion hide-on-small-only">
                                                <p>{{ $image->subtitle }}</p>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            @endforeach
                        @endforeach
                    @endif
                </div>
            </div>
        </section>--}}