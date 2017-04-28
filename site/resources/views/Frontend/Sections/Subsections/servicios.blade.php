@extends('Frontend.master')
@section('title') {{ $title }} @endsection
@section('metainformacion') {{ substr( strip_tags($meta_description), 0, 230) }} @stop
@section('content')
<main class="postventa">
    <section class="encabezado">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h1 class="white-text center-align">Matenimiento y reparación</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="contenido-postventa">
        <div class="container">
            <div class="row">
                @include('Frontend.Sections.Subsections.menu-postventa')

                <article class="col s12 l9 notas-imagenes" id="scroll">
                    <div class="row">
                        <div class="col s12">

                                {!! $text !!}


                        </div>
                    </div>

                    <div class="row">
                        <div class="col s12">
                            <div class="nota">
                                <div class="row">
                                    <div class="col s12">
                                        <h2>¿Cuándo dar mantenimiento a mi camión Isuzu?</h2>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col s12">
                                        <div class="submenu">
                                            <ul class="menu-modelos-camiones center-align">
                                                @if(@\Request::segment(3) == '')
                                                <li class="menu-modelos" id="menu-1"><a href="/postventa/servicios/elf-100#scroll-camiones">Elf 100</a></li>
                                                <li class="menu-modelos" id="menu-2"><a href="/postventa/servicios/elf-200-300#scroll-camiones">Elf 200<br>Elf 300</a></li>
                                                <li class="menu-modelos" id="menu-3"><a href="/postventa/servicios/elf-400-600#scroll-camiones">Elf 400 - 600<br>elf bus 600</a></li>
                                                <li class="menu-modelos" id="menu-4"><a href="/postventa/servicios/fordward-800-1100#scroll-camiones">Fordward 800<br>Fordward 1100</a></li>

                                                @elseif(@\Request::segment(3) == 'elf-100')
                                                    <li class="menu-modelos active" id="menu-1"><a href="/postventa/servicios/elf-100#scroll-camiones">Elf 100</a></li>
                                                    <li class="menu-modelos" id="menu-2"><a href="/postventa/servicios/elf-200-300#scroll-camiones">Elf 200<br>Elf 300</a></li>
                                                    <li class="menu-modelos" id="menu-3"><a href="/postventa/servicios/elf-400-600#scroll-camiones">Elf 400 - 600<br>elf bus 600</a></li>
                                                    <li class="menu-modelos" id="menu-4"><a href="/postventa/servicios/fordward-800-1100#scroll-camiones">Fordward 800<br>Fordward 1100</a></li>
                                                @elseif(@\Request::segment(3) == 'elf-200-300')
                                                    <li class="menu-modelos" id="menu-1"><a href="/postventa/servicios/elf-100#scroll-camiones">Elf 100</a></li>
                                                    <li class="menu-modelos active" id="menu-2"><a href="/postventa/servicios/elf-200-300#scroll-camiones">Elf 200<br>Elf 300</a></li>
                                                    <li class="menu-modelos" id="menu-3"><a href="/postventa/servicios/elf-400-600#scroll-camiones">Elf 400 - 600<br>elf bus 600</a></li>
                                                    <li class="menu-modelos" id="menu-4"><a href="/postventa/servicios/fordward-800-1100#scroll-camiones">Fordward 800<br>Fordward 1100</a></li>
                                                @elseif(@\Request::segment(3) == 'elf-400-600')
                                                    <li class="menu-modelos" id="menu-1"><a href="/postventa/servicios/elf-100#scroll-camiones">Elf 100</a></li>
                                                    <li class="menu-modelos" id="menu-2"><a href="/postventa/servicios/elf-200-300#scroll-camiones">Elf 200<br>Elf 300</a></li>
                                                    <li class="menu-modelos active" id="menu-3"><a href="/postventa/servicios/elf-400-600#scroll-camiones">Elf 400 - 600<br>elf bus 600</a></li>
                                                    <li class="menu-modelos" id="menu-4"><a href="/postventa/servicios/fordward-800-1100#scroll-camiones">Fordward 800<br>Fordward 1100</a></li>
                                                @elseif(@\Request::segment(3) == 'fordward-800-1100')
                                                    <li class="menu-modelos" id="menu-1"><a href="/postventa/servicios/elf-100#scroll-camiones">Elf 100</a></li>
                                                    <li class="menu-modelos" id="menu-2"><a href="/postventa/servicios/elf-200-300#scroll-camiones">Elf 200<br>Elf 300</a></li>
                                                    <li class="menu-modelos" id="menu-3"><a href="/postventa/servicios/elf-400-600#scroll-camiones">Elf 400 - 600<br>elf bus 600</a></li>
                                                    <li class="menu-modelos active" id="menu-4"><a href="/postventa/servicios/fordward-800-1100#scroll-camiones">Fordward 800<br>Fordward 1100</a></li>
                                                @endif
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <!-- Aqui va timeline -->
                                <div class="row" id="scroll-camiones">
                                    <div class="col s12 lineaTiempo">

                                        @if(@\Request::segment(3) == 'elf-100')
                                        <!--///////////////////////
                                        /////***  ELF 100  ***/////
                                        ////////////////////////-->
                                        <div class="frst-container content-alternate menu-1" data-animation-name="rotateInDownLeft" style="">
                                            <!-- frst-left-align/frst-right-align/frst-alternate/frst-date-opposite-->
                                            <div class="frst-timeline frst-timeline-style-4 frst-alternate">
                                                <div class="frst-timeline-block frst-timeline-label-block" data-animation="rotateInDownLeft">
                                                    <div class="frst-labels frst-start-label">
                                                        <span>ELF 100</span>
                                                    </div><!-- .frst-start-label -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>5,000 KM</h2>
                                                                <h3>3 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-star fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p><strong>¡Importante!</strong></p>
                                                            
                                                            <p>REVISIÓN Y AJUSTE DE FRENOS:CADA 5,000km. O CADA 3 MESES.</p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>10,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Inspección del Refrigerante.</li>
                                                                    <li>Inspección de Bandas.</li>
                                                                    <li>Lubricar crucetas.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>20,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-star fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100"> 
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Ajuste de chicotes de velocidades.</li>
                                                                    <li>Revisión de juego de Dirección.</li>
                                                                    <li>Revisión del freno de estacionamiento.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>30,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Inspección de la vida útil de las balatas.</li>
                                                                    <li>Torque de tuercas de llantas.</li>
                                                                    <li>Inspección de luces en general.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>40,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Ajuste de valvulas.</li>
                                                                    <li>Engrasar baleros de ruedas delanteras.</li>
                                                                    <li>Inspección de fuga en los amortiguadores.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>50,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Inspección de filtros, principalmente de Aire.</li>
                                                                    <li>Inspección de fugas en lineas de frenos.</li>
                                                                    <li>Inspección general de baterias.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>60,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Reemplazo de todos los fluidos.</li>
                                                                    <li>Reemplazo de filtros.</li>
                                                                    <li>Inspección de conexiones de tubos y mangueras.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>70,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Juego en pedal del embrague.</li>
                                                                    <li>Inspeccionar soltura y juego del sistema de dirección hidraulica.</li>
                                                                    <li>Condiciones de Motor.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>80,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Ajuste de valvulas.</li>
                                                                    <li>Soltura o daño en los tubos de escape.</li>
                                                                    <li>Inspección de mangueras y fugas de sistema de refrigeración.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>90,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Reemplazo de todos los fluidos.</li>
                                                                    <li>Reemplazo de filtros.</li>
                                                                    <li>Inspección y reapriete de suspensión y carroceria.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>100,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Inspección de soltura, fugas y daños en el sistema de combustible, mangueras y tubos.</li>
                                                                    <li> Ajuste de chicotes de velocidades.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                            </div><!-- frst-timeline -->
                                        </div><!-- .frst-container -->
                                        <!--/////***  Termina ELF 100  ***/////-->


                                        @elseif(@\Request::segment(3) == 'elf-200-300')
                                        <!--////////////////////////////////
                                        /////***  ELF 200, ELF 300  ***/////
                                        /////////////////////////////////-->
                                        <div class="frst-container content-alternate menu-2" data-animation-name="rotateInDownLeft" >
                                            <!-- frst-left-align/frst-right-align/frst-alternate/frst-date-opposite-->
                                            <div class="frst-timeline frst-timeline-style-4 frst-alternate">
                                                <div class="frst-timeline-block frst-timeline-label-block" data-animation="rotateInDownLeft">
                                                    <div class="frst-labels frst-start-label">
                                                        <span>ELF 200<br>ELF 300</span>
                                                    </div><!-- .frst-start-label -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>15,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-star fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Engrasar todos los puntos de lubrición.</li>
                                                                    <li>Revisión de niveles.</li>
                                                                    <li>Torque a tuercas de rin.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>30,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Inspección de bandas.</li>
                                                                    <li>Ajuste de chicotes de velocidades.</li>
                                                                    <li>Revisión de baterías.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>45,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-star fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100"> 
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Reemplazo de todos los fluidos.</li>
                                                                    <li>Engrasado de baleros de masas delanteras.</li>
                                                                    <li>Ajuste de valvulas.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>60,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Inspección de banda.</li>
                                                                    <li>Inspección de sistema de escape.</li>
                                                                    <li>Revisión de discos y tambores de frenos.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>75,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Cambio de banda.</li>
                                                                    <li>Revisión de claxón, luces y limpiadores.</li>
                                                                    <li>Reapriete de suspensión y carroceria.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>90,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Reemplazo de liquido de frenos.</li>
                                                                    <li>Ajuste de chicotes de caja de velocidades.</li>
                                                                    <li>Revisión de sistema de dirección hidraulica.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                            </div><!-- frst-timeline -->
                                        </div><!-- .frst-container -->
                                        <!--/////***  Termina ELF 200, ELF 300  ***/////-->


                                        @elseif(@\Request::segment(3) == 'elf-400-600')
                                        <!--/////////////////////////////////////////
                                        /////***  ELF 400-600 y ELF BUS 600  ***/////
                                        //////////////////////////////////////////-->
                                        <div class="frst-container content-alternate menu-3" data-animation-name="rotateInDownLeft" >
                                            <!-- frst-left-align/frst-right-align/frst-alternate/frst-date-opposite-->
                                            <div class="frst-timeline frst-timeline-style-4 frst-alternate">
                                                <div class="frst-timeline-block frst-timeline-label-block" data-animation="rotateInDownLeft">
                                                    <div class="frst-labels frst-start-label">
                                                        <span>ELF 400-600<br>ELF BUS 600
                                                        </span>
                                                    </div><!-- .frst-start-label -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>10,400 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-star fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Torque de tuercas de rueda y "U" de muelles.</li>
                                                                    <li>Revición y rotación de neumaticos.</li>
                                                                    <li>Comprobación de ruido de motor.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>20,800 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Reemplazo de filtro de combustible.</li>
                                                                    <li>Inspección de tuberia de sist. De Inyeccion.</li>
                                                                    <li>Carrera libre de pedal del embrague.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>31,200</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-star fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100"> 
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Revisión de bandas de motor.</li>
                                                                    <li>Inspección de sistema de enfriamiento.</li>
                                                                    <li>Revisión de balatas de frenos.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>41,600 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Reemplazo de todos los filtros y fluidoss.</li>
                                                                    <li>Inspección y limpieza del sist. De entrada de aire.</li>
                                                                    <li>Inspección de lineas de frenos.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>52,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Cambio de liquido de dirección.</li>
                                                                    <li>Engrazado de rodamientos del y tras.</li>
                                                                    <li>Reapriete de suspensión y "U" de carroceria.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>62,400 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Desgaste de balatas de frenos delanteros.</li>
                                                                    <li>Lubricación de pivote de dirección.</li>
                                                                    <li>Revisión de tubos y conexiones del sistema de injeccion.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>72,800 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Inspección de sistema de enfriamiento.</li>
                                                                    <li>Inspección del sistema de escape.</li>
                                                                    <li>Inspección y limpieza de sistema de entrada de aire.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>83,200 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Ajuste de valvulas.</li>
                                                                    <li>Reemplazo de banda de motor.</li>
                                                                    <li>Inspección de discos, tambores y balatas de frenos delanteros y traseros.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>93,600 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Inspección y ajuste de palanca de freno de estacionamiento.</li>
                                                                    <li>Inspección de tuberia de sist. De Inyeccion.</li>
                                                                    <li>Carrera libre de pedal del embrague.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>104,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Cambio de liquido de dirección.</li>
                                                                    <li>Engrazado de rodamientos del y tras.</li>
                                                                    <li>Cambio de liquido de frenos.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                            </div><!-- frst-timeline -->
                                        </div><!-- .frst-container -->
                                        <!--/////***  Termina ELF 400-600 y ELF BUS 600  ***/////-->


                                        @elseif(@\Request::segment(3) == 'fordward-800-1100')
                                        <!--////////////////////////////////////////////
                                        /////***  Fordward 800 y Fordward 1100  ***/////
                                        /////////////////////////////////////////////-->
                                        <div class="frst-container content-alternate menu-4" data-animation-name="rotateInDownLeft" >
                                            <!-- frst-left-align/frst-right-align/frst-alternate/frst-date-opposite-->
                                            <div class="frst-timeline frst-timeline-style-4 frst-alternate">
                                                <div class="frst-timeline-block frst-timeline-label-block" data-animation="rotateInDownLeft">
                                                    <div class="frst-labels frst-start-label">
                                                        <span>FORDWARD 800<br>FORDWARD 1100
                                                        </span>
                                                    </div><!-- .frst-start-label -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>15,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-star fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Inspeccionar filtros de aire primario y secundario.</li>
                                                                    <li>Inspeccionar multiple de escape y admisión.</li>
                                                                    <li>Inspección de daños en banda de motor.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                                
                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>30,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Reemplazo de filtro de aire primario.</li>
                                                                    <li>Reemplazo de separador de aceite.</li>
                                                                    <li>Engrasar puntos de lubricación.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>45,000</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-star fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100"> 
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Ajuste de valvulas.</li>
                                                                    <li>Torque a multiple de escape y de admisión.</li>
                                                                    <li>Cambio de fluido de clutch.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>60,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Reemplazo de filtro de aire secundario.</li>
                                                                    <li>Inspeccion del sistema de dirección hidraulica.</li>
                                                                    <li>Reemplazo de kit de gomas de cilindros de rueda.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>75,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Inspección de fugas y estado de tuberias del sistema de frenos.</li>
                                                                    <li>Inspección de juntas y tubos de aire del turbocargador.</li>
                                                                    <li>Fugas en amortiguadores.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-even-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>90,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Ajuste de valvulas.</li>
                                                                    <li>Engrasar baleros de maza del y tras.</li>
                                                                    <li>Torque a suspensión del y eje tras.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>

                                                <!-- frst-timeline-block -->
                                                <div class="frst-timeline-block frst-odd-item red" data-animation="rotateInDownLeft">
                                                    <div class="frst-timeline-img">
                                                        <span></span>
                                                    </div>
                                                    
                                                    <!-- frst-timeline-img -->
                                                    <div class="frst-timeline-content">
                                                        <div class="frst-timeline-content-inner">
                                                            <div class="side-border">
                                                                <h2>105,000 KM</h2>
                                                                <h3>12 meses</h3>
                                                            </div>
                                                            
                                                            <div class="icon-section">
                                                                <i class="fa fa-cloud fa-2x" aria-hidden="true">
                                                                    <img src="/imagenes/postventa/camion-elf.png" alt="camion elf-100">
                                                                </i>
                                                            </div>
                                                            
                                                            <p>
                                                                <ol class="left-align">
                                                                    <li>Reemplazo de material desecante.</li>
                                                                    <li>Juntas y partes de goma del asistente del clutch.</li>
                                                                    <li>Revisión y / o cambio de manguera de dirección.</li>
                                                                </ol>
                                                            </p>
                                                        </div><!-- frst-timeline-content-inner -->
                                                    </div><!-- frst-timeline-content -->
                                                </div>
                                            </div><!-- frst-timeline -->
                                        </div><!-- .frst-container -->
                                        <!--/////***  Fordward 800 y Fordward 1100  ***/////-->
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col s12 center-align">
                            <a href="{{ route('centerservice') }}" class="waves-effect waves-light btn extra-extra-large">Dónde agendar mi cita de mantenimiento</a>
                        </div>
                    </div>
                    <!--<div class="row">
                        <div class="col s12 l12 nota center-align">
                            <h2>A donde vayan tus camiones isuzu, tienes el respaldo de isuzu post venta detras de ti</h2>
                            <p>Contamos con puntos de servicio en cada estado de la República Mexicana, además tenemos una de las redes de servicio más completa y confiable del mercado de camiones en el país.</p>
                            <a href="{{ route('centerservice') }}" class="waves-effect waves-light btn">Localiza tu centro de servicio más cercano</a>
                        </div>
                    </div>-->
                </article>
            </div>
        </div>
    </section>
</main>
@endsection
