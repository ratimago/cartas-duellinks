        <footer class="black">
            <div class="container">
                <div class="row">
                    @if(isset($blog))
                        <div class="col s12 l3 redesSociales center-align">
                            <a href="#!">
                                <div class="facebook"></div>
                            </a>
                            
                            <a href="#!">
                                <div class="twitter"></div>
                            </a>
                            
                            <a href="#!">
                                <div class="youtube"></div>
                            </a>
                        </div>
                    @else
                        <div class="col s12 l4 redesSociales center-align">
                            <a href="https://www.facebook.com/isuzumex/" target="_blank">
                                <div class="facebook"></div>
                            </a>
                            
                            <a href="https://twitter.com/isuzumexico" target="_blank">
                                <div class="twitter"></div>
                            </a>
                            
                            <a href="https://www.youtube.com/channel/UCsF211gFHgrtyGqjDXbiLbw" target="_blank">
                                <div class="youtube"></div>
                            </a>
                            
                            <a href="{{ route('blog') }}">
                                <div class="blog">BLOG</div>
                            </a>
                        </div>
                    @endif
                    
                    @if(isset($blog))
                        <div class="col s12 l7 menu-footer">
                            <p class="let-align white-text">2016 © ISUZU MOTORS DE MÉXICO S. DE R.L.</p>
                        </div>

                        <div class="col s12 l2 menu-footer center-align">
                            <ul>
                                <li {{ (@$active == 'job_market') ? 'class=active' : null  }}><a href="/">ISUZU</a></li>
                            </ul>
                        </div>
                    @else
                        <div class="col s12 l8 menu-footer">
                            <ul>
                                <li {{ (@$active == 'cotizaciones/contacto') ? 'class=active' : null  }}><a href="{{ route('quotation', ['slug' => 'contacto']) }}">CONTACTO</a></li>
                                <li {{ (@$active == 'acerca-de') ? 'class=active' : null  }}><a href="/acerca-de">ACERCA DE</a></li>
                                <li {{ (@$active == 'aviso-de-privacidad') ? 'class=active' : null  }}><a href="/aviso-de-privacidad">AVISO DE PRIVACIDAD</a></li>
                                <li {{ (@$active == 'terminos-y-condiciones') ? 'class=active' : null  }}><a href="/terminos-y-condiciones">TÉRMINOS Y CONDICIONES</a></li>
                                <li {{ (@$active == 'job_market') ? 'class=active' : null  }}><a href="{{ route('trabajo') }}">BOLSA DE TRABAJO</a></li>
                            </ul>
                        </div>
                    @endif
                </div>
            </div>

            <div class="invitacion-scroll animated fadeInDown" id="invitacion-scroll"></div>
        </footer>

        <div id="modal1" class="modal modal-fixed-footer bottom-sheet">
            <div class="modal-content">
                @if(isset($menutrucks))
                    <ul>

                        @if(isset($trucks))
                            @foreach($trucks as $truck)
                                <li {{ (@$active == $truck->slug) ? 'class=active' : null }}>
                                    <a href="{{ route('truck.getTruck', ['slug' => $truck->slug]) }}">
                                        <img src="{{ asset('filesUpdates/Camiones/'.$truck->name_profile) }}"
                                            alt="{{ $truck->name }}" class="left">

                                        <p class="truncate black-text">
                                            <strong> {{ $truck->name }}</strong> {{ \Frontend::getLoadWeight($truck->loading_capacity) }}</p>
                                        <!-- Falta poner las toneladas -->
                                    </a>
                                </li>
                            @endforeach
                        @endif
                    </ul>
                @endif
            </div>
            
            <div class="modal-footer">
                <a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat">Regresar al menu</a>
            </div>
        </div>

        
        @yield('js')
        <!--//////////*****   navegadore viejos   *****//////////-->
        <script async> 
        var $buoop = {vs:{i:9,f:-4,o:-4,s:8,c:-4},text: "Si no ves el sitio correctamente intenta actualizando tu navegador a la útlima versión.",unsecure:true,api:4}; 
        function $buo_f(){ 
        var e = document.createElement("script"); 
        e.src = "//browser-update.org/update.min.js"; 
        document.body.appendChild(e);
        };
        try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
        catch(e){window.attachEvent("onload", $buo_f)}
        </script>

        <noscript>
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <p class="white-text center-align">Bienvenido a ISUZU</p>
                        <p class="white-text center-align">La página que estás viendo requiere para su funcionamiento el uso de JavaScript. Si lo has deshabilitado intencionadamente, por favor vuelve a activarlo.</p>
                    </div>
                </div>
            </div>
        </noscript>

        <!--//////////*****   GCLID   *****//////////-->
        <script type="text/javascript">
            function setCookie(name, value, days){
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000)); 
                var expires = "; expires=" + date.toGMTString();
                document.cookie = name + "=" + value + expires;
            }
            
            function getParam(p){
                var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
                return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
            }
            
            var gclid = getParam('gclid');
            
            if(gclid){
                var gclsrc = getParam('gclsrc');
                if(!gclsrc || gclsrc.indexOf('aw') !== -1){
                    setCookie('gclid', gclid, 90);
                }
            }
        </script>

        @if(isset($blog))
        <!-- Go to www.addthis.com/dashboard to customize your tools -->
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-51a67cfb30ef49a9"></script>
        @else
        @endif
        <script src="{{asset('/js/final.min.js')}}"></script>
        <!--<link rel="stylesheet" href="{{asset('/css/estilos.min.css')}}">-->
    </body>
    
</html>
