@extends('Frontend.master')
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
                                <a href="{{ route('blog.articles.show', ['category' => $article->category->slug, 'article' => $article->slug]) }}">
                                    <div class="noticia hoverable">
                                        
                                            <?php $bool = false; ?>
                                            @foreach($article->galleries as $gallery)
                                                @foreach($gallery->elements as $image)
                                                    @if(!empty($image->value))
                                                        <?php $bool = true; ?>
                                                    @else
                                                        <?php $bool = false; ?>
                                                    @endif
                                                @endforeach
                                            @endforeach
                                            @if($bool == true)
                                                @foreach($article->galleries as $gallery)
                                                    @foreach($gallery->elements as $image)
                                                        <div class="imagen-para-over"
                                                            style="background-image: url({{ asset($gallery->directory.'/'.$image->value) }})"></div>
                                                    @endforeach
                                                @endforeach
                                            @else
                                                <div class="imagen-para-over" style="background-image: url()"></div>
                                            @endif
                                            <div class="imagen valign-wrapper">
                                                <p class="white-text valign center-align">Leer más</p>
                                            </div>
                                        

                                        <div class="descripcion white">
                                            <h6>{{ $article->title }}</h6>

                                            <div class="resumen">
                                                <p>{!! $article->text !!}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        @endforeach
                    </div>

                    <div class="col s12 l4 hide-on-med-and-down">
                        <div class="categorias">
                            <h2 class="white-text">Categorías</h2>

                            <div class="divider white"></div>
                            <ul>
                                @foreach($categories as $category)
                                    <li>
                                        <a href="{{ route('blog.articles', ['slug' => $category->slug]) }}">{{ $category->name }}</a>
                                    </li>
                                @endforeach
                            </ul>
                        </div>

                        <a class="twitter-timeline" data-height="500" data-theme="dark" data-link-color="#ed1c24"
                           href="https://twitter.com/IsuzuMexico">Tweets by IsuzuMexico</a>
                        <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

                        <div class="fb-page" data-href="https://www.facebook.com/isuzumex/" data-tabs="timeline"
                             data-width="500" data-small-header="false" data-adapt-container-width="true"
                             data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/isuzumex/" class="fb-xfbml-parse-ignore"><a
                                        href="https://www.facebook.com/isuzumex/">Isuzu Motors de México</a>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="paginacion">
            <div class="container">
                <div class="row row-sinmargen">
                    <div class="col s12">
                        {!!$articles->render()!!}
                    </div>
                </div>
            </div>
        </section>
    </main>
@endsection


{{--<div>
        <ul>
            @foreach($categories as $category)
                <li>
                    <a href="{{ route('blog.articles', ['slug' => $category->slug]) }}">
                        <h1>{{ $category->name }}</h1>
                    </a>
                </li>
            @endforeach
        </ul>
    </div>
    <div>
        Articulos correspondientes a la categoria en tumbaild
</div>--}}