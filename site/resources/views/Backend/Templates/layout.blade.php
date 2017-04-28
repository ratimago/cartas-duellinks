<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ asset('img/favicon.ico') }}" rel="icon" type="image/x-icon"/>

    <title>@yield('title', 'mcPanel') - Isuzu</title>

    {{--<link rel="stylesheet" href="{{ asset('plugins/bootstrap/css/bootstrap.css') }}">--}}
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="{{ asset('plugins/chosen_v1.6.2/chosen.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/Trumbowyg-master/dist/ui/trumbowyg.css') }}">
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
    <!---Opcional--->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.12/css/dataTables.bootstrap.min.css">
    {{--    <link rel="stylesheet" type="text/css" href="{{ asset('Backend/css/backend.css') }}" />
        <link rel="stylesheet" type="text/css" href="{{ asset('Backend/css/style.css') }}" />--}}


    <!-- Fonts -->
    <link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    @yield('css')
</head>
<body class="hold-transition skin-blue sidebar-mini">

<div class="row">
    <div class="col-md-12">
        @include('Backend.Templates.header')
    </div>
    <div class="col-md-12">
        @include('Backend.Templates.errors')
    </div>
</div>
<div class="row">
    <div class="col-md-2">
        @include('Backend.Templates.menu')
    </div>
    <div class="col-md-10">@yield('content')</div>
</div>
<div class="row">
    <div class="col-md-12">
        <footer>
            <div class="container">
                <div class="row">
                    <hr>
                    <div class="col-lg-12">
                        <div class="col-md-8">
                            <a target="_blank" href="/">Ir al sitio</a> | <a target="_blank" href="https://www.masclicks.com.mx/">Desarrollado por
                                Masclicks</a>
                        </div>
                        <div class="col-md-4">
                            <p class="muted pull-right">© 2016 Isuzu. Derechos Reservados</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>


{{--<script src="{{asset('plugins/jquery/jquery-3.1.1.js')}}"></script>
<script src="{{asset('plugins/bootstrap/js/bootstrap.js')}}"></script>--}}
<!-- Scripts -->
<script src="{{ asset('//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js') }}"></script>
<script src="{{ asset('//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js') }}"></script>
<script src="{{ asset('Backend/vendor/bootstrap/bootstrap.min.js') }}"></script>

<script src="{{asset('plugins/chosen_v1.6.2/chosen.jquery.js')}}"></script>
<script src="{{asset('plugins/Trumbowyg-master/dist/trumbowyg.js')}}"></script>
<!-- TinyMCE -->
<script src="{{ asset('Backend/vendor/tinymce/tinymce.min.js') }}"></script>
<!-- /TinyMCE -->
<!-- Tags -->
<script src="{{ asset('Backend/vendor/tags/jquery.tagsinput.js') }}"></script>
<!-- /Tags -->

<!--/////***  Color picker  ***/////-->
<script src="{{ asset('Backend/vendor/colorPicker/js/bootstrap-colorpicker.min.js') }}"></script>

@if(\Request::route()->getName() == 'gallery' || \Request::route()->getName() == 'promotions' || \Request::route()->getName() == 'sections.edit' || \Request::route()->getName() == 'downloads.edit')
{{-- Scripts necesarios para la carga de archivos --}}
        <!-- The jQuery UI widget factory, can be omitted if jQuery UI is already included -->
<script src="{{ asset('Backend/vendor/jquery-file-upload/js/vendor/jquery.ui.widget.js') }}"></script>
<!-- The Templates plugin is included to render the upload/download listings -->
<script src="{{ asset('//blueimp.github.io/JavaScript-Templates/js/tmpl.min.js') }}"></script>
<!-- The Load Image plugin is included for the preview images and image resizing functionality -->
<script src="{{ asset('//blueimp.github.io/JavaScript-Load-Image/js/load-image.all.min.js') }}"></script>
<!-- The Canvas to Blob plugin is included for image resizing functionality -->
<script src="{{ asset('//blueimp.github.io/JavaScript-Canvas-to-Blob/js/canvas-to-blob.min.js') }}"></script>

<!-- blueimp Gallery script -->
<script src="{{ asset('//blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js') }}"></script>
<!-- The Iframe Transport is required for browsers without support for XHR file uploads -->
<script src="{{ asset('Backend/vendor/jquery-file-upload/js/jquery.iframe-transport.js') }}"></script>
<!-- The basic File Upload plugin -->
<script src="{{ asset('Backend/vendor/jquery-file-upload/js/jquery.fileupload.js') }}"></script>
<!-- The File Upload processing plugin -->
<script src="{{ asset('Backend/vendor/jquery-file-upload/js/jquery.fileupload-process.js') }}"></script>
<!-- The File Upload image preview & resize plugin -->
<script src="{{ asset('Backend/vendor/jquery-file-upload/js/jquery.fileupload-image.js') }}"></script>
<!-- The File Upload audio preview plugin -->
<script src="{{ asset('Backend/vendor/jquery-file-upload/js/jquery.fileupload-audio.js') }}"></script>
<!-- The File Upload video preview plugin -->
<script src="{{ asset('Backend/vendor/jquery-file-upload/js/jquery.fileupload-video.js') }}"></script>
<!-- The File Upload validation plugin -->
<script src="{{ asset('Backend/vendor/jquery-file-upload/js/jquery.fileupload-validate.js') }}"></script>
<!-- The File Upload user interface plugin -->
<script src="{{ asset('Backend/vendor/jquery-file-upload/js/jquery.fileupload-ui.js') }}"></script>
@endif

<script src="{{ asset('Backend/js/sortable/sortable.js') }}"></script>
<!-- Funciones -->
<script src="{{ asset('Backend/js/functions.js') }}"></script>
<!-- Recaptcha -->
<script src='https://www.google.com/recaptcha/api.js'></script>
@yield('js')
</body>
</html>
