@extends('Backend.Templates.layout')

@section('title') {{$title}} @stop

@section('content')

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">

                {!! $message !!}

                <div class="panel panel-default panel-form">
                    <div class="panel-body">
                        <h3 class="text-center">Usuario</h3>
                        {!!Form::Open(['url' => route('users.update',$id), 'files' => true, 'class' => "form-horizontal", 'role'=>'form'])!!}
                        <div class="form-group">
                            {!!Form::Label('name','Nombre:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('name',@$item->name,['class'=>'form-control'])!!}
                                {!!$errors->first('name','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('email','Correo electrónico:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::email('email',@$item->email,['class'=>'form-control'])!!}
                                {!!$errors->first('email','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('password','Contraseña:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::password('password', ['class'=>'form-control'])!!}
                                {!!$errors->first('password','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('password_confirmation','Confirmar contraseña:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::password('password_confirmation', ['class'=>'form-control'])!!}
                                {!!$errors->first('password_confirmation','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>


                            @if($referencia == 'intranet')

                                <input type="hidden" name="role_id" value="3">
                            @else

                            <div class="form-group">
                                {!!Form::Label('role_id','Tipo de usuario:',['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::select('role_id', ['' => 'Seleccionar'] + $roles, @$item->role_id, ['class'=>'form-control user-role'])!!}
                                    {!!$errors->first('role_id','<div class="text-danger">:message</div>')!!}
                                </div>

                            </div>
                            @endif


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
                                <a href="{{ route('users') }}" class="btn btn-default"><i
                                            class="glyphicon glyphicon-arrow-left"></i> Regresar</a>
                                @if(empty($id))
                                    {{ Form::reset('Limpiar', ['class' => 'btn btn-default']) }}
                                @endif
                            </div>
                        </div>
                        {!!Form::Close()!!}
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop