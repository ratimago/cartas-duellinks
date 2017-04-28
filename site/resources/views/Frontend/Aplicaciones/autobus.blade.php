@extends('Frontend.master')
@section('title') Aplicaciones @endsection
@section('metainformacion') {{ substr( strip_tags('Aplicaciones Isuzu Motors Mexico'), 0, 230) }} @stop
@section('image'){{ asset('') }}@endsection
@section('content')
<main class="aplicaciones aplicacion-camiones">
    @include('Frontend.Aplicaciones.titulosaplicaciones')

    <section class="informacion-aplicaciones">
        <div class="container">
            <div class="row">
                @include('Frontend.Aplicaciones.menu')
                
                <div class="col s12 l9" id="prueba">
                    <div class="row">
                        <div class="col s12 l7">
                            <h2>Autobus</h2>
                        </div>
                        <div class="col s12 l5 right-align boton-solicita">
                            <a href="{{ route('quotation', ['slug' => 'cotizacion']) }}" class="waves-effect waves-light btn">Solicita tu cotización</a>
                        </div>
                    </div>
                    
                    <canvas id="canvas" width="1050" height="515" style="display: block; background-color:black"></canvas>
                    <div class="descripcion center-align">                        
                        <p>Autobus Isuzu es una excelente opción para el segmento de pasaje. ELF cuenta con uno de los chasises más ligeros y resistentes del mercado, esto permite contar con una mayor capacidad de carga y a su vez un mejor rendimiento de combustible.</p>
                    </div>                        
                </div>
            </div>
        </div>
    </section>
</main>
@endsection
