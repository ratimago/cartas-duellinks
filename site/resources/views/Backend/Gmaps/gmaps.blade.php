@extends('Backend.Templates.layout')

@section('title') Camiones @stop
@section('css')
    <style>
        #mapCanvas {
            /*width: 500px;*/
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
    </style>
@endsection
@section('content')
    <div class="col-md-8 col-md-offset-1">
        <div id="exTab1" class="container">
            <ul class="nav nav-pills">
                <li class="active">
                    <a href="{{ route('dealerships') }}"><i
                                class="glyphicon glyphicon-arrow-left"></i> Regresar</a>
                </li>
                <li class="active">
                    <a href="#1a" data-toggle="tab">Mapa</a>
                </li>
            </ul>
        </div>
        <div class="tab-content clearfix">
            <div class="tab-pane active" id="1a">
                <div class="col-md-11 col-md-offset-1" id="mapCanvas">
                </div>
            </div>
        </div>
    </div>
    {{--<div id="infoPanel">
        <b>Marker status:</b>
        <div id="markerStatus"><i>Click and drag the marker.</i></div>
        <b>Current position:</b>
        <div id="info"></div>
        <b>Closest matching address:</b>
        <div id="address"></div>
    </div>--}}
@endsection

@section('js')
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
        }

        function updateMarkerAddress(str) {
            document.getElementById('address').innerHTML = str;
        }

        function initialize() {
            var latLng = new google.maps.LatLng({{ $latitud }}, {{ $longitud }});
            var map = new google.maps.Map(document.getElementById('mapCanvas'), {
                zoom: 16,
                center: latLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var contentString = '<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<h1 id="firstHeading" class="firstHeading">{{ $state }}</h1>' +
                    '<div id="bodyContent">' +
                    '<p><b>Dirección:</b>, {{ $address }} <b>Teléfonos:</b>' +
                    '{{ $phones }}' +
                    '<p>Coordenadas: {{ $latitud }}, {{ $longitud }}' + '</p>' +
                    '</div>' +
                    '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });


            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                draggable: true,
                title: 'Información'
            });

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });

            // Update current position info.
            /*updateMarkerPosition(latLng);
             geocodePosition(latLng);

             // Add dragging event listeners.
             google.maps.event.addListener(marker, 'dragstart', function() {
             updateMarkerAddress('Dragging...');
             });

             google.maps.event.addListener(marker, 'drag', function() {
             updateMarkerStatus('Dragging...');
             updateMarkerPosition(marker.getPosition());
             });

             google.maps.event.addListener(marker, 'dragend', function() {
             updateMarkerStatus('Drag ended');
             geocodePosition(marker.getPosition());
             });*/
        }

        // Onload handler to fire off the app.
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>
@endsection
