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

                <ul class="nav nav-tabs custom-nav" role="tablist">
                    <li role="presentation"
                        class="col-md-2 custom-tab {{ (@$active == 'financiamiento') ? 'active' : '' }}">
                        <a href="{{route('autoresponders.edit', 1)}}javatab">Financiamiento</a>
                    </li>
                    <li role="presentation"
                        class="col-md-2 custom-tab {{ (@$active == 'cotizacion') ? 'active' : '' }}">
                        <a href="{{route('autoresponders.edit', 2)}}">Cotización</a>
                    </li>
                    <li role="presentation" class="col-md-2 custom-tab {{ (@$active == 'contacto') ? 'active' : '' }}">
                        <a href="{{route('autoresponders.edit', 3)}}">Contacto</a>
                    </li>
                    <li role="presentation"
                        class="col-md-2 custom-tab {{ (@$active == 'bolsa-de-trabajo') ? 'active' : '' }}">
                        <a href="{{route('autoresponders.edit', 4)}}">Bolsa de Trabajo</a>
                    </li>
                </ul>

                {!! $message !!}

                <div class="panel panel-default panel-form">
                    <div class="panel-body">
                        <h3 class="text-center">Configuración de Mensaje de Autorespuesta</h3>
                        {!!Form::Open(['url' => route('autoresponders.update',$id), 'files' => true, 'class' => "form-horizontal", 'role'=>'form'])!!}
                        <div class="form-group">
                            {!!Form::Label('section','Sección o Página Correspondiente:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('section',@$item->section,['class'=>'form-control'])!!}
                                {!!$errors->first('section','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('departament','Departamento:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('departament',@$item->departament,['class'=>'form-control'])!!}
                                {!!$errors->first('departament','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('issue','Asunto:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('issue',@$item->issue,['class'=>'form-control'])!!}
                                {!!$errors->first('issue','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('addressee_mail','Destinatarios:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                <label class="label label-default">Separe los destinatarios con comas (,)</label>
                                {!!Form::text('addressee_mail',@$item->addressee_mail,['class'=>'form-control'])!!}
                                {!!$errors->first('addressee_mail','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('message_text','Texto:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!! Form::textarea('message_text', @$item->message_text,['class'=>'form-control textarea-content']) !!}
                                {!!$errors->first('message_text','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        {{--<div class="form-group">
                            {!!Form::Label('text_button','Texto del Botón:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('text_button',@$item->text_button,['class'=>'form-control'])!!}
                                {!!$errors->first('text_button','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>--}}
                        <hr>
                        <div class="form-group text-center">
                            <div class="btn-group">
                                <button type="submit" class="btn btn-success"><i
                                            class="glyphicon glyphicon-floppy-disk"></i> Guardar
                                </button>
                                {{-- <a href="{{ route('autoresponders') }}" class="btn btn-default"><i
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
@section('js')
    <script>
        $('.textarea-content').trumbowyg({
            removeformatPasted: true
        });
    </script>
@endsection