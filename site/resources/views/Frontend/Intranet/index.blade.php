@extends('Frontend.master')
@section('title'){{ $title }}@endsection
@section('metadescription'){{ $meta_description }}@endsection
@section('image'){{ asset('') }}@endsection
@section('content')
<main class="intranet login">
    <div class="container">
        <div class="row row-sin-margen">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <h1 class="white-text">Acceso a la intranet Isuzu</h1>

                {{ Form::open(array('url' => '/isuzunet/login')) }}
                    @if(Session::has('error'))
                        <div class="alert-box success">
                            <p class="texto-rojo">{{ Session::get('error') }}</p>
                        </div>
                    @endif

                    <div class="input-field col s12 valign">
                        {!!$errors->first('email','<div class="texto-rojo">:message</div>')!!}
                        {{ Form::text('email','',array('id'=>'','class'=>'','placeholder' => '')) }}
                        <label for="name" class="truncate">Usuario <span class="error">*</span></label>
                    </div>

                    <div class="input-field col s12 valign">
                        {!!$errors->first('password','<div class="texto-rojo">:message</div>')!!}
                        {{ Form::password('password',array('class'=>'', 'placeholder' => '')) }}
                        <label for="password" class="truncate">Contraseña <span class="error">*</span></label>
                    </div>

                    <div class="row">
                        <div class="input-field col s12 center-align">
                            <button type="submit" class="btn waves-effect waves-light enviar-formulario">Enviar</button>
                        </div>                        
                    </div>   
                {{ Form::close() }}
            </div>
        </div>
    </div>
</main>
@endsection
