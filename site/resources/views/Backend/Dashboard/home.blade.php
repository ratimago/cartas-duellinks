@extends('Backend.Templates.layout')
@section('content')

    <div class="container-fluid">
        <div class="row" id="dashboard">
            <div class="col-md-10 col-md-offset-1">
                <h1 id="mainTitle" class="text-center">Dashboard</h1>

                <div class="panel panel-default">
                    <div class="panel-body">
                        <h2>¡Bienvenido(a) {{ Auth::user()->name }}!</h2>

                        <p>Dentro del gestor de contenidos de <strong>Isuzu Motors México</strong>, podrá editar toda la
                            información
                            del sitio.</p>
                        <hr/>

                        @if(Auth::user()->role_id == 1)
                            <p>Para acceder rápidamente a editar cualquier elemento del sitio, favor de elegir entre los
                                siguientes botones o puede navegar desde el menú principal.</p>

                            <hr/>
                            <div class="col-md-2">
                                <a href="{{ route('users') }}" class="btn btn-lg">
                                    <img src={{ asset('images/man-icon.png') }} class="img-circle"
                                         alt="imagen circular"> Usuarios
                                </a>
                            </div>
                            <div class="col-md-2">
                                <a href="{{ route('boosters') }}" class="btn btn-lg">
                                    <img src={{ asset('images/Transport-Interstate-Truck-icon.png') }} class="img-circle"
                                         alt="imagen circular"> Camiones
                                </a>
                            </div>
                            <div class="col-md-2">
                                <a href="" class="btn btn-lg">
                                    <img src={{ asset('images/Editing-Overview-Pages-4-icon.png') }} class="img-circle"
                                         alt="imagen circular"> Concesionarios
                                </a>
                            </div>
                        @else
                            <p>Para acceder rápidamente a editar cualquier elemento del sitio, favor de elegir
                                alguna de las opciones que ofrece el menú principal.</p>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
