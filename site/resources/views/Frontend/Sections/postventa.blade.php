@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags($meta_description), 0, 230) }} @stop
@section('content')
    <main class="postventa">
        <section class="encabezado">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h1 class="white-text center-align">Postventa</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="contenido-postventa">
            <div class="container">
                <div class="row">
                    @if(isset($menu))
                        {!! $menu !!}
                    @endif
                    @if(isset($block))
                        @foreach($block->galleries as $gallery)
                            @foreach($gallery->elements as $image)
                                <div class="slide">
                                    <img src="{{ asset($gallery->directory.'/'.$image->value) }}" alt="">

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

                <article class="col s12 l9 notas-imagenes">
                    <div class="row">
                        <div class="col s12 l8 nota redactor">
                            <h1>Titulo</h1>
                            <h2>Titulo</h2>
                            <h3>Titulo</h3>
                            <h4>Titulo</h4>
                            <h5>Titulo</h5>
                            <h6>Titulo</h6>

                            <strong>strong</strong>
                            <em>Cursiva</em>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis ipsum,
                                laoreet a lobortis sit amet, tincidunt vel sapien. Nulla vestibulum turpis dolor,
                                vel finibus mi rhoncus vestibulum. Phasellus dui leo, pellentesque eu leo non, porta
                                scelerisque nunc. Nam id pellentesque purus. Fusce sapien erat, hendrerit a posuere
                                eu, efficitur non est. Pellentesque sed lectus ut nibh pulvinar finibus. Maecenas
                                erat leo, commodo non ullamcorper non, interdum non augue. Aliquam erat volutpat.
                                Integer semper sagittis lectus non tempor. Donec commodo velit sit amet felis
                                sagittis sagittis. Aliquam facilisis non mauris id consectetur. Mauris ac euismod
                                ipsum, id sagittis nibh.</p>

                            <p>Sed elementum imperdiet dui sed commodo. Sed tincidunt quis elit at tempor. Duis at
                                sapien consequat, lacinia nulla quis, vestibulum risus. Suspendisse volutpat
                                vestibulum eros ac laoreet. Nullam quis rutrum massa, eget tincidunt leo. Morbi
                                vitae purus nunc. Mauris et finibus elit.</p>

                            <p>Curabitur ultricies venenatis eros et sodales. Vestibulum imperdiet, quam non
                                vestibulum vestibulum, metus tellus volutpat velit, quis auctor dui velit id leo.
                                Suspendisse ut diam vel metus egestas tincidunt eget quis turpis. Aliquam laoreet
                                quis neque ut viverra. Sed id neque felis. Etiam euismod congue eros, vitae
                                vestibulum leo finibus ac. Curabitur sit amet hendrerit velit.</p>

                            <p>Nulla eu purus suscipit, tincidunt elit eu, volutpat ipsum. Vestibulum vel mattis
                                ante, eget porta justo. Vivamus in sollicitudin metus. Pellentesque at aliquet
                                ligula. Cras gravida nunc ut fermentum rhoncus. Etiam commodo purus ut tortor mollis
                                cursus. Integer mollis nisl ac laoreet pulvinar. Fusce fringilla justo quam, at
                                iaculis velit pharetra in.</p>

                            <p><strong>Maecenas hendrerit augue id diam congue</strong>, a porttitor nisl pretium.
                                Phasellus tempus placerat neque ultrices consectetur. Nunc et pretium lacus, sed
                                vulputate magna. Aenean euismod mollis tellus eu vehicula. Mauris tempor mi id ex
                                sodales tristique. In hac habitasse platea dictumst. Nulla facilisi. Sed in eros
                                ullamcorper, suscipit lectus tempus, elementum urna. Cras at diam eu diam posuere
                                finibus nec vitae orci. Integer massa erat, semper at ex sit amet, imperdiet
                                vestibulum elit. Morbi eu tellus at tortor accumsan elementum et ac felis. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum, tortor et ultrices
                                varius, metus enim consequat lectus, ac malesuada magna libero et tellus.</p>

                            <ul>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                            </ul>

                            <ol>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                            </ol>
                        </div>
                        <div class="col s12 l4 imagenes center-align">
                            <img src="/imagenes/postventa/componentes-bateria.jpg" class="responsive-img"
                                 alt="Descripcion de la imagen"/>
                            <img src="/imagenes/postventa/componentes-bateria.jpg" class="responsive-img"
                                 alt="Descripcion de la imagen"/>
                            <img src="/imagenes/postventa/componentes-bateria.jpg" class="responsive-img"
                                 alt="Descripcion de la imagen"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col s12 l8 nota">
                            <h2>¿Qué es una batería?</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis ipsum,
                                laoreet a lobortis sit amet, tincidunt vel sapien. Nulla vestibulum turpis dolor,
                                vel finibus mi rhoncus vestibulum. Phasellus dui leo, pellentesque eu leo non, porta
                                scelerisque nunc. Nam id pellentesque purus. Fusce sapien erat, hendrerit a posuere
                                eu, efficitur non est. Pellentesque sed lectus ut nibh pulvinar finibus. Maecenas
                                erat leo, commodo non ullamcorper non, interdum non augue. Aliquam erat volutpat.
                                Integer semper sagittis lectus non tempor. Donec commodo velit sit amet felis
                                sagittis sagittis. Aliquam facilisis non mauris id consectetur. Mauris ac euismod
                                ipsum, id sagittis nibh.</p>

                            <p>Sed elementum imperdiet dui sed commodo. Sed tincidunt quis elit at tempor. Duis at
                                sapien consequat, lacinia nulla quis, vestibulum risus. Suspendisse volutpat
                                vestibulum eros ac laoreet. Nullam quis rutrum massa, eget tincidunt leo. Morbi
                                vitae purus nunc. Mauris et finibus elit.</p>

                            <p>Curabitur ultricies venenatis eros et sodales. Vestibulum imperdiet, quam non
                                vestibulum vestibulum, metus tellus volutpat velit, quis auctor dui velit id leo.
                                Suspendisse ut diam vel metus egestas tincidunt eget quis turpis. Aliquam laoreet
                                quis neque ut viverra. Sed id neque felis. Etiam euismod congue eros, vitae
                                vestibulum leo finibus ac. Curabitur sit amet hendrerit velit.</p>

                            <p>Nulla eu purus suscipit, tincidunt elit eu, volutpat ipsum. Vestibulum vel mattis
                                ante, eget porta justo. Vivamus in sollicitudin metus. Pellentesque at aliquet
                                ligula. Cras gravida nunc ut fermentum rhoncus. Etiam commodo purus ut tortor mollis
                                cursus. Integer mollis nisl ac laoreet pulvinar. Fusce fringilla justo quam, at
                                iaculis velit pharetra in.</p>

                            <p><strong>Maecenas hendrerit augue id diam congue</strong>, a porttitor nisl pretium.
                                Phasellus tempus placerat neque ultrices consectetur. Nunc et pretium lacus, sed
                                vulputate magna. Aenean euismod mollis tellus eu vehicula. Mauris tempor mi id ex
                                sodales tristique. In hac habitasse platea dictumst. Nulla facilisi. Sed in eros
                                ullamcorper, suscipit lectus tempus, elementum urna. Cras at diam eu diam posuere
                                finibus nec vitae orci. Integer massa erat, semper at ex sit amet, imperdiet
                                vestibulum elit. Morbi eu tellus at tortor accumsan elementum et ac felis. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum, tortor et ultrices
                                varius, metus enim consequat lectus, ac malesuada magna libero et tellus.</p>

                            <ul>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                            </ul>

                            <ol>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                                <li>asdfkasdf jaskj fdñlasjd fasjd fñlajsfñlj f</li>
                            </ol>
                        </div>
                        <div class="col s12 l4 imagenes center-align">
                            <img src="/imagenes/postventa/componentes-bateria.jpg" class="responsive-img"
                                 alt="Descripcion de la imagen"/>
                        </div>
                    </div>
                </article>
            </div>
            </div>
        </section>
    </main>
@endsection