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
                            <h2>Traslado de vehículos</h2>
                        </div>
                        <div class="col s12 l5 right-align boton-solicita">
                            <a href="{{ route('quotation', ['slug' => 'cotizacion']) }}" class="waves-effect waves-light btn">Solicita tu cotización</a>
                        </div>
                    </div>

                    <canvas id="canvas" width="1050" height="515" style="display: block; bbackground-color:black"></canvas>
                    <div class="descripcion center-align">                        
                        <p>Sin duda la aplicación Traslado de Vehículos es excelente para combinar con tu camión ELF. Disfruta de su rendimiento y capacidad de carga que ofrece la tecnología y diseño japones. La experiencia empírica se ve reflejada en el diseño de la serie ELF.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection