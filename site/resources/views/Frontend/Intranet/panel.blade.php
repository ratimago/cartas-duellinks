@extends('Frontend.master')
@section('title'){{ $title }}@endsection
@section('metadescription'){{ $meta_description }}@endsection
@section('image'){{ asset('') }}@endsection
@section('content')
<main class="intranet">
    <section class="sistemas">
        <div class="container">
            <div class="row">
                <div class="col s12 m6 l4">
                    <div class="cuadros uno">
                        <h2 class="white-text">Sistema isuzu</h2>
                        <p class="white-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        <a href="#!" class="btn waves-effect waves-light">ENTRAR</a>
                    </div>
                </div>

                <div class="col s12 m6 l4">
                    <div class="cuadros dos">
                        <h2 class="white-text">Sistema de educación</h2>
                        <p class="white-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        <a href="#!" class="btn waves-effect waves-light">ENTRAR</a>
                    </div>
                </div>

                <div class="col s12 m6 l4">
                    <div class="cuadros tres">
                        <h2 class="white-text">Sistema de comunicación de campañas</h2>
                        <p class="white-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        <a href="#!" class="btn waves-effect waves-light">ENTRAR</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="documentos">
        <div class="container">
            <div class="row">
                <div class="col s12 center-align">
                    <h3 class="white-text">Documentos Descargables</h3>
                </div>
            </div>

            <div class="row row-sin-margen">
                <div class="col s12 l6 offset-l3">
                    <ul>

                        @foreach($file->elements as $element => $value)
                            <li>
                                <p class="white-text">{{ $value->title }}</p>
                                <a class="btn waves-effect waves-light" href="/intranet/archivos/{{$value->value}}">DESCARGAR</a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>    
    </section>
</main>
@endsection
