@extends('Backend.Templates.layout')
@section('title') {{$title}} @stop
@section('css')
    <style>
        .custom-nav{
            margin: 0;
            border: none;
        }

        .custom-tab{
            padding: 0;
            background-color: #DA2B23;
        }

        .nav-tabs>li.active>a,
        .nav-tabs>li.active>a:hover,
        .nav-tabs>li.active>a:focus {
            background-color: #B90908;
            color: #fff;
        }

        .nav>li>a:hover,
        .nav>li>a:focus {
            background-color: #DA2B23;
            color: #fff;
        }

        .custom-tab a{
            padding: 0;
            border: none !important;
            margin: 0;
            height: 40px;
            color: #fff;
        }

        .custom-tab.active:after{
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
                   {{-- <li role="presentation" class="col-md-2 custom-tab"><a href="{{ route('promotions') }}">Promociones</a></li>--}}
                    <li role="presentation" class="active col-md-2 custom-tab">
                        <a href="#javatab">
                            @if($item->title)
                                Datos
                            @else
                                Nueva Promoción
                            @endif
                        </a>
                    </li>
                    @if($item->galleries->first() !== null)
                    <li role="presentation" class="col-md-2 custom-tab"><a href="{{route('gallery',['id' => $item->galleries->first(), 'type' => 'Promotion'])}}">Galería</a></li>
                    @endif
                </ul>

                {!! $message !!}

                <div class="panel panel-default panel-form">
                    <div class="panel-body">
                        <h3 class="text-center">Promoción</h3>
                        {!!Form::Open(['url' => route('promotions.update',$id), 'files' => true, 'class' => "form-horizontal", 'role'=>'form'])!!}
                        <div class="form-group">
                            {!!Form::Label('name','Título:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('title',@$item->title,['class'=>'form-control'])!!}
                                {!!$errors->first('title','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('subtitle','Subtítulo:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('subtitle',@$item->subtitle,['class'=>'form-control'])!!}
                                {!!$errors->first('subtitle','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('meta_description','Descripción (Redes Sociales):',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('meta_description',@$item->meta_description,['class'=>'form-control'])!!}
                                {!!$errors->first('meta_description','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('active', 'Visible:',['class'=>'control-label col-md-3'])!!}
                            <div class="col-md-8">
                                {!!Form::checkbox('active', '1', !empty($item->active))!!}
                            </div>
                        </div>
                        <hr>
                        <div class="form-group text-center">
                            <div class="btn-group">
                                <button type="submit" class="btn btn-success"><i
                                            class="glyphicon glyphicon-floppy-disk"></i> Guardar
                                </button>
                                {{--<a href="{{ route('promotions') }}" class="btn btn-default"><i
                                            class="glyphicon glyphicon-arrow-left"></i> Regresar</a>--}}
                            </div>
                        </div>
                        {!!Form::Close()!!}
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop