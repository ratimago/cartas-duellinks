@extends('Backend.Templates.layout')

@section('title') {{$title}} @stop

@section('content')

    {{--    <section style="background:#efefe9;">
            <div class="container">
                <div class="row">
                    <div class="board">
                        <!-- <h2>Welcome to IGHALO!<sup>™</sup></h2>-->
                        <div class="board-inner">
                            <ul class="nav nav-tabs" id="myTab">
                                <div class="liner"></div>
                                <li class="active">
                                    <a href="#home" data-toggle="tab" title="welcome">
                          <span class="round-tabs one">
                                  <i class="glyphicon glyphicon-home"></i>
                          </span>
                                    </a></li>

                                <li><a href="#profile" data-toggle="tab" title="profile">
                         <span class="round-tabs two">
                             <i class="glyphicon glyphicon-user"></i>
                         </span>
                                    </a>
                                </li>
                                <li><a href="#messages" data-toggle="tab" title="bootsnipp goodies">
                         <span class="round-tabs three">
                              <i class="glyphicon glyphicon-gift"></i>
                         </span> </a>
                                </li>

                                <li><a href="#settings" data-toggle="tab" title="blah blah">
                             <span class="round-tabs four">
                                  <i class="glyphicon glyphicon-comment"></i>
                             </span>
                                    </a></li>

                                <li><a href="#doner" data-toggle="tab" title="completed">
                             <span class="round-tabs five">
                                  <i class="glyphicon glyphicon-ok"></i>
                             </span> </a>
                                </li>

                            </ul></div>

                        <div class="tab-content">
                            <div class="tab-pane fade in active" id="home">

                                <h3 class="head text-center">Welcome to Bootsnipp<sup>™</sup> <span style="color:#f48260;">♥</span></h3>
                                <p class="narrow text-center">
                                    Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.
                                </p>

                                <p class="text-center">
                                    <a href="" class="btn btn-success btn-outline-rounded green"> start using bootsnipp <span style="margin-left:10px;" class="glyphicon glyphicon-send"></span></a>
                                </p>
                            </div>
                            <div class="tab-pane fade" id="profile">
                                <h3 class="head text-center">Create a Bootsnipp<sup>™</sup> Profile</h3>
                                <p class="narrow text-center">
                                    Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.
                                </p>

                                <p class="text-center">
                                    <a href="" class="btn btn-success btn-outline-rounded green"> create your profile <span style="margin-left:10px;" class="glyphicon glyphicon-send"></span></a>
                                </p>

                            </div>
                            <div class="tab-pane fade" id="messages">
                                <h3 class="head text-center">Bootsnipp goodies</h3>
                                <p class="narrow text-center">
                                    Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.
                                </p>

                                <p class="text-center">
                                    <a href="" class="btn btn-success btn-outline-rounded green"> start using bootsnipp <span style="margin-left:10px;" class="glyphicon glyphicon-send"></span></a>
                                </p>
                            </div>
                            <div class="tab-pane fade" id="settings">
                                <h3 class="head text-center">Drop comments!</h3>
                                <p class="narrow text-center">
                                    Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.
                                </p>

                                <p class="text-center">
                                    <a href="" class="btn btn-success btn-outline-rounded green"> start using bootsnipp <span style="margin-left:10px;" class="glyphicon glyphicon-send"></span></a>
                                </p>
                            </div>
                            <div class="tab-pane fade" id="doner">
                                <div class="text-center">
                                    <i class="img-intro icon-checkmark-circle"></i>
                                </div>
                                <h3 class="head text-center">thanks for staying tuned! <span style="color:#f48260;">♥</span> Bootstrap</h3>
                                <p class="narrow text-center">
                                    Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.
                                </p>
                            </div>
                            <div class="clearfix"></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>--}}
    <div class="container">
        <div class="col-md-8 col-md-offset-1">
            {!! $message !!}
            <div id="exTab1" class="container">
                <ul class="nav nav-pills">
                    <li class="active">
                        <a href="{{ route('quotations') }}" class="btn btn-default"><i
                                    class="glyphicon glyphicon-arrow-left"></i> Regresar</a>
                    </li>
                    <li class="active">
                        <a href="#1a" data-toggle="tab">Datos Personales</a>
                    </li>
                    <li><a href="#2a" data-toggle="tab">Empresa</a>
                    </li>
                    <li><a href="#3a" data-toggle="tab">Camiones</a>
                    </li>
                </ul>

                <div class="tab-content clearfix">
                    <div class="tab-pane active" id="1a">
                        <h3>Datos Personales del Contactante</h3>
                        <br>
                        {!!Form::Open(['url' => route('quotations.update',$id), 'files' => true, 'class' => "form-horizontal", 'role'=>'form'])!!}
                        <div class="form-group">
                            {!!Form::Label('autoresponder_id','Departamento:',['class'=>'col-md-2 control-label'])!!}
                            <div class="col-md-5">
                                {!!Form::select('autoresponder_id', ['' => 'Seleccionar'] + $autoresponders, @$item->autoresponder_id, ['class'=>'form-control select-categories'])!!}
                                {!!$errors->first('autoresponder_id','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('state_id','Estado:',['class'=>'col-md-2 control-label'])!!}
                            <div class="col-md-5">
                                {!!Form::select('state_id', ['' => 'Seleccionar'] + $states, @$item->state_id, ['class'=>'form-control select-states'])!!}
                                {!!$errors->first('state_id','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('name','Nombre:',['class'=>'col-md-2 control-label'])!!}
                            <div class="col-md-5">
                                {!!Form::text('name', @$item->name, ['class'=>'form-control'])!!}
                                {!!$errors->first('name','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('email', 'Correo Electrónico:', ['class'=>'col-md-2 control-label'])!!}
                            <div class="col-md-5">
                                {!!Form::text('email', @$item->email, ['class'=>'form-control'])!!}
                                {!!$errors->first('email','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('area_code', 'Lada', ['class'=>'col-md-2 control-label'])!!}
                            <div class="col-md-5">
                                {!!Form::text('area_code', @$item->area_code, ['class'=>'form-control'])!!}
                                {!!$errors->first('area_code','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('phone', 'Teléfono', ['class'=>'col-md-2 control-label'])!!}
                            <div class="col-md-5">
                                {!!Form::text('phone', @$item->phone, ['class'=>'form-control'])!!}
                                {!!$errors->first('phone','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('bussiness_office', 'Cargo del Contactante', ['class'=>'col-md-2 control-label'])!!}
                            @if ((\Backend::getPosition(@$item->bussiness_office, 'o') == 8))
                                <div class="col-md-5">
                                    {!!Form::text('other_office', @$item->other_office, ['class'=>'form-control'])!!}
                                    {!!$errors->first('other_office','<div class="text-danger">:message</div>')!!}
                                </div>
                            @else
                                <div class="col-md-5">
                                    {!!Form::select('bussiness_office',\Backend::getBussiness_Office(), \Backend::getPosition(@$item->bussiness_office, 'o'), ['class'=>'form-control select-filters'])!!}
                                    {!!$errors->first('bussiness_office','<div class="text-danger">:message</div>')!!}
                                </div>
                            @endif
                        </div>
                        {!!Form::Close()!!}
                    </div>
                    <div class="tab-pane" id="2a">
                        <h3>Datos de la Empresa que contacta</h3>
                        <br>
                        {!!Form::Open(['url' => route('quotations.update',$id), 'files' => true, 'class' => "form-horizontal", 'role'=>'form'])!!}
                        <div class="form-group">
                            {!!Form::Label('bussiness_type', 'Tipo de Negocio', ['class'=>'col-md-2 control-label'])!!}
                            <div class="col-md-6">
                                {!!Form::select('bussiness_type',\Backend::getBussiness_Type(), \Backend::getPosition(@$item->bussiness_type, 't'), ['class'=>'form-control select-filters'])!!}
                                {!!$errors->first('bussiness_type','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('company_name', 'Nombre de la empresa', ['class'=>'col-md-2 control-label'])!!}
                            <div class="col-md-6">
                                {!!Form::text('company_name', @$item->company_name, ['class'=>'form-control'])!!}
                                {!!$errors->first('company_name','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('material_transport', 'Material a Transportar', ['class'=>'col-md-2 control-label'])!!}
                            @if ((\Backend::getPosition(@$item->material_transport, 'm') == 9))
                                <div class="col-md-6">
                                    {!!Form::text('other_material', @$item->other_material, ['class'=>'form-control'])!!}
                                    {!!$errors->first('other_material','<div class="text-danger">:message</div>')!!}
                                </div>
                            @else
                                <div class="col-md-6">
                                    {!!Form::select('material_transport',\Backend::getMaterial_Transport(), \Backend::getPosition(@$item->material_transport, 'm'), ['class'=>'form-control select-filters'])!!}
                                    {!!$errors->first('material_transport','<div class="text-danger">:message</div>')!!}
                                </div>
                            @endif
                        </div>
                        <div class="form-group">
                            {!!Form::Label('load_weight', 'Peso Aprox. de Carga', ['class'=>'col-md-2 control-label'])!!}
                            <div class="col-md-6">
                                {!!Form::select('load_weight',\Backend::getLoad_Weight(), \Backend::getPosition(@$item->load_weight, 'w'), ['class'=>'form-control select-filters'])!!}
                                {!!$errors->first('load_weight','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <div class="form-group">
                            {!!Form::Label('message_text','Texto:',['class'=>'col-md-2 control-label'])!!}
                            <div class="col-md-6">
                                {!! Form::textarea('message_text', @$item->message_text,['class'=>'form-control textarea-content']) !!}
                                {!!$errors->first('message_text','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        <hr>
                        {!!Form::Close()!!}
                    </div>
                    <div class="tab-pane" id="3a">
                        <h3>Listado de Camiones de su interés</h3>
                        <br>

                        <div class="col-md-9">
                            <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
                                <thead>
                                <tr>
                                    <th>Camión</th>
                                    <th>Capacidad de Carga</th>
                                    <th>Imagen</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($item->trucks as $truck)
                                    <tr>
                                        <td>{{ $truck->name }}</td>
                                        <td>{{ $truck->loading_capacity }}</td>
                                        <td>
                                            <div class="col-xs-8">
                                                <a href="#" class="thumbnail">
                                                    <img src={{ asset("filesUpdates/Camiones/".$truck->name_logo) }} class="img-circle"
                                                         alt="imagen circular" width="150px" height="150px">
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {{--<div class="form-group text-center">
                    <div class="btn-group">
                        <button type="submit" class="btn btn-success"><i
                                    class="glyphicon glyphicon-floppy-disk"></i> Guardar
                        </button>
                    </div>
                </div>--}}
            </div>
        </div>
    </div>
@stop
@section('js')
    <style>
        @import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);

        /* written by riliwan balogun http://www.facebook.com/riliwan.rabo*/
        .board {
            width: 75%;
            margin: 60px auto;
            height: 500px;
            background: #fff;
            /*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/
        }

        .board .nav-tabs {
            position: relative;
            /* border-bottom: 0; */
            /* width: 80%; */
            margin: 40px auto;
            margin-bottom: 0;
            box-sizing: border-box;

        }

        .board > div.board-inner {
            background: #fafafa url(http://subtlepatterns.com/patterns/geometry2.png);
            background-size: 30%;
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
        }

        span.round-tabs {
            width: 70px;
            height: 70px;
            line-height: 70px;
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
            color: rgb(34, 194, 34);
            border: 2px solid rgb(34, 194, 34);
        }

        li.active span.round-tabs.one {
            background: #fff !important;
            border: 2px solid #ddd;
            color: rgb(34, 194, 34);
        }

        span.round-tabs.two {
            color: #febe29;
            border: 2px solid #febe29;
        }

        li.active span.round-tabs.two {
            background: #fff !important;
            border: 2px solid #ddd;
            color: #febe29;
        }

        span.round-tabs.three {
            color: #3e5e9a;
            border: 2px solid #3e5e9a;
        }

        li.active span.round-tabs.three {
            background: #fff !important;
            border: 2px solid #ddd;
            color: #3e5e9a;
        }

        span.round-tabs.four {
            color: #f1685e;
            border: 2px solid #f1685e;
        }

        li.active span.round-tabs.four {
            background: #fff !important;
            border: 2px solid #ddd;
            color: #f1685e;
        }

        span.round-tabs.five {
            color: #999;
            border: 2px solid #999;
        }

        li.active span.round-tabs.five {
            background: #fff !important;
            border: 2px solid #ddd;
            color: #999;
        }

        .nav-tabs > li.active > a span.round-tabs {
            background: #fafafa;
        }

        .nav-tabs > li {
            width: 20%;
        }

        /*li.active:before {
            content: " ";
            position: absolute;
            left: 45%;
            opacity:0;
            margin: 0 auto;
            bottom: -2px;
            border: 10px solid transparent;
            border-bottom-color: #fff;
            z-index: 1;
            transition:0.2s ease-in-out;
        }*/
        .nav-tabs > li:after {
            content: " ";
            position: absolute;
            left: 45%;
            opacity: 0;
            margin: 0 auto;
            bottom: 0px;
            border: 5px solid transparent;
            border-bottom-color: #ddd;
            transition: 0.1s ease-in-out;

        }

        .nav-tabs > li.active:after {
            content: " ";
            position: absolute;
            left: 45%;
            opacity: 1;
            margin: 0 auto;
            bottom: 0px;
            border: 10px solid transparent;
            border-bottom-color: #ddd;

        }

        .nav-tabs > li a {
            width: 70px;
            height: 70px;
            margin: 20px auto;
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

        .tab-content .head {
            font-family: 'Roboto Condensed', sans-serif;
            font-size: 25px;
            text-transform: uppercase;
            padding-bottom: 10px;
        }

        .btn-outline-rounded {
            padding: 10px 40px;
            margin: 20px 0;
            border: 2px solid transparent;
            border-radius: 25px;
        }

        .btn.green {
            background-color: #5cb85c;
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
                width: 50px;
                height: 50px;
                line-height: 50px;
            }

            .tab-content .head {
                font-size: 20px;
            }

            .nav-tabs > li a {
                width: 50px;
                height: 50px;
                line-height: 50px;
            }

            .nav-tabs > li.active:after {
                content: " ";
                position: absolute;
                left: 35%;
            }

            .btn-outline-rounded {
                padding: 12px 20px;
            }
        }

    </style>
    <script>
        $(function () {
            $('a[title]').tooltip();
        });

        $(".select-categories").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione una categoría',
            no_results_text: 'No se encontraron resultados'
        });

        $('.textarea-content').trumbowyg({
            removeformatPasted: true
        });

        $(document).ready(function () {
            $('#example').DataTable();
        });
    </script>
@endsection