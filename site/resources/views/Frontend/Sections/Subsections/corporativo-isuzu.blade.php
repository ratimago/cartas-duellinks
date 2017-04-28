@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags($meta_description), 0, 230) }} @stop
@section('content')
    @include('Frontend.Sections.Subsections.menu-nosotros')

    <h2>{{ $title }}</h2>

    <div class="redactor redactor-blanco">{!! $text !!}.</div>

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
@endsection