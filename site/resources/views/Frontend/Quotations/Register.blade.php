@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags('Envía tus Cotizaciones'), 0, 230) }} @stop
@section('image'){{ asset('') }}@endsection
@section('content')
<main class="formularios">
    <section class="encabezado z-depth-2">
        <div class="container">
            <div class="row">
                <div class="col s12 center-align">
                    <h1>{{ $title }}</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="formulario">
        <div class="container">
            <div class="row row-sin-aire">
                <div class="titulo">
                    <h2 class="center-align white-text">Selecciona tu isuzu</h2>
                </div>
            </div>
            <div class="row row-sin-aire">
                {!!Form::Open(['url' => route('quotation.create'), 'method' => 'POST', 'class' => "col s12 l10 offset-l1", 'id' => 'formulario-enviar', 'role'=>'form'])!!}
                    {{ Form::hidden('autoresponder_id', $departament->id, array('id' => 'autoresponder_id')) }}
                    <!--//////////*****   GCLID   *****//////////-->
                    <input id="gclid" name="gclid" type="hidden" />
                    <div class="row">
                        <div class="input-field col s12 l6 offset-l3">
                            <input type="hidden"/>
                            <select multiple class="icons" name="truck[]" id="camiones">
                                <option value="" disabled>SELECCIONA EL ISUZU DE TU INTERÉS</option>
                                    @foreach($trucks as $truck)
                                        <option value="{{$truck->id}}" data-icon="{{ asset('filesUpdates/Camiones/'. $truck->name_profile) }}">
                                            {{ $truck->name }}
                                            <span class="peso">{{ $truck->loading_capacity }}</span>
                                        </option>
                                    @endforeach
                            </select>
                            <label data-error=" "></label>
                        </div>
                    </div>

                    <div class="row valign-wrapper">
                        <div class="input-field col s12 l4 valign">
                            {!!$errors->first('name','<span class="error">:message</span>')!!}
                            {!!Form::text('name', null, ['class'=>'', 'id' => 'nombre', 'placeholder' => ' '])!!}
                            <label for="nombre" class="truncate">NOMBRE<span class="error"> *</span></label>
                        </div>

                        <div class="input-field col s12 l4 valign">
                            {!!$errors->first('email','<span class="error">:message</span>')!!}
                            {!!Form::email('email', null, ['class'=>'', 'placeholder' => ' '])!!}
                            <label for="correo" class="truncate">CORREO<span class="error"> *</span></label>
                        </div>

                        <div class="input-field col s12 l2 valign">
                            {!!$errors->first('area_code','<span class="error">:message</span>')!!}
                            {!!Form::tel('area_code', null, ['class'=>'solo-numero', 'placeholder' => ' '])!!}
                            <label for="lada" class="truncate">LADA</label>
                        </div>

                        <div class="input-field col s12 l2 valign">
                            {!!$errors->first('phone','<span class="error">:message</span>')!!}
                            {!!Form::tel('phone', null, ['class'=>'solo-numero', 'placeholder' => ' '])!!}
                            <label for="telefono" class="truncate">TELÉFONO <span class="error"> *</span></label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12 l3">
                            {!!$errors->first('state_id','<div class="error">:message</div>')!!}
                            {!!Form::select('state_id', ['' => 'Seleccionar'] + $states, null, ['class'=>'select-states'])!!}                            
                            <label class="truncate">ESTADO</label>
                        </div>
                        
                        <div class="input-field col s12 l3">
                            {!!$errors->first('company_name','<span class="error">:message</span>')!!}
                            {!!Form::text('company_name', null, ['class'=>'form-control', 'placeholder' => ' '])!!}
                            <label for="empresa" class="truncate">EMPRESA</label>
                        </div>

                        <div class="input-field col s12 l3"> 
                            {!!$errors->first('bussiness_type','<span class="error">:message</span>')!!}
                            {!!Form::select('bussiness_type', \Backend::getBussiness_Type(), null, ['class'=>' '])!!}
                            <label class="truncate">TIPO DE NEGOCIO</label>
                        </div>

                        <div class="input-field col s12 l3">
                            {!!$errors->first('bussiness_office','<span class="error">:message</span>')!!}
                            {!!Form::select('bussiness_office', \Backend::getBussiness_Office(), null, ['id' => 'cargo', 'class'=>'select-filters'])!!}
                            <label class="truncate">CARGO EMPRESARIAL</label>
                        </div>
                    </div>

                    <div class="row ocultar" id="cargo-empresarial">
                        <div class="input-field col s12">
                            {!!$errors->first('other_office','<div class="error">:message</div>')!!}
                            {!!Form::text('other_office', null, ['class'=>'', 'placeholder'=>' '])!!}
                            <label class="truncate">Especifica que tipo de cargo</label>
                        </div>
                    </div>

                    

                    <div class="row">
                        <div class="input-field col s12 l6">
                            {!!Form::select('material_transport', \Backend::getMaterial_Transport(), null, ['class'=>'', 'id'=>'material'])!!}                        
                            <label class="truncate">MATERIAL QUE NECESITAS TRANSPORTAR</label>
                            {!!$errors->first('material_transport','<span class="error">:message</span>')!!}


                            <div class="row ocultar" id="material-transportar">
                                <div class="input-field col s12">
                                    {!!Form::text('other_material', null, ['class'=>'', 'placeholder'=>' '])!!}
                                    <label class="truncate">Especifica que tipo material transportaras</label>
                                    {!!$errors->first('other_material','<div class="error">:message</div>')!!}
                                </div>
                            </div>
                        </div>

                        <div class="input-field col s12 l6">
                            {!!Form::select('load_weight',\Backend::getLoad_Weight(), null, ['class'=>' '])!!}
                            <label for="cargo" class="truncate">PESO APROXIMADO DE CARGA</label>
                            {!!$errors->first('load_weight','<span class="error">:message</span>')!!}
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12 l6">
                            {!! Form::textarea('message_text', null,['class'=>'materialize-textarea', 'placeholder' => ' ']) !!}
                            <label for="mensaje" class="truncate">MENSAJE</label>
                            {!!$errors->first('message_text','<span class="error">:message</span>')!!}
                        </div>

                        <div class="input-field col s12 l6 center-align">
                            {!! Recaptcha::render() !!}
                            <button class="btn waves-effect waves-light enviar-formulario" type="submit">Enviar</button>
                        </div>
                    </div>
                {!!Form::Close()!!}
            </div>
        </div>
    </section>
