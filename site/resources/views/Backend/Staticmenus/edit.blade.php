@extends('Backend.Templates.layout')
@section('title') {{$title}} @stop
@section('css')
    <style>
        .lite-greyBg {
            background: #EFEFEF;
        }

        .bg-white {
            background: white;
        }

        .pad20 {
            padding: 20px
        }

        .pad10 {
            padding: 10px
        }

        .pad5 {
            padding: 5px
        }

        .mR20 {
            margin-right: 20px
        }

        .mB5 {
            margin-bottom: 5px
        }

        .bdr {
            border: thin solid #EFEFEF
        }

        .bdrB {
            border-bottom: thin solid #EFEFEF
        }

        .trs-acc-hdg {
            cursor: pointer
        }

        .trs-acc-hdg .logo {
            display: inline-block;
            padding: 5px;
            border: thin solid white
        }
    </style>
@endsection
@section('content')

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">

                {!! $message !!}
                <div class="col-md-12 col-xs-12">
                    <div class="panel panel-default panel-form">
                        <div class="panel-body">
                            <h3 class="text-center">Configuración de la Sección</h3>
                            {!!Form::Open(['url' => route('staticmenus.update',$id), 'files' => true, 'class' => "form-horizontal", 'role'=>'form'])!!}
                            <div class="form-group">
                                {!!Form::Label('name','Nombre:',['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::text('name',@$item->name,['class'=>'form-control'])!!}
                                    {!!$errors->first('name','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                            @if(isset($item->slug))
                                @if($item->slug != 'home')
                                    <div class="form-group">
                                        {!!Form::Label('title','Título:',['class'=>'col-md-3 control-label'])!!}
                                        <div class="col-md-8">
                                            {!!Form::text('title',@$item->title,['class'=>'form-control'])!!}
                                            {!!$errors->first('title','<div class="text-danger">:message</div>')!!}
                                        </div>
                                    </div>
                                @endif
                            @endif
                            <div class="form-group">
                                {!!Form::Label('meta_description','Descripción (Redes Sociales):',['class'=>'col-md-3 control-label'])!!}
                                <div class="col-md-8">
                                    {!!Form::text('meta_description',@$item->meta_description,['class'=>'form-control'])!!}
                                    {!!$errors->first('meta_description','<div class="text-danger">:message</div>')!!}
                                </div>
                            </div>
                            @if(isset($item->slug))
                                @if($item->slug != 'home')
                                    <div class="form-group">
                                        {!!Form::Label('subtitle','Subtítulo:',['class'=>'col-md-3 control-label'])!!}
                                        <div class="col-md-8">
                                            {!!Form::text('subtitle',@$item->subtitle,['class'=>'form-control'])!!}
                                            {!!$errors->first('subtitle','<div class="text-danger">:message</div>')!!}
                                        </div>
                                    </div>
                                @endif
                            @endif
                            @if(isset($item->slug))
                                @if($item->slug == 'terminos-y-condiciones' || $item->slug == 'aviso-de-privacidad')
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">Cuerpo de la sección</label>

                                        <div class="col-md-8">
                                            {!! Form::textarea('text', @$item->text,['class'=>'form-control textarea-content']) !!}
                                            {!!$errors->first('text','<div class="text-danger">:message</div>')!!}
                                        </div>
                                    </div>
                                @endif
                            @endif

                            <div class="form-group text-center">
                                <div class="btn-group">
                                    <button type="submit" class="btn btn-success"><i
                                                class="glyphicon glyphicon-floppy-disk"></i> Guardar
                                    </button>
                                    {{--<a href="{{ route('staticmenus') }}" class="btn btn-default"><i
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

        <div class="col-md-10 col-md-offset-1">
            @if($item->slug == 'acerca-de' || $item->slug == 'postventa' || $item->slug == 'nosotros')
                @if($item->slug != 'nosotros')
                <h3>Relación de Subsecciones por Página o Sección</h3>
                @endif



                @foreach($item->blocks as $block)

                        <div class="trs-acc mB5">
                            <div class="sec pad10 active">
                                <div class="trs-acc-hdg lite-greyBg ">
                        <span class="webfwd logo pad5 mR20 bg-white"><img
                                    src="{{ asset('images/1479253790_settings01.png') }}"
                                    width="60" height="54"></span>
                                    <spoan>{{ $block->title }}</spoan>
                                </div>
                                <div id="w_default" class="trs-acc-bdy bdrB">
                                    <h6>Para manipular esta subsección haz clic aquí</h6>
                                    <a href="{{route('blocks.edit',$block->id)}}">Ir a {{ $block->title }}</a>
                                </div>

                            </div>
                        </div>

                @endforeach
            @endif
        </div>
    </div>

@stop
@section('js')
    <script>
        $('.textarea-content').trumbowyg({
            removeformatPasted: true
        });

        /*------- Custom Accordion ---------------- */
        //hide the all of the element with class trs-acc-bdy
        $(".trs-acc-bdy").hide();
        $(".trs-acc-hdg").append('<i class="reveal pull-right fa fa-angle-down pad20"></i>');
        //toggle the componenet with class msg_body
        $(".trs-acc-hdg").click(function (e) {
            e.preventDefault();
            $(".trs-acc-bdy").hide('slow');
            $(this).next(".trs-acc-bdy").slideToggle(800);
            $(this).next('i.reveal').removeClass('fa-angle-down');
        });

        $(".active .trs-acc-bdy").show();
    </script>
@endsection