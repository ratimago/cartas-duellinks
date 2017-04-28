@extends('Frontend.master')
@section('title') Promociones @endsection
@section('metainformacion') {{ substr( strip_tags($meta_description), 0, 230) }} @stop
@section('image'){{ asset('') }}@endsection
@section('content')
<main class="promociones">
    <section class="encabezado z-depth-2">
        <div class="container">
            <div class="row">
                <div class="col s12 center-align">
                    <h1>Disfruta de las promociones</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="slider-general">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <div id="slider-generico">
                    @foreach($galleries->elements as $image)
                        <!--Slider con imagenes y texto-->
                        <div class="slide">
                        @if(isset($image->link_text))
                            <a href="{{ $image->link_text }}"><img src="{{ asset($galleries->directory.'/'.$image->value) }}" alt="{{ $image->title }}"></a>
                        @else
                            <img src="{{ asset($galleries->directory.'/'.$image->value) }}" alt="{{ $image->title }}">
                        @endif
                        </div>
                    @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection


    <!--@foreach($galleries->elements as $image)
        <div class="ms-slide">
            <img src="{{ asset($galleries->directory.'/'.$image->value) }}"
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
    @endforeach-->
