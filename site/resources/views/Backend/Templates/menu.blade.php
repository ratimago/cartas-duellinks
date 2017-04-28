<div class="container">
    <div class="row">
        <div class="col-sm-3 col-md-3">
            @if (!Auth::guest())
                <div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a href="/mcPanel"><img src={{ asset('images/Dashboard-icon.png') }} class="img-circle"
                                                        alt="imagen circular"> Dashboard</a>
                            </h4>
                        </div>
                    </div>
                    @if(Auth::user()->role_id == 1)
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a href="/mcPanel/usuarios"><img
                                                src={{ asset('images/man-icon.png') }} class="img-circle"
                                                alt="imagen circular"> Usuarios</a>
                                </h4>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a href="{{ route('boosters') }}"><img
                                                src={{ asset('images/Transport-Interstate-Truck-icon.png') }} class=""
                                                alt="imagen circular"> Booster packs</a>
                                </h4>
                            </div>
                        </div>


                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a href="cartas"><img
                                                src={{ asset('images/car-icon.png') }} class="img-circle"
                                                alt="imagen circular"> Cartas</a>
                                </h4>
                            </div>
                        </div>
                        <!--
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    {{--{{ route('promotions') }}--}}
                                    <a href="{{route('gallery.Promotion',['id' => 1, 'type' => 'Promotion'])}}"><img
                                                src={{ asset('images/Announcements-icon.png') }} class="img-circle"
                                                alt="imagen circular"> Promociones</a>
                                </h4>
                            </div>
                        </div>
                        -->

                    <!--
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span
                                                class="glyphicon glyphicon-th">
                            </span> Formularios</a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <table class="table">
                                        <tr>
                                            <td>
                                                <a href="{{route('autoresponders.edit', 1)}}">Formularios de
                                                    Autorespuesta</a></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="{{ route('quotations.custom', ['departament' => 'Financiamiento']) }}">Financiamiento</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="{{ route('quotations.custom', ['departament' => 'Cotizacion']) }}">Cotización</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="{{ route('quotations.custom', ['departament' => 'Contacto']) }}">Contacto</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="{{ route('jobsmarket') }}">Bolsa de Trabajo</a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        -->
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                                        <img src={{ asset('images/Editing-Overview-Pages-4-icon.png') }} class="img-circle"
                                             alt="imagen circular">
                                        Secciones</a>
                                </h4>
                            </div>
                            <div id="collapseFour" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <table class="table">
                                       {{-- <tr>
                                            <td>
                                                <img src={{ asset('images/Trash-Block-Empty-icon.png') }} class="img-circle"
                                                     alt="imagen circular">
                                                <a href="{{ route('staticmenus') }}">Manipulación de Secciones</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={{ asset('images/Trash-Block-Full-icon.png') }} class="img-circle"
                                                     alt="imagen circular">
                                                <a href="{{ route('blocks') }}">Manipulación de Subsecciones</a>
                                            </td>
                                        </tr>--}}
                                        <tr>
                                            <td>
                                                <img src={{ asset('images/Messaging-Star-icon.png') }} class="img-circle"
                                                     alt="imagen circular">
                                                <a href="{{route('staticmenus.edit',1)}}">Acerca de</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={{ asset('images/Messaging-Star-icon.png') }} class="img-circle"
                                                     alt="imagen circular">
                                                <a href="{{route('staticmenus.edit',2)}}">Aviso de Privacidad</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={{ asset('images/Messaging-Star-icon.png') }} class="img-circle"
                                                     alt="imagen circular">
                                                <a href="{{route('blocks.edit',1)}}">Home</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={{ asset('images/Messaging-Star-icon.png') }} class="img-circle"
                                                     alt="imagen circular">
                                                <a href="{{route('staticmenus.edit',3)}}">Postventa</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={{ asset('images/Messaging-Star-icon.png') }} class="img-circle"
                                                     alt="imagen circular">
                                                <a href="{{route('staticmenus.edit',4)}}">Términos y Condiciones</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={{ asset('images/Messaging-Star-icon.png') }} class="img-circle"
                                                     alt="imagen circular">
                                                <a href="{{route('staticmenus.edit',6)}}">Nosotros</a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    @endif
                    {{--<div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a href="#"><span class="glyphicon glyphicon-user">
                                </span>Estados</a>
                            </h4>
                        </div>
                    </div>--}}
<!--
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span
                                            class="glyphicon glyphicon-folder-close">
                            </span> Blog</a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in">
                            <div class="panel-body">
                                <table class="table">
                                    <tr>
                                        <td>
                                            <img src={{ asset('images/Categories-applications-education-miscellaneous-icon.png') }} class="img-circle"
                                                 alt="imagen circular"></span><a href="{{ route('categories') }}">Categorías</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={{ asset('images/App-news-icon.png') }} class="img-circle"
                                                 alt="imagen circular"></span><a href="{{ route('articles') }}">Artículos</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
-->



                </div>
            @endif
        </div>
    </div>
</div>