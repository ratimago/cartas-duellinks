@extends('Frontend.master')
@section('content')
<main class="formularios">
    <section class="encabezado z-depth-2">
        <div class="container">
            <div class="row">
                <div class="col s12 center-align">
                    <h1>Bolsa de trabajo</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="formulario">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <p class="white-text center-align">Únete al equipo de trabajo Isuzu, siempre estamos buscando nuevos talentos.<br>Llena el siguiente formulario y nosotros nos pondremos en contacto contigo.</p>
                </div>
            </div>
            
            <div class="row row-sin-aire">
                {!!Form::Open(['url' => route('trabajo.create'), 'method' => 'POST', 'class' => "col s12 l10 offset-l1", 'id' => 'bolsa-trabajo', 'role'=>'form'])!!}
                    {{ Form::hidden('autoresponder_id', $departament->id, array('id' => 'autoresponder_id')) }}
                    <input id="gclid" name="gclid" type="hidden" />

                    <div class="row valign-wrapper">
                        <div class="input-field col s12 l4 valign">
                            {!!$errors->first('name','<div class="error">:message</div>')!!}
                            {!!Form::text('name', null, ['class'=>' ', 'placeholder' => ' '])!!}
                            <label for="name" class="truncate">Nombre completo <span class="error">*</span></label>
                        </div>

                        <div class="input-field col s12 l4 valign">
                            {!!$errors->first('email','<div class="error">:message</div>')!!}
                            {!!Form::email('email', null, ['class'=>'', 'placeholder' => ' '])!!}
                            <label for="name" class="truncate">Correo Electrónico <span class="error">*</span></label>
                        </div>

                        <div class="input-field col s12 l4 valign">
                            {!!$errors->first('phone','<div class="error">:message</div>')!!}
                            {!!Form::tel('phone', null, ['class'=>'solo-numero', 'placeholder' => ' '])!!}
                            <label for="phone" class="truncate">Teléfono <span class="error">*</span></label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12 l2">
                            {!!$errors->first('age','<div class="error">:message</div>')!!}
                            {!!Form::number('age', null, ['class'=>'solo-numero', 'placeholder' => ' '])!!}
                            <label for="edad" class="truncate">Edad</label>
                        </div>

                        <div class="input-field col s12 l7">
                            {!!$errors->first('address','<div class="error">:message</div>')!!}
                            {!!Form::text('address', null, ['class'=>'', 'placeholder' => ' '])!!}
                            <label for="domicilio" class="truncate">Domicilio</label>
                        </div>

                        <div class="input-field col s12 l3">
                            {!!$errors->first('city','<div class="error">:message</div>')!!}
                            {!!Form::text('city', null, ['class'=>'', 'placeholder' => ' '])!!}
                            <label for="city" class="truncate">Ciudad</label>
                        </div>                      
                    </div> 

                    <div class="row">
                        <div class="input-field col s12 l4">
                            {!!$errors->first('state_id','<div class="error">:message</div>')!!}
                            {!!Form::select('state_id', ['' => 'Seleccionar'] + $states, null, ['class'=>'', 'placeholder' => ' '])!!}
                            <label for="state_id" class="truncate">Estado</label>
                        </div>
                        
                        <div class="input-field col s12 l4">
                            {!!$errors->first('change_home','<div class="error">:message</div>')!!}
                            {!!Form::select('change_home',['' => 'Seleccionar','Si'=>'Si','No'=>'No'], null, ['class'=>''])!!}
                            <label for="change_home" class="truncate">Puede cambiar de residencia</label>
                        </div>  

                        <div class="input-field col s12 l4">
                            {!!$errors->first('civil_status','<div class="error">:message</div>')!!}
                            {!!Form::select('civil_status',['' => 'Seleccionar','Soltero'=>'Soltero','Casado'=>'Casado','Divorciado'=>'Divorciado','Viudo'=>'Viudo'], null, ['class'=>''])!!}
                            <label for="civil_status" class="truncate">Estado Civil</label>
                        </div>
                    </div>  

                    <div class="row">
                        <div class="input-field col s12 l6">
                            {!!$errors->first('experience','<div class="error">:message</div>')!!}
                            {!! Form::textarea('experience', null,['class'=>'materialize-textarea', 'placeholder' => ' ']) !!}
                             <label for="experience" class="truncate">Experiencia</label>
                        </div>
                        
                        <div class="input-field col s12 l6">
                            {!!$errors->first('reason_work','<div class="error">:message</div>')!!}
                            {!! Form::textarea('reason_work', null, ['class'=>'materialize-textarea', 'placeholder' => ' ']) !!}
                            <label for="reason_work" class="truncate">¿Por qué te gustaría trabajar en Isuzu?</label>
                        </div>
                    </div>    

                    <div class="row">
                        <div class="input-field col s12 center-align">
                            <input type="hidden" class="hiddenRecaptcha required" name="hiddenRecaptcha" id="hiddenRecaptcha"> 
                            {!! Recaptcha::render() !!} 
                            <button type="submit" class="btn waves-effect waves-light enviar-formulario">Enviar</button>
                        </div>                        
                    </div>                  
                {!!Form::Close()!!}
            </div>
        </div>
    </section>
