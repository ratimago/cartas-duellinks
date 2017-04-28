@extends('Backend.Templates.layout')
@section('css')
    <style>
        /* ==========================================================================
   7. How It Works Section
========================================================================== */
        .how-it-works {
            /*background: #f5f5fa;*/
            padding-bottom: 10px;
        }

        .board {
            /*width: 75%;
            margin: 60px auto;
            margin-bottom: 0;
            box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/
        }

        .board .nav-tabs {
            position: relative;
            /* border-bottom: 0; */
            /* width: 80%; */
            margin: 20px auto;
            margin-bottom: 0;
            box-sizing: border-box;

        }

        .board > div.board-inner > .nav-tabs {
            border: none;
        }

        p.narrow {
            width: 60%;
            margin: 10px auto;
        }

        .liner {
            height: 2px;
            background: #ddd;
            position: absolute;
            width: 80%;
            margin: 0 auto;
            left: 0;
            right: 0;
            top: 50%;
            z-index: 1;
        }

        .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {
            color: #555555;
            cursor: default;
            /* background-color: #ffffff; */
            border: 0;
            border-bottom-color: transparent;
            outline: 0;
        }

        span.round-tabs {
            width: 30px;
            height: 30px;
            line-height: 50px;
            display: inline-block;
            border-radius: 100px;
            background: white;
            z-index: 2;
            position: absolute;
            left: 0;
            text-align: center;
            font-size: 25px;
        }

        span.round-tabs.one {
            border: 2px solid #ddd;
            color: #ddd;
        }

        li.active span.round-tabs.one, li.active span.round-tabs.two, li.active span.round-tabs.three, li.active span.round-tabs.four, li.active span.round-tabs.five {
            background: #69cb95 !important;
            border: 2px solid #69cb95;
            color: #fff;
        }

        span.round-tabs.two {
            border: 2px solid #ddd;
            color: #ddd;
        }

        span.round-tabs.three {
            border: 2px solid #ddd;
            color: #ddd;
        }

        span.round-tabs.four {
            border: 2px solid #ddd;
            color: #ddd;
        }

        span.round-tabs.five {
            border: 2px solid #ddd;
            color: #ddd;
        }

        .nav-tabs > li.active > a span.round-tabs {
            background: #fafafa;
        }

        .nav-tabs > li {
            width: 20%;
        }

        .nav-tabs > li a {
            width: 30px;
            height: 30px;
            margin: 10px auto;
            border-radius: 100%;
            padding: 0;
        }

        .nav-tabs > li a:hover {
            background: transparent;
        }

        .tab-content {
        }

        .tab-pane {
            position: relative;
            padding-top: 50px;
        }

        .btn-outline-rounded {
            padding: 10px 40px;
            margin: 20px 0;
            border: 2px solid transparent;
            border-radius: 25px;
        }

        .btn.green {
            background-color: #69cb95;
            /*border: 2px solid #5cb85c;*/
            color: #ffffff;
        }

        @media ( max-width: 585px ) {

            .board {
                width: 90%;
                height: auto !important;
            }

            span.round-tabs {
                font-size: 16px;
                width: 20px;
                height: 20px;
                line-height: 50px;
            }

            .tab-content .head {
                font-size: 20px;
            }

            .nav-tabs > li a {
                width: 50px;
                height: 50px;
                line-height: 20px;
            }

            li.active:after {
                content: " ";
                position: absolute;
                left: 35%;
            }

            .btn-outline-rounded {
                padding: 12px 20px;
            }
        }
    </style>
    @endsection
    @section('title') {{$title}} @stop

    @section('content')
            <!-- How it Works section -->
    <section class="section how-it-works" id="how-it-works">
        <div class="container">
            <div class="row text-center">
                <div class="how-it-works-heading">
                    <h2 class="section-title">Información enviada a Bolsa de Trabajo</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    {!! $message !!}
                            <!-- <h2>Welcome to IGHALO!<sup>™</sup></h2>-->
                    <div class="board-inner">
                        <ul class="nav nav-tabs" id="myTab">
                            <div class="liner"></div>
                            <li class="active">
                                <a href="#home" aria-controls="home" role="tab" data-toggle="tab"
                                   title="User Experience">
                      <span class="round-tabs one">
                              <i class="icon icon-profile-male"></i>
                      </span>
                                </a></li>

                            <li><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" title="Sketch">
                     <span class="round-tabs two">
                         <i class="icon icon-pencil"></i>
                     </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="home">

                            <h3 class="head text-center">Datos Personales</h3>

                            {!!Form::Open(['url' => route('jobsmarket.update',$id), 'files' => true, 'class' => "form-horizontal", 'role'=>'form'])!!}
                            {{--<div class="form-group">
                                 {!!Form::Label('autoresponder_id','Departamento:',['class'=>'col-md-3 control-label'])!!}
                                 <div class="col-md-8">
                                     {!!Form::select('autoresponder_id', ['' => 'Seleccionar'] + $autoresponders, @$item->autoresponder_id, ['class'=>'form-control select-departaments'])!!}
                                     {!!$errors->first('autoresponder_id','<div class="text-danger">:message</div>')!!}
                                 </div>
                             </div>--}}
                            <div class="form-group">
                                {!!Form::Label('state_id','Estado:',['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::select('state_id', ['' => 'Seleccionar'] + $states, @$item->state_id, ['class'=>'form-control select-states'])!!}
                                    {!!$errors->first('state_id','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                            <div class="form-group">
                                {!!Form::Label('name','Nombre:',['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::text('name', @$item->name, ['class'=>'form-control'])!!}
                                    {!!$errors->first('name','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                            <div class="form-group">
                                {!!Form::Label('age', 'Edad', ['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::text('age', @$item->age, ['class'=>'form-control'])!!}
                                    {!!$errors->first('age','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                            <div class="form-group">
                                {!!Form::Label('phone', 'Teléfono', ['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::text('phone', @$item->phone, ['class'=>'form-control'])!!}
                                    {!!$errors->first('phone','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                            <div class="form-group">
                                {!!Form::Label('email', 'Correo Electrónico:', ['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::text('email', @$item->email, ['class'=>'form-control'])!!}
                                    {!!$errors->first('email','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                            <div class="form-group">
                                {!!Form::Label('address', 'Domicilio:', ['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::text('address', @$item->address, ['class'=>'form-control'])!!}
                                    {!!$errors->first('address','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                            <div class="form-group">
                                {!!Form::Label('city', 'Ciudad:', ['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::text('city', @$item->city, ['class'=>'form-control'])!!}
                                    {!!$errors->first('city','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                            {!!Form::Close()!!}
                        </div>
                        <div class="tab-pane fade" id="profile">
                            <h3 class="head text-center">Datos Adicionales</h3>
                            {!!Form::Open(['url' => route('jobsmarket.update',$id), 'files' => true, 'class' => "form-horizontal", 'role'=>'form'])!!}

                            <div class="form-group">
                                {!!Form::Label('change_home', 'Puede Cambiar de Residencia', ['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::text('change_home', @$item->change_home, ['class'=>'form-control'])!!}
                                    {!!$errors->first('change_home','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                            <div class="form-group">
                                {!!Form::Label('civil_status', 'Estado Civil', ['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::text('civil_status', @$item->civil_status, ['class'=>'form-control'])!!}
                                    {!!$errors->first('civil_status','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label">Experiencia</label>

                                <div class="col-md-8">
                                    {!! Form::textarea('experience', @$item->experience,['class'=>'form-control textarea-experiencie']) !!}
                                    {!!$errors->first('experience','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-3 control-label">Porque te gustaría trabajar en isuzu</label>

                                <div class="col-md-8">
                                    {!! Form::textarea('reason_work', @$item->reason_work,['class'=>'form-control textarea-reason_work']) !!}
                                    {!!$errors->first('reason_work','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>

                            {!!Form::Close()!!}
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="form-group text-center">
                    <div class="btn-group">
                        {{--                                <button type="submit" class="btn btn-success"><i
                                                                    class="glyphicon glyphicon-floppy-disk"></i> Guardar
                                                        </button>--}}
                        <a href="{{ route('jobsmarket') }}" class="btn btn-default"><i
                                    class="glyphicon glyphicon-arrow-left"></i> Regresar</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

@stop
@section('js')
    <script>
        $(".select-departaments").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione un departamento',
            no_results_text: 'No se encontraron resultados'
        });

        $(".select-states").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione un estado',
            no_results_text: 'No se encontraron resultados'
        });

        $('.textarea-experiencie').trumbowyg({
            removeformatPasted: true
        });

        $('.textarea-reason_work').trumbowyg({
            removeformatPasted: true
        });
    </script>
@endsection