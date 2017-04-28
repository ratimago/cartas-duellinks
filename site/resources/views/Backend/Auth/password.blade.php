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
	<div class="container">
		<div class="row">
			<div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
				<div class="panel panel-info">
					<div class="panel-heading">
						<div class="panel-title">Recupera tu Contraseña</div>
					</div>
					<div class="panel-body">
						{!! Form::open(['route' => 'user.reset', 'method' => 'post', 'class' => 'form-horizontal', 'role' => 'form']) !!}
						<div class="form-group">
							<label class="col-md-3 control-label">Correo Electrónico</label>
							<div class="col-md-offset-1 col-md-7">
								{!! Form::text('email', null,['class'=>"form-control"]) !!}
							</div>
						</div>

						<hr>

						<div class="form-group" align="center">
							<div class="btn-group">
								<button type="submit" class="btn btn-primary">
									<span class="glyphicon glyphicon-envelope"></span> Enviar
								</button>
								<a href="{{ url('mcPanel') }}" class="btn btn-default">
									<span class="glyphicon glyphicon-arrow-left"></span> Regresar
								</a>
							</div>
						</div>

						{!! Form::close() !!}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

</body>
<footer>

</footer>
</html>
