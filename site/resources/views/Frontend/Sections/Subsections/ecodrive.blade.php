@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags($meta_description), 0, 230) }} @stop
@section('content')
    <main class="postventa bueno">
        <section class="encabezado">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h1 class="white-text center-align">Eco Drive</h1>
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


            <!--<h1>{{ $section->title }}</h1>
<h2>{{ $section->subtitle }}</h2>

<p> {{ $section->text }}</p>
@foreach($section->galleries as $gallery)
    @foreach($gallery->elements as $image)
            <div class="ms-slide">
                <img src="{{ asset($gallery->directory.'/'.$image->value) }}"
                 data-src="/images/promotion/{{ $image->value }}" alt="{{ $image->title }}"/>

            <div class="ms-layer ms-caption" style="top:10px; left:30px;">
                @if($image->title)
            <h1>{{ $image->title }}</h1>
                    <div class="separador"></div>
                @endif
    @if($image->subtitle)
            <h2>{{ $image->subtitle }}</h2>
                @endif
            </div>
            @if($image->link_href)
    <?php
    $pos = strrpos($image->link_href, "youtube.com");
    ?>
    @if($pos === false)
            <h1><a href="{{ $image->link_text }}" target="_blank">{{ $image->link_text }}</a></h1>
                @else
            <h1><a href="{{ $image->link_href }}" data-type="video">{{ $image->link_href }}</a></h1>
                @endif
    @endif
            </div>
        @endforeach
    @endforeach-->
