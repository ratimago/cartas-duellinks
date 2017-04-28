@extends('Frontend.master')
@section('title') Aplicaciones @endsection
@section('metainformacion') {{ substr( strip_tags('Aplicaciones Isuzu Motors Mexico'), 0, 230) }} @stop
@section('image'){{ asset('') }}@endsection
@section('content')
<main class="aplicaciones">
    <section class="encabezado z-depth-2">
        <div class="container">
            <div class="row">
                <div class="col s12 center-align">
                    <h1>Aplicaciones</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="informacion-aplicaciones">
        <div class="container">
            <div class="row">
                @include('Frontend.Aplicaciones.menu')

                <div class="col s12 l8">
                    <h2>Tus camiones listos para trabajar</h2>
                    <div class="descripcion">
                        <p>Ya sea que tu carga necesite redilas, caja seca en caso de no perecederos, cajas refrigeradas en caso contrario, grúa, pipa de gas, barredora, camión basurero, refresquera, volteo, barredora, grúa telescópica, plataforma, etc. Nuestros camiones se adaptan a tu carga, Somos camiones Isuzu.</p>
                        
                        <p>Descubre la aplicación que necesitas. Aplicaciones sugeridas para camiones Isuzu.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection
