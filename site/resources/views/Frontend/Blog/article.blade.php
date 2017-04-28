@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags($meta_description), 0, 230) }} @stop
@section('image'){{ asset('') }}@endsection
@section('content')
<main class="interna-blog">
    <section class="titulo-noticia-blog">
        <div class="container">
            <div class="row">
                <div class="col s12 l10 offset-l1">
                    <p class="regresar"><a href="{{ url(isset($_SERVER['HTTP_REFERER'])
                    ? $_SERVER['HTTP_REFERER'] : '/blog') }}">< Regresar</a></p>
                    <p class="categoria"><span>NOTICIAS</span> - Categoría: <a href="{{ route('blog.articles', ['slug' => $article->category->slug]) }}">{{$article->category->name}}</a></p>

                    <div class="row row-sin-aire">
                        <div class="col s12 l6">
                            <h1 class="white-text">{{ $article->title }}</h1>

                            <!-- formato de fecha  Mes dia, año; ejemplo: Julio 28, 2016-->
                            <p class="fecha">{{ \Frontend::datePublishing($article->created_at) }}</p>
                        </div>
                        <div class="col s12 l6 right-align">
                            <!-- Go to www.addthis.com/dashboard to customize your tools -->
                            <p class="compartir white-text">Compartir </p><div class="addthis_sharing_toolbox"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="galeria">
        <div class="container">
            <div class="row">
                <div class="col s12 l10 offset-l1">
                    <div id="galleryContainer">
                        <ul class="Content" style="display:none;">
                            @foreach($gallery->elements as $image)
                                <li>   
                                    <img class="Image" src='{{ asset($gallery->directory.'/'.$image->value) }}' alt="{{ $image->title }}"/>
                                    <img class="Thumb" src='{{ asset($gallery->directory.'/'.$image->value) }}' alt="{{ $image->title }}"/>
                                    <span class="CaptionTitle"></span>
                                    <span class="CaptionText"></span>
                                    <span class="Media"></span>
                                    <span class="LightboxMedia"></span>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="texto">
        <div class="container">
            <div class="row">
                <div class="col s12 l10 offset-l1">
                    <div class="texto-embebido white">
                        <p>{!! $article->text !!}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection

<!--<div>
        <ul>
            <h1>{{ $article->title }}</h1>

            <p><img src="{{ asset('filesUpdates/Articles/'. $article->icon) }}"></p>

            {!! $article->text !!}


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
                            <a href="{{ $image->link_href }}" target="_blank">{{ $image->link_text }}</a>
                        @else
                            <a href="{{ $image->link_href }}" data-type="video">{{ $image->link_text }}</a>
                        @endif
                    @endif
                </div>
            @endforeach
        </ul>
    </div>-->