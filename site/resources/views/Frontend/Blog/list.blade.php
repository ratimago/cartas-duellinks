@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags('blog isuzu motors mexico'), 0, 230) }} @stop
@section('image'){{ asset('') }}@endsection
@section('content')
<main class="blog">
    <section class="titulo-blog">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h1 class="white-text">ÚLTIMAS NOTICIAS</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="ultimas-noticias">
        <div class="container">
            <div class="row">
                <div class="hide-on-large-only input-field col s12">
                    <select onchange="location = this.value;" class="hide-on-large-only">
                        <option value="" disabled selected>Categorias</option>
                        @foreach($categories as $category)
                            <option value="{{ route('blog.articles', ['slug' => $category->slug]) }}">{{ $category->name }}</option>
                        @endforeach
                    </select>
                </div>

                <div class="col s12 l8">
                    @foreach($articles as $article)
                        <div class="col s12 l6">
                            <div class="noticia">
                                <a href="{{ route('blog.articles.show', ['category' => $article->category->slug, 'article' => $article->slug]) }}">
                                    <div class="imagen-para-over" style="background-image: url({{ asset('filesUpdates/Articles/'. $article->icon) }})"></div>
                                    
                                    <div class="imagen valign-wrapper" >
                                        <p class="white-text valign center-align">Leer más</p>
                                    </div>
                                </a>

                                <a href="{{ route('blog.articles.show', ['category' => $article->category->slug, 'article' => $article->slug]) }}">
                                <div class="descripcion white">
                                    <h6>{{ $article->title }}</h6>
                                    <div class="resumen">
                                        <p>{!! $article->text !!}</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                    @endforeach
                </div>

                <div class="col s12 l4 hide-on-med-and-down">
                    <div class="categorias">
                        <h2 class="white-text">Categorías</h2>
                        <div class="divider white"></div>
                        <ul>
                            @foreach($categories as $category)
                                <li><a href="{{ route('blog.articles', ['slug' => $category->slug]) }}">{{ $category->name }}</a></li>
                            @endforeach
                        </ul>
                    </div>

                    <a class="twitter-timeline" data-height="500" data-theme="dark" data-link-color="#ed1c24" href="https://twitter.com/IsuzuMexico">Tweets by IsuzuMexico</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

                    <div class="fb-page" data-href="https://www.facebook.com/isuzumex/" data-tabs="timeline" data-width="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/isuzumex/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/isuzumex/">Isuzu Motors de México</a></blockquote></div>
                </div>
            </div>
        </div>
    </section>

    <section class="paginacion">
        <div class="container">
            <div class="row row-sinmargen">
                <div class="col s12">
                    {{--{!!$articles->render()!!}--}}
                </div>
            </div>
        </div>
    </section>
</main>
@endsection

{{--<div>
        <ul>
            @foreach($articles as $article)
                <div class="row">
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-image">
                                <img src="{{ asset('filesUpdates/Articles/'. $article->icon) }}">
                                <span class="card-title">{{ $article->title }}</span>
                            </div>
                            <div class="card-content">
                                {{ $article->text }}
                            </div>
                            <div class="card-action">
                                <a href="{{ route('blog.articles.show',
                                ['category' => $article->category->slug,
                                'article' => $article->slug]) }}">Leer más...</a>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </ul>
    </div>
    <div>
        Articulos correspondientes a la categoria en tumbaild
    </div>--}}