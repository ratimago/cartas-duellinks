@extends('Frontend.master')
@section('content')

<main class="concesionarios">
    <section class="encabezado">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h1 class="white-text center-align">Centros de Servicio</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="mapas">
        <div class="container">
            <div class="row row-sin-margen">
                <div class="col s12 l6">
                    <h2>Selecciona tu centro de servicio</h2>
                </div>

                <div class="col s12 l6 center-align">
                    <a href="{{ route('dealership') }}" class="right waves-effect waves-light btn boton-region">Concesionarios</a>
                </div>
            </div>
            
            <div class="row">
                @include('Frontend.CentersService.menu')
                
                <div class="col s12 l8">
                    <div class="coordenadas-mapa" id="scroll">

                        @foreach($dealerships as $dealership)
                            <?php $latitud = \Backend::getLatitud($dealership->coordinates) ?>
                            <?php $longitud = \Backend::getLongitud($dealership->coordinates) ?>
                            <div class="coordenadas" 
                                data-titulo="{{ $dealership->title }}"
                                data-direccion="{{ $dealership->address }}"
                                data-telefonos="{{ $dealership->phones }}"
                                data-latitud="{{ $latitud }}"
                                data-longitud="{{ $longitud }}"></div>
                        @endforeach
                    </div>

                    <div id="map" style="height: 300px;"></div>

                    <div class="informacion">
                        {{--Test--}}
                        <h3> Centro de Servicio {{ isset($state) ? $state->name : null}}</h3>
                        <div id="direccion">
                            @foreach($dealerships as $dealership)
                                <?php $latitud = \Backend::getLatitud($dealership->coordinates) ?>
                                <?php $longitud = \Backend::getLongitud($dealership->coordinates) ?>
                                <div class="imagen-info" style="background-image: url({{ asset('filesUpdates/Concesionarios/' . $dealership->image) }})">

                                </div>
                                <p>{{ $dealership->title }}, {{ $dealership->address }}<br> {{ $dealership->phones }}</p>
                                <a class="waves-effect waves-light btn boton-google" href="http://maps.google.com/maps?daddr={{ $latitud }},{{ $longitud }}&amp;ll=" target="_blank">ver en google maps</a>
                                <p><div class="divider white"></div></p>
                            @endforeach
                        </div>
                    </div>

                    <div class="row">
                        <div class="col s12">
                            <div class="center-align">
                                <a href="/pdf/concesionarios-y-centros-de-servicio-isuzu-2017.pdf" class="waves-effect waves-light btn descarga extra-extra-large">Descarga aquí la lista de Concesionarios y Centros de Servicio Isuzu.</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    </section>

    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6nPaeCSuqNgkUgXb4xwzx_f3dtOcEd4A"></script>
</main>
@endsection

   {{-- <div>
        <ul>
            @foreach($states as $state)
                <li><a href="{{ route('dealership.getDealership', ['state_id' => $state->id]) }}">{{ $state->name }}</a>
                </li>
            @endforeach
        </ul>
    </div>--}}

    {{--@if(isset($menu))
        {!! $menu !!}
    @endif
    <div>
        @foreach($dealerships as $dealership)
            <li><p>
                    Coordenadas: {{ $dealership->coordinates }}<br>
                    Direccion: {{ $dealership->address }}<br>
                    Teléfonos: {{ $dealership->phones }}
                </p><br><br>
            </li>
        @endforeach
    </div>--}}
