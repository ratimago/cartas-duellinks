<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ asset('img/favicon.ico') }}" rel="icon" type="image/x-icon"/>

    <title>@yield('title', 'Isuzu') | Login</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    {{-- Cargador de archivos --}}
    <link rel="stylesheet" href="//blueimp.github.io/Gallery/css/blueimp-gallery.min.css">
    <link rel="stylesheet" href="{{asset('Backend/vendor/jquery-file-upload/css/jquery.fileupload.css')}}">
    <link rel="stylesheet" href="{{asset('Backend/vendor/jquery-file-upload/css/jquery.fileupload-ui.css')}}">
    <noscript>
        <link rel="stylesheet" href="{{asset('Backend/vendor/jquery-file-upload/css/jquery.fileupload-noscript.css')}}">
    </noscript>
    <noscript>
        <link rel="stylesheet"
              href="{{asset('Backend/vendor/jquery-file-upload/css/jquery.fileupload-ui-noscript.css')}}">
    </noscript>
    {{--------------------------}}
    <link rel="stylesheet" type="text/css" href="{{ asset('Backend/vendor/tags/jquery.tagsinput.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('Backend/vendor/jquery-ui/jquery-ui.css') }}"/>
    <!--/////***  Color picker  ***/////-->
    <link rel="stylesheet" type="text/css"
          href="{{ asset('Backend/vendor/colorPicker/css/bootstrap-colorpicker.min.css') }}"/>

    {{--<link rel="stylesheet" type="text/css" href="{{ asset('Backend/css/backend.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('Backend/css/style.css') }}" />--}}
    <link rel="stylesheet" type="text/css" href="{{ asset('Backend/css/menu1.css') }}"/>

    <!-- Fonts -->
    <link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

<div class="container">
    <div class="col-md-12">
        @include('Backend.Templates.errors')
    </div>
    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel panel-info">
            <div class="panel-heading">
                <div class="panel-title">Entrada al Panel de Administracion Isuzu</div>
                <div style="float:right; font-size: 80%; position: relative; top:-10px"><a
                            href="{{ route('user.recovery') }}">Olvidaste tu Contraseña?</a>
                </div>
            </div>

            <div style="padding-top:30px; padding-left: 30px; padding-right: 30px" class="panel-body">
                <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
                <form class="form-horizontal" role="form" method="POST" action="{{ route('user.access') }}"
                      id="loginform">
                    <input type="hidden" name="_token" value="{{{ csrf_token() }}}">

                    <div style="margin-bottom: 25px" class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                        <input id="login-username" type="text" class="form-control" name="email"
                               value="{{ old('email') }}"
                               placeholder="email">
                    </div>

                    <div style="margin-bottom: 25px" class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                        <input id="login-password" type="password" class="form-control" name="password"
                               placeholder="password">
                    </div>

                    <div class="row">
                        <div class="col-xs-6">
                            <div class="input-group">
                                <div class="checkbox">
                                    <label>
                                        <input id="login-remember" type="checkbox" name="remember" value="1"> Recuérdame
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <div style="margin-top:10px" class="form-group">
                                <div class="pull-right"  style="padding-right: 20px">
                                    <button type="submit" class="btn btn-primary">
                                        <span class="glyphicon glyphicon-off"></span> Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</body>
<footer>

</footer>
</html>