</main>

@endsection

{{--<div class="container">
        <div class="panel panel-default panel-form">

            <div class="panel-body">
                {!!Form::Open(['url' => route('quotation.create'), 'method' => 'POST', 'class' => "form-horizontal", 'role'=>'form'])!!}
                {{ Form::hidden('autoresponder_id', $departament->id, array('id' => 'autoresponder_id')) }}
                <div class="form-group">
                    <ul>
                    @foreach($trucks as $truck)
                        <li>
                            <div class="col-md-2">
                                {{ Form::checkbox('truck[]', $truck->id) }} <img src="{{ asset('filesUpdates/Camiones/'. $truck->name_logo) }}" width="100px" height="100px">{{ $truck->title }}
                            </div>
                        </li>
                    @endforeach
                    </ul>
                </div>
                <div class="form-group">
                    {!!Form::Label('state_id','Estado:',['class'=>'col-md-3 control-label'])!!}
                    <div class="col-md-8">
                        {!!Form::select('state_id', ['' => 'Seleccionar'] + $states, null, ['class'=>'form-control select-states'])!!}
                        {!!$errors->first('state_id','<div class="text-danger">:message</div>')!!}
                    </div>
                </div>
                <div class="form-group">
                    {!!Form::Label('name','Nombre:',['class'=>'col-md-3 control-label'])!!}
                    <div class="col-md-8">
                        {!!Form::text('name', null, ['class'=>'form-control'])!!}
                        {!!$errors->first('name','<div class="text-danger">:message</div>')!!}
                    </div>
                </div>
                






                <div class="form-group">
                    {!!Form::Label('email', 'Correo Electrónico:', ['class'=>'col-md-3 control-label'])!!}
                    <div class="col-md-8">
                        {!!Form::text('email', null, ['class'=>'form-control'])!!}
                        {!!$errors->first('email','<div class="text-danger">:message</div>')!!}
                    </div>
                </div>



                <div class="form-group">
                    {!!Form::Label('area_code', 'Lada', ['class'=>'col-md-3 control-label'])!!}
                    <div class="col-md-8">
                        {!!Form::text('area_code', null, ['class'=>'form-control'])!!}
                        {!!$errors->first('area_code','<div class="text-danger">:message</div>')!!}
                    </div>
                </div>




                <div class="form-group">
                    {!!Form::Label('phone', 'Teléfono', ['class'=>'col-md-3 control-label'])!!}
                    <div class="col-md-8">
                        {!!Form::text('phone', null, ['class'=>'form-control'])!!}
                        {!!$errors->first('phone','<div class="text-danger">:message</div>')!!}
                    </div>
                </div>



                <div class="form-group">
                    {!!Form::Label('bussiness_office', 'Cargo del Contactante', ['class'=>'col-md-3 control-label'])!!}
                    <div class="col-md-8">
                        {!!Form::select('bussiness_office', \Backend::getBussiness_Office(), null, ['class'=>'form-control select-filters'])!!}
                        {!!$errors->first('bussiness_office','<div class="text-danger">:message</div>')!!}
                    </div>
                    <div class="col-md-5" style="display: none;" id="office">
                        {!!Form::text('other_office', null, ['class'=>'form-control'])!!}
                        {!!$errors->first('other_office','<div class="text-danger">:message</div>')!!}
                    </div>
                </div>
                <div class="form-group">
                    {!!Form::Label('bussiness_type', 'Tipo de Negocio', ['class'=>'col-md-3 control-label'])!!}
                    <div class="col-md-8">
                        {!!Form::select('bussiness_type', \Backend::getBussiness_Type(), null, ['class'=>'form-control select-filters'])!!}
                        {!!$errors->first('bussiness_type','<div class="text-danger">:message</div>')!!}
                    </div>
                </div>
                <div class="form-group">
                    {!!Form::Label('company_name', 'Nombre de la empresa', ['class'=>'col-md-3 control-label'])!!}
                    <div class="col-md-8">
                        {!!Form::text('company_name', null, ['class'=>'form-control'])!!}
                        {!!$errors->first('company_name','<div class="text-danger">:message</div>')!!}
                    </div>
                </div>


                <div class="form-group">
                    {!!Form::Label('material_transport', 'Material a Transportar', ['class'=>'col-md-3 control-label'])!!}
                    <div class="col-md-8">
                        {!!Form::select('material_transport', \Backend::getMaterial_Transport(), null, ['class'=>'form-control select-filters'])!!}
                        {!!$errors->first('material_transport','<div class="text-danger">:message</div>')!!}
                    </div>
                    <div class="col-md-5" style="display: none;" id="transport">
                        {!!Form::text('other_material', null, ['class'=>'form-control'])!!}
                        {!!$errors->first('other_material','<div class="text-danger">:message</div>')!!}
                    </div>
                </div>



                <div class="form-group">
                    {!!Form::Label('load_weight', 'Peso Aprox. de Carga', ['class'=>'col-md-3 control-label'])!!}
                    <div class="col-md-8">
                        {!!Form::select('load_weight',\Backend::getLoad_Weight(), null, ['class'=>'form-control select-filters'])!!}
                        {!!$errors->first('load_weight','<div class="text-danger">:message</div>')!!}
                    </div>
                </div>



                <div class="form-group">
                    {!!Form::Label('message_text', 'Mensaje', ['class'=>'col-md-3 control-label'])!!}
                    <div class="col-md-8">
                        {!! Form::textarea('message_text', null,['class'=>'form-control textarea-content']) !!}
                        {!!$errors->first('message_text','<div class="text-danger">:message</div>')!!}
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
        </div>
    </div>--}}