</main>
@endsection


    {{--<main class="privacidad_page">
        <div class="container">
            {!!Form::Open(['url' => route('trabajo.create'), 'method' => 'POST', 'class' => "form-horizontal", 'role'=>'form'])!!}
            {{ Form::hidden('autoresponder_id', $departament->id, array('id' => 'autoresponder_id')) }}
            <!--<div class="form-group">
                {!!Form::Label('state_id','Estado:',['class'=>'col-md-3 control-label'])!!}
                <div class="col-md-8">
                    {!!Form::select('state_id', ['' => 'Seleccionar'] + $states, null, ['class'=>'form-control select-states'])!!}
                    {!!$errors->first('state_id','<div class="text-danger">:message</div>')!!}
                </div>
            </div>-->
            <!--<div class="form-group">
                {!!Form::Label('name','Nombre:',['class'=>'col-md-3 control-label'])!!}
                <div class="col-md-8">
                    {!!Form::text('name', null, ['class'=>'form-control'])!!}
                    {!!$errors->first('name','<div class="text-danger">:message</div>')!!}
                </div>
            </div>-->
            <!--<div class="form-group">
                {!!Form::Label('age', 'Edad', ['class'=>'col-md-3 control-label'])!!}
                <div class="col-md-8">
                    {!!Form::text('age', null, ['class'=>'form-control'])!!}
                    {!!$errors->first('age','<div class="text-danger">:message</div>')!!}
                </div>
            </div>-->
            <!--<div class="form-group">
                {!!Form::Label('phone', 'Teléfono', ['class'=>'col-md-3 control-label'])!!}
                <div class="col-md-8">
                    {!!Form::text('phone', null, ['class'=>'form-control'])!!}
                    {!!$errors->first('phone','<div class="text-danger">:message</div>')!!}
                </div>
            </div>-->
            <!--<div class="form-group">
                {!!Form::Label('email', 'Correo Electrónico:', ['class'=>'col-md-3 control-label'])!!}
                <div class="col-md-8">
                    {!!Form::text('email', null, ['class'=>'form-control'])!!}
                    {!!$errors->first('email','<div class="text-danger">:message</div>')!!}
                </div>
            </div>-->
            <!--<div class="form-group">
                {!!Form::Label('address', 'Domicilio:', ['class'=>'col-md-3 control-label'])!!}
                <div class="col-md-8">
                    {!!Form::text('address', null, ['class'=>'form-control'])!!}
                    {!!$errors->first('address','<div class="text-danger">:message</div>')!!}
                </div>
            </div>-->
            <!--<div class="form-group">
                {!!Form::Label('city', 'Ciudad:', ['class'=>'col-md-3 control-label'])!!}
                <div class="col-md-8">
                    {!!Form::text('city', null, ['class'=>'form-control'])!!}
                    {!!$errors->first('city','<div class="text-danger">:message</div>')!!}
                </div>
            </div>-->
            <!--<div class="form-group">
                {!!Form::Label('change_home', 'Puede Cambiar de Residencia', ['class'=>'col-md-3 control-label'])!!}
                               <div class="col-md-8">
                                    {!!Form::text('change_home', null, ['class'=>'form-control'])!!}
                                    {!!$errors->first('change_home','<div class="text-danger">:message</div>')!!}
                                </div>
                <div class="col-md-4">
                    <div class="radio">
                        {!! Form::label('change_home', 'Si') !!}
                        {!! Form::radio('change_home', 'Si', true, ['id' => 'radio1']) !!}
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="radio">
                        {!! Form::label('change_home', 'No') !!}
                        {!! Form::radio('change_home', 'No', false, ['id' => 'radio2']) !!}
                    </div>
                </div>
            </div>-->
           <!-- <div class="form-group">
                {!!Form::Label('civil_status', 'Estado Civil', ['class'=>'col-md-3 control-label'])!!}
                <div class="col-md-8">
                    {!!Form::text('civil_status', null, ['class'=>'form-control'])!!}
                    {!!$errors->first('civil_status','<div class="text-danger">:message</div>')!!}
                </div>
                <div class="col-md-8">
                    {!!Form::select('civil_status',['Soltero'=>'Soltero','Casado'=>'Casado','Divorciado'=>'Divorciado','Viudo'=>'Viudo'], null, ['class'=>'form-control'])!!}
                    {!!$errors->first('civil_status','<div class="text-danger">:message</div>')!!}
                </div>
            </div>-->
            <!--<div class="form-group">
                <label class="col-md-3 control-label">Experiencia</label>

                <div class="col-md-8">
                    {!! Form::textarea('experience', null,['class'=>'form-control textarea-experiencie']) !!}
                    {!!$errors->first('experience','<div class="text-danger">:message</div>')!!}
                </div>
            </div>-->
            <div class="form-group">
                <label class="col-md-3 control-label">Porque te gustaría trabajar en isuzu</label>

                <div class="col-md-8">
                    {!! Form::textarea('reason_work', null, ['class'=>'form-control textarea-reason_work']) !!}
                    {!!$errors->first('reason_work','<div class="text-danger">:message</div>')!!}
                </div>
            </div>
            <hr>
            <div class="form-group text-center">
                <div class="btn-group">
                    <button type="submit" class="btn btn-success"><i
                                class="glyphicon glyphicon-floppy-disk"></i> Enviar
                    </button>
                </div>
            </div>
            {!! Recaptcha::render() !!}
            {!!Form::Close()!!}
        </div>
    </main>--}}

