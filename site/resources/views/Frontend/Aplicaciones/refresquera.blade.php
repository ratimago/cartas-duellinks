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
                            <h2>Refresquera</h2>
                        </div>
                        <div class="col s12 l5 right-align boton-solicita">
                            <a href="{{ route('quotation', ['slug' => 'cotizacion']) }}" class="waves-effect waves-light btn">Solicita tu cotización</a>
                        </div>
                    </div>

                    <canvas id="canvas" width="1050" height="515" style="display: block; background-color:black"></canvas>
                    <div class="descripcion center-align">                        
                        <p>Refresquera, aplicación para combinar con tu camión ELF. Disfruta de su rendimiento y capacidad de carga que ofrece la tecnología y diseño japones. Detalles tan simples como las manijas de apertura vertical muestran el enfoque de Isuzu en hacer vehículos más confortables y adaptados a las necesidades diarias de los operadores.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection