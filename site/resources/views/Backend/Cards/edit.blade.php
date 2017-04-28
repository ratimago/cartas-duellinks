@extends('Backend.Templates.layout')

@section('title') {{$title}} @stop
@section('css')
    <style>
        #mapCanvas {
            width: 80%;
            height: 400px;
            float: left;
            padding: 5px;
        }

        #infoPanel {
            float: left;
            margin-left: 10px;
        }

        #infoPanel div {
            margin-bottom: 5px;
        }

        input, h1 {
            display: block;
            margin: 0 auto;
            text-align: left;
            width: 80%;
        }
    </style>
@endsection
@section('content')

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">

                {!! $message !!}

                <div class="panel panel-default panel-form">
                    <div class="panel-body">
                        <h3 class="text-center">Alta de cartas - Duel Links</h3>
                        {!!Form::Open(['url' => route('cards.update',$id), 'files' => true, 'class' => "form-horizontal", 'role'=>'form'])!!}

                        <div class="form-group">
                            {!!Form::Label('name','Nombre de la carta:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::text('name', @$item->name, ['class'=>'form-control'])!!}
                                {!!$errors->first('name','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>

                        <div class="form-group">
                            {!!Form::Label('booster_id','Booster Pack:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::select('booster_id', ['' => 'Seleccionar']+$booster , @$item->booster_id, ['class'=>'form-control select-states'])!!}
                                {!!$errors->first('booster_id','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>


                            {!!Form::Label('type_monster_card','Tipo de carta:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">

                                {{ Form::checkbox('type_monster_card[]', 'normal',(strpos($item->type_monster_card,'normal')  ? true : false))  }}
                                {{ Form::label('Normal') }}
                                {{ Form::checkbox('type_monster_card[]', 'effect',(strpos($item->type_monster_card,'effect')  ? true : false)) }}
                                {{ Form::label('Efecto') }}
                                {{ Form::checkbox('type_monster_card[]', 'ritual',(strpos($item->type_monster_card,'ritual')  ? true : false)) }}
                                {{ Form::label('Ritual') }}
                                {{ Form::checkbox('type_monster_card[]', 'fusion',(strpos($item->type_monster_card,'fusion')  ? true : false)) }}
                                {{ Form::label('Fusión') }}
                            </div>

                        <div class="form-group">
                            {!!Form::Label('type_monster','Tipo de carta Monstruo:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::select('type_monster',
                                    ['' => 'Seleccionar',

                                    'dragon'              => "Dragon",
                                    'fiend'    => "Demonio",
                                    'sea_serpent'      => "Serpiente Marina",
                                    'machine'             => 'Maquina',
                                    'dino'       => 'Dinosaurio',
                                    'beast'       => "Bestia",
                                    'plant'       => "Planta",
                                    'warrior'   => "Guerrero",
                                    'fairy'      => "Hada",
                                    'thunder'      => "Hada",
                                    'psychic'      => "Psiquico",
                                    'zombie'      => "Zombi",
                                    'piro'      => "Piro",
                                    'rock'      => "Roca",
                                    'fish'      => "Pez",
                                    'insect'      => "Insecto",
                                    'beast_warrior'      => "Guerrero Bestia",
                                    'aqua'      => "Aqua",
                                    'winged_beast'      => "Bestia Alada",
                                    'spellcaster'   => "Lanzador de conjuros",
                                    'reptile'   => "reptile",



                                    ] , @$item->type_dealership, ['class'=>'form-control select-type'])!!}
                                {!!$errors->first('type_dealership','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>



                        <div class="form-group">
                            {!!Form::Label('type_magic_trap_card','Tipo de carta Magica/Trampa:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::select('type_magic_trap_card',
                                    ['' => 'Seleccionar',

                                    'trap'              => "Trampa Normal",
                                    'trap_continuos'    => "Trampa Continua",
                                    'trap_counter'      => "Trampa de Contraefecto",
                                    'spell'             => 'Magica Normal',
                                    'spell_equip'       => 'Magica de equipo',
                                    'spell_quick'       => "Magica de juego rapido",
                                    'spell_field'       => "Magica de campo",
                                    'spell_continuos'   => "Magica continua",
                                    'spell_ritual'      => "Magica de Ritual",


                                    ] , @$item->type_dealership, ['class'=>'form-control select-type'])!!}
                                {!!$errors->first('type_dealership','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>
                        {{$item}}
                        <div class="form-group">
                            {!!Form::Label('text','Texto de la carta:',['class'=>'col-md-3 control-label'])!!}
                            <div class="col-md-8">
                                {!!Form::textarea('text',@$item->text,['class'=>'form-control'])!!}
                                {!!$errors->first('text','<div class="text-danger">:message</div>')!!}
                            </div>
                        </div>


                        <div class="form-group">
                            {!!Form::Label('image','Imagen',['class'=>'col-md-3 control-label'])!!}
                            @if(empty(@$item->image))
                                <div class="col-md-8">

                                    {!! Form::file("image", ['class'=>'']) !!}
                                    {!!$errors->first('image','<div class="text-danger">:message</div>')!!}
                                </div>
                            @else
                                <div class="col-sm-6 col-md-4">
                                    <div class="thumbnail">
                                        <img src="{{ asset('filesUpdates/Concesionarios/'.@$item->image) }}"
                                             class="img-rounded" alt="Cinque Terre" width="100px"
                                             height="100px">
                                    </div>
                                     <span class="col-sm-6">
                                        Cambiar<input type="checkbox" value="1" class="chb-catalogo"/>
                                    </span>
                                    <span class="col-sm-6">
                                        Eliminar<input type="checkbox" value="1" class="chb-catalogo-drop" data-id = "{{ $item->id }}" id = "chb-catalogo-drop"
                                                       name = "chb-catalogo-drop"/>
                                    </span>
                                </div>
                                <div class="col-md-8" id="imagenconcesionario" style="display: none;">
                                    <label class="label label-default">Imagen</label>
                                    {!! Form::file("image", ['class'=>'']) !!}
                                    {!!$errors->first('image-dealership','<div class="text-danger">:message</div>')!!}
                                </div>
                            @endif
                        </div>
                        <hr>
                        <div class="form-group col-md-12" id="map" style="display: none">
                            <div class="col-md-10 col-md-offset-1" id="mapCanvas"></div>
                        </div>
                        <div class="form-group text-center" style="padding-top: 10px">
                            <div class="btn-group">
                                <button type="submit" class="btn btn-success"><i
                                            class="glyphicon glyphicon-floppy-disk"></i> Guardar
                                </button>
                                <a href="{{ route('cards') }}" class="btn btn-default"><i
                                            class="glyphicon glyphicon-arrow-left"></i> Regresar</a>
                            </div>
                        </div>
                        {!!Form::Close()!!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('js')
    <script>
        $(".select-states").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione el tipo de usuario',
            no_results_text: 'No se encontraron resultados'
        });

        $(".select-type").chosen({
            width: "95%",
            allow_single_deselect: true,
            placeholder_text_single: 'Seleccione',
            no_results_text: 'No se encontraron resultados'
        });

        $( '.chb-catalogo' ).on( 'click', function() {
            if( $(this).is(':checked') ){
                $('#imagenconcesionario').show();
            } else {
                $('#imagenconcesionario').hide();
            }
        });
    </script>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no"/>
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
    <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDG33-Oa0Y8g4MrSYgVFK9Ic35j4cA0jM&callback=initMap">
    </script>
    <script type="text/javascript">
        var geocoder = new google.maps.Geocoder();

        function geocodePosition(pos) {
            geocoder.geocode({
                latLng: pos
            }, function (responses) {
                if (responses && responses.length > 0) {
                    updateMarkerAddress(responses[0].formatted_address);
                } else {
                    updateMarkerAddress('Cannot determine address at this location.');
                }
            });
        }

        function updateMarkerStatus(str) {
            document.getElementById('markerStatus').innerHTML = str;
        }

        function updateMarkerPosition(latLng) {
            document.getElementById('info').innerHTML = [
                latLng.lat(),
                latLng.lng()
            ].join(', ');

            $("#info_coordinate").val([
                latLng.lat(),
                latLng.lng()
            ].join(', '));
        }

        //        function updateMarkerAddress(str) {
        //            document.getElementById('address').innerHTML = str;
        //        }

        function initialize() {
            var latLng = new google.maps.LatLng(19.436782, -99.184923);
            var map = new google.maps.Map(document.getElementById('mapCanvas'), {
                zoom: 16,
                center: latLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            var marker = new google.maps.Marker({
                position: latLng,
                title: 'Point A',
                map: map,
                draggable: true
            });

            // Update current position info.
            updateMarkerPosition(latLng);
            geocodePosition(latLng);

            // Add dragging event listeners.
            google.maps.event.addListener(marker, 'dragstart', function () {
                updateMarkerAddress('Dragging...');
            });

            google.maps.event.addListener(marker, 'drag', function () {
                updateMarkerStatus('Dragging...');
                updateMarkerPosition(marker.getPosition());
            });

//            google.maps.event.addListener(marker, 'dragend', function () {
//                updateMarkerStatus('Drag ended');
//                geocodePosition(marker.getPosition());
//            });
        }
        // Onload handler to fire off the app.
        //google.maps.event.addDomListener(window, 'load', initialize);
        $('#showMap').click(function () {
            if ($('#map').is(':hidden')) {
                $('#map').show();
                initialize();
            } else {
                $('#map').hide();
            }
        });
    </script>
@endsection