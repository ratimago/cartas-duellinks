@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags($meta_description), 0, 230) }} @stop
@section('content')
<main class="avisos">
    <section class="encabezado z-depth-2">
        <div class="container">
            <div class="row">
                <div class="col s12 center-align">
                    <h1>{{ $title }}</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="aviso">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <div class="contenido-aviso redactor redactor-blanco">
                        <p>{!! $text !!}</p>
                    </div>
                </div>
            </div>
        </div>        
    </section>
</main>
@endsection