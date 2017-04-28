@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags($meta_description), 0, 230) }} @stop
@section('content')
    <main class="postventa bueno">
        <section class="encabezado">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h1 class="white-text center-align">{{ $title }}</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="contenido-postventa">
            <div class="container">
                <div class="row">
                    @include('Frontend.Sections.Subsections.menu-postventa')

                    {!! $text !!}
                </div>
            </div>
        </section>
    </main>
@endsection
