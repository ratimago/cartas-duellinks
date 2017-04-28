@extends('Frontend.master')
@section('title') 404 @endsection
@section('content')
<main class="error">
    <section class="encabezado black">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h1 class="white-text center-align">Error de navegación</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="mensaje-error">
        <div class="container">
            <div class="row">
                <div class="col s12 l3 offset-l6">
                    <p>¡Oops! Lo sentimos. No se pudo encontrar la página solicitada. Si ingresó el enlace, compruebe que lo escribió correctamente.</p>

                    <a href="/" class="waves-effect waves-light btn">Regresar al home</a>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection
