@extends('Frontend.master')
@section('title') {{ $truck->title }} @endsection
@section('metainformacion') {{ substr( strip_tags($truck->meta_description), 0, 230) }} @stop
@section('image'){{ asset('') }}@endsection
@section('content')
    <main class="camiones" id="scroll">
        <section class="encabezado z-depth-2" >
            <div class="container">
                <div class="row">
                    <div class="col s12 center-align">
                        <h1>Encuentra tu camión isuzu</h1>
                    </div>
                </div>
            </div>
        </section>

        @include('Frontend.Trucks.menu-interna')

        @if(isset($truck))
            <section class="descripcion"
                     style="background-image: url({{ asset('filesUpdates/Camiones/'.$truck->name_image_background) }})">
                <div class="container">
                    <div class="row row-sin-margen">
                        <div class="col s12 l6">
                            <div class="camion center-align">
                                <img src="{{ asset('filesUpdates/Camiones/'.$truck->name_image_truck) }}"
                                     class="responsive-img" alt="camion">
                            </div>
                        </div>

                        <div class="col s12 l6">
                            <div class="logotipo center-align">
                                <img src="{{ asset('filesUpdates/Camiones/'.$truck->name_logo) }}"
                                     class="responsive-img" alt="logotipo">
                            </div>

                            <div class="resumen" id="resumen">
                                <h2>{{ $truck->title }}</h2>

                                <p>{!! $truck->text !!} </p>
                            </div>

                            <!--@if(isset($truck->file_datasheet) && !empty($truck->file_datasheet) || isset($truck->file_catalog) && !empty($truck->file_catalog))
                                <div class="resumen botones center-align">
                                    @if(isset($truck->file_datasheet) && !empty($truck->file_datasheet))
                                        <a class="btn" href="{{ route('truck.getFichaTecnica', $truck->slug) }}">Ficha
                                            Tecnica</a><br>
                                    @endif

                                    @if(isset($truck->file_catalog) && !empty($truck->file_catalog))
                                        <a class="btn" href="{{ route('truck.getCatalogo', $truck->slug) }}">Catalogo</a>
                                    @endif

                                    <a class="btn" href="{{ route('applications') }}">Aplicaciones</a>
                                    <p class="aplicacion-sugerida">*Aplicaciones sugeridas para camiones Isuzu</p>
                                </div>
                            @endif-->
                        </div>
                    </div>

                    <!-- Nuevos botones -->
                    <div class="row">
                        <div class="col s12">
                            <div class="botonera center-align">
                                @if(isset($truck->file_datasheet) && !empty($truck->file_datasheet) || isset($truck->file_catalog) && !empty($truck->file_catalog))
                                    @if(isset($truck->file_datasheet) && !empty($truck->file_datasheet))
                                        <a class="waves-effect waves-light btn" href="{{ route('truck.getFichaTecnica', $truck->slug) }}">
                                            <img src="/imagenes/camiones/ficha-tecnica.png" alt="Ficha tecnica">
                                            FICHA TÉCNICA
                                        </a>
                                    @endif

                                    @if(isset($truck->file_catalog) && !empty($truck->file_catalog))
                                        <a class="waves-effect waves-light btn transparente" href="{{ route('truck.getCatalogo', $truck->slug) }}">
                                            <img src="/imagenes/camiones/catalogo.png" alt="Catalogo">
                                            CATÁLOGO
                                        </a>
                                    @endif
                                @endif
                                <a class="waves-effect waves-light btn" href="/postventa/accesorios">
                                    <img src="/imagenes/camiones/accesorios.png" alt="Accesorios">
                                    ACCESORIOS
                                </a>
                                <a class="waves-effect waves-light btn transparente" href="/aplicaciones">
                                    <img src="/imagenes/camiones/aplicaciones.png" alt="Aplicaciones">
                                    APLICACIONES
                                </a>
                                <a class="waves-effect waves-light btn" href="/postventa/garantias">
                                    <img src="/imagenes/camiones/garantia.png" alt="Garantia">
                                    GARANTÍA
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        @endif

        @if(isset($truck))
            <section class="caracteristicas white">
                <div class="container">
                    <div class="row">
                        <div class="col s12 l4">
                            <h3 class="capacidad">CAPACIDAD DE CARGA</h3>

                            <ul>
                                <li>{{ $truck->loading_capacity }}</li>
                            </ul>
                        </div>
                        <div class="col s12 l4">
                            <h3 class="caracteristicas truncate">CARACTERÍSTICAS</h3>

                            <ul>
                                @foreach(\Backend::getList($truck->characteristics, ',') as $data)
                                    <li>{{ $data }}</li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="col s12 l4">
                            <h3 class="tecnologia">TECNOLOGÍA</h3>
                            <ul>
                                <li>{{ $truck->technology }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        @endif

        @if(isset($gallery))
            <section class="galeria-imagenes">
                <div class="container">
                    <div class="row">
                        <article class="col s12 galeria slider-general">
                            <div id="slider-generico">
                                @foreach($gallery->elements as $image)
                                    <div class="slide">
                                        <img src="{{ asset($gallery->directory.'/'.$image->value) }}"
                                            alt="{{ $image->title }}">

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
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        @endif
    </main>
@endsection
