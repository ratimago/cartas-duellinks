@extends('Backend.Templates.layout')
@section('title') {{$title}} @stop
@section('css')
    <style>
        .custom-nav {
            margin: 0;
            border: none;
        }

        .custom-tab {
            padding: 0;
            background-color: #DA2B23;
        }

        .nav-tabs > li.active > a,
        .nav-tabs > li.active > a:hover,
        .nav-tabs > li.active > a:focus {
            background-color: #B90908;
            color: #fff;
        }

        .nav > li > a:hover,
        .nav > li > a:focus {
            background-color: #DA2B23;
            color: #fff;
        }

        .custom-tab a {
            padding: 0;
            border: none !important;
            margin: 0;
            height: 40px;
            color: #fff;
        }

        .custom-tab.active:after {
            top: 100%;
            left: 50%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
            border-color: rgba(185, 9, 8, 0);
            border-top-color: #B90908;
            border-width: 20px;
            margin-left: -20px;
        }
    </style>
@endsection
@section('content')

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs custom-nav" role="tablist">
                    @if($item->staticmenu_id != 5)
                        <li role="presentation" class="col-md-2 custom-tab"><a
                                    href="{{route('staticmenus.edit',$item->staticmenu_id)}}">Sección</a>
                        </li>
                    @endif
                    <li role="presentation" class="active col-md-2 custom-tab">
                        <a href="#javatab">
                            @if($item->title)
                                Datos
                            @else
                                Nueva Subsección
                            @endif
                        </a>
                    </li>
                    {{--@if($item->slug == 'tips-isuzu')
                        <li role="presentation" class="col-md-2 custom-tab"><a
                                    href="{{route('gallery',['id' => $item->galleries->first(), 'type' => 'Block'])}}">Bloques de Texto</a>
                        </li>
                    @else--}}
                    @if($item->galleries->first() !== null)
                        <li role="presentation" class="col-md-2 custom-tab"><a
                                    href="{{route('gallery',['id' => $item->galleries->first(), 'type' => 'Block'])}}">Galería</a>
                        </li>
                    @endif




                    {{--@endif--}}
                </ul>

                {!! $message !!}

                <div class="panel panel-default panel-form">
                    <div class="panel-body">
                        <h3 class="text-center">Configuración de la Subsección</h3>
                        {!!Form::Open(['url' => route('blocks.update',$id), 'files' => true, 'class' => "form-horizontal", 'role'=>'form'])!!}
                        <div class="form-group">
                            {!!Form::Label('staticmenu_id','Sección:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::select('staticmenu_id', ['' => 'Seleccionar'] + $menus, @$item->staticmenu_id, ['class'=>'form-control select-menus'])!!}
                                {!!$errors->first('staticmenu_id','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('name','Nombre:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('name',@$item->name,['class'=>'form-control'])!!}
                                {!!$errors->first('name','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        @if($item->slug != 'slider' && $item->slug != 'servicios')
                            <div class="form-group">
                                {!!Form::Label('title','Título:',['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::text('title',@$item->title,['class'=>'form-control'])!!}
                                    {!!$errors->first('title','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                        @endif
                        <div class="form-group">
                            {!!Form::Label('meta_description','Descripción (Redes Sociales):',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('meta_description',@$item->meta_description,['class'=>'form-control'])!!}
                                {!!$errors->first('meta_description','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        {{--&& $item->slug !='tips-isuzu'--}}
                        @if($item->slug != 'slider' && $item->slug != 'promocion' && $item->slug != 'servicios' &&
                        $item->slug != 'refacciones-isuzu')
                            <div class="form-group">
                                {!!Form::Label('subtitle','Subtítulo:',['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::text('subtitle',@$item->subtitle,['class'=>'form-control'])!!}
                                    {!!$errors->first('subtitle','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                        @endif

                        {{--&& $item->slug != 'tips-isuzu'--}}
                        @if($item->slug != 'slider')
                            <div class="form-group">
                                <label class="col-md-3 control-label">Cuerpo de la subsección</label>

                                <div class="col-md-8">
                                    {!! Form::textarea('text', @$item->text,['class'=>'form-control textarea-content']) !!}
                                    {!!$errors->first('text','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                        @endif

                        <div class="form-group">
                            <label class="col-md-3 control-label">Galerias</label>

                            <div class="col-md-8">
                                <ul>
                                    @foreach($item->galleries as $key => $item)
                                            <li><a href="/mcPanel/galeria/ver/{{ $item->id }}/Block">Galeria {{$key+1}}</a></li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>



                        <div class="form-group text-center">
                            <div class="btn-group">
                                <button type="submit" class="btn btn-success"><i
                                            class="glyphicon glyphicon-floppy-disk"></i> Guardar
                                </button>
                                {{-- <a href="{{ route('blocks') }}" class="btn btn-default"><i
                                             class="glyphicon glyphicon-arrow-left"></i> Regresar</a>--}}
                            </div>
                        </div>
                        {!!Form::Close()!!}
                        <hr>
                    </div>
                </div>

            </div>
        </div>
    </div>

@stop
@section('js')
    <script>
        $(".select-menus").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione una sección',
            no_results_text: 'No se encontraron resultados'
        });

        $(window).on('load', function(){
            tinymce.init({
                selector: 'textarea',
                height: 200,
                theme: 'modern',
                plugins: [
                    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                    'searchreplace wordcount visualblocks visualchars code fullscreen',
                    'insertdatetime media nonbreaking save table contextmenu directionality',
                    'emoticons template paste textcolor colorpicker textpattern'
                ],
                toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
                image_advtab: true,
                templates: [
                    {title: 'Test template 1', content: 'Test 1'},
                    {title: 'Test template 2', content: 'Test 2'}
                ],
                content_css: [
                    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                    '//www.tinymce.com/css/codepen.min.css'
                ]
            })
        })
    </script>
@endsection