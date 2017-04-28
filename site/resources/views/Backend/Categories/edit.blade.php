@extends('Backend.Templates.layout')

@section('title') {{$title}} @stop

@section('content')

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">

                {!! $message !!}

                <div class="panel panel-default panel-form">
                    <div class="panel-body">
                        <h3 class="text-center">Categorías</h3>
                        {!!Form::Open(['url' => route('categories.update',$id), 'files' => true, 'class' => "form-horizontal", 'role'=>'form'])!!}
                        <div class="form-group">
                            {!!Form::Label('name','Nombre:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('name',@$item->name,['class'=>'form-control'])!!}
                                {!!$errors->first('name','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('title','Título:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('title',@$item->title,['class'=>'form-control'])!!}
                                {!!$errors->first('title','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('meta_description','Descripción (Redes Sociales):',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('meta_description',@$item->meta_description,['class'=>'form-control'])!!}
                                {!!$errors->first('meta_description','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <hr>
                        <div class="form-group text-center">
                            <div class="btn-group">
                                <button type="submit" class="btn btn-success"><i
                                            class="glyphicon glyphicon-floppy-disk"></i> Guardar
                                </button>
                                <a href="{{ route('categories') }}" class="btn btn-default"><i
                                            class="glyphicon glyphicon-arrow-left"></i> Regresar</a>
                            </div>
                        </div>
                        {!!Form::Close()!!}
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop