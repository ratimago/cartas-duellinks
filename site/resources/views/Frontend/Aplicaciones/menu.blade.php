<aside class="input-field col s12 l3">
    <h3>Selecciona tu isuzu</h3>
    <ul class="concesionarios menu-generico hide-on-med-and-down" id="resumen">
        <li {{ (@$active == 'selecciona') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'selecciona']) }}">Selecciona tu aplicación</a>
        </li>
        <li {{ (@$active == 'autobus') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'autobus']) }}#scroll">Autobus</a>
        </li>

        <li {{ (@$active == 'barredora') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'barredora']) }}#scroll">Barredora</a>
        </li>
        
        <li {{ (@$active == 'barrena-para-tierra') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'barrena-para-tierra']) }}#scroll">Barrena para tierra</a>
        </li>
        
        <li {{ (@$active == 'camion-basurero') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'camion-basurero']) }}#scroll">Camión basurero</a>
        </li>
        
        <li {{ (@$active == 'cisterna') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'cisterna']) }}#scroll">Cisterna</a>
        </li>
        
        <li {{ (@$active == 'food-truck') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'food-truck']) }}#scroll">Food Truck</a>
        </li>
        
        <li {{ (@$active == 'grua-de-carga') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'grua-de-carga']) }}#scroll">Grúa de carga</a>
        </li>
        
        <li {{ (@$active == 'grua-de-arrastre') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'grua-de-arrastre']) }}#scroll">Grúa de arrastre</a>
        </li>
        
        <li {{ (@$active == 'grua-telescopica') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'grua-telescopica']) }}#scroll">Grúa telescópica</a>
        </li>
        
        <li {{ (@$active == 'pipa-de-gas') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'pipa-de-gas']) }}#scroll">Pipa de gas</a>
        </li>
        
        <li {{ (@$active == 'plataforma') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'plataforma']) }}#scroll">Plataforma</a>
        </li>
        
        <li {{ (@$active == 'redillas') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'redillas']) }}#scroll">Redillas</a>
        </li>
        
        <li {{ (@$active == 'refresquera') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'refresquera']) }}#scroll">Refresquera</a>
        </li>
        
        <li {{ (@$active == 'refrigerado') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'refrigerado']) }}#scroll">Refrigerado</a>
        </li>
        
        <li {{ (@$active == 'traslado-de-vehiculos') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'traslado-de-vehiculos']) }}#scroll"><span class="truncate">Traslado de vehículos</span></a>
        </li>
        
        <li {{ (@$active == 'volteo') ? 'class=active' : null  }}>
            <a class="truncate" href="{{ route('applications.section', ['slug' => 'volteo']) }}#scroll">Volteo</a>
        </li>
    </ul>
    
    <select onchange="location = this.value;" class="hide-on-large-only">
        <option value="{{ route('applications.section', ['slug' => 'autobus']) }}#scroll" {{ (@$active == 'autobus') ? 'selected' : null  }}>Autobus</option>
        <option value="{{ route('applications.section', ['slug' => 'barredora']) }}#scroll" {{ (@$active == 'barredora') ? 'selected' : null  }}>Barredora</option>
        <option value="{{ route('applications.section', ['slug' => 'barrena-para-tierra']) }}#scroll" {{ (@$active == 'barrena-para-tierra') ? 'selected' : null  }}>Barrena para tierra</option>
        <option value="{{ route('applications.section', ['slug' => 'camion-basurero']) }}#scroll" {{ (@$active == 'camion-basurero') ? 'selected' : null  }}>Camión basurero</option>
        <option value="{{ route('applications.section', ['slug' => 'cisterna']) }}#scroll" {{ (@$active == 'cisterna') ? 'selected' : null  }}>Cisterna</option>
        <option value="{{ route('applications.section', ['slug' => 'food-truck']) }}#scroll" {{ (@$active == 'food-truck') ? 'selected' : null  }}>Food Truck</option>
        <option value="{{ route('applications.section', ['slug' => 'grua-de-carga']) }}#scroll" {{ (@$active == 'grua-de-carga') ? 'selected' : null  }}>Grúa de carga</option>
        <option value="{{ route('applications.section', ['slug' => 'grua-de-arrastre']) }}#scroll" {{ (@$active == 'grua-de-arrastre') ? 'selected' : null  }}>Grúa de arrastre</option>
        <option value="{{ route('applications.section', ['slug' => 'grua-telescopica']) }}#scroll" {{ (@$active == 'grua-telescopica') ? 'selected' : null  }}>Grúa telescópica</option>
        <option value="{{ route('applications.section', ['slug' => 'pipa-de-gas']) }}#scroll" {{ (@$active == 'pipa-de-gas') ? 'selected' : null  }}>Pipa de gas</option>
        <option value="{{ route('applications.section', ['slug' => 'plataforma']) }}#scroll" {{ (@$active == 'plataforma') ? 'selected' : null  }}>Plataforma</option>
        <option value="{{ route('applications.section', ['slug' => 'redillas']) }}#scroll" {{ (@$active == 'redillas') ? 'selected' : null  }}>Redillas</option>
        <option value="{{ route('applications.section', ['slug' => 'refresquera']) }}#scroll" {{ (@$active == 'refresquera') ? 'selected' : null  }}>Refresquera</option>
        <option value="{{ route('applications.section', ['slug' => 'refrigerado']) }}#scroll" {{ (@$active == 'refrigerado') ? 'selected' : null  }}>Refrigerado</option>
        <option value="{{ route('applications.section', ['slug' => 'traslado-de-vehiculos']) }}#scroll" {{ (@$active == 'traslado-de-vehiculos') ? 'selected' : null  }}>Traslado de vehículos</option>
        <option value="{{ route('applications.section', ['slug' => 'volteo']) }}#scroll" {{ (@$active == 'volteo') ? 'selected' : null  }}>Volteo</option>
    </select>
</aside>

                <script src="/js/aplicaciones/createjs-2015.11.26.min.js"></script>
                <script src="/js/aplicaciones/{{$active}}.js"></script>
                <script>
                var canvas, stage, exportRoot;
                function init() {
                    canvas = document.getElementById("canvas");
                    handleComplete();
                }
                function handleComplete() {
                    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
                    exportRoot = new lib.{{ \Backend::quitaGuiones($active) }}();
                    stage = new createjs.Stage(canvas);
                    stage.addChild(exportRoot);	
                    //Registers the "tick" event listener.
                    createjs.Ticker.setFPS(lib.properties.fps);
                    createjs.Ticker.addEventListener("tick", stage);	    
                    //Code to support hidpi screens and responsive scaling.
                    (function(isResp, respDim, isScale, scaleType) {		
                        var lastW, lastH, lastS=1;		
                        window.addEventListener('resize', resizeCanvas);		
                        resizeCanvas();		
                        function resizeCanvas() {			
                            var w = lib.properties.width, h = lib.properties.height;			
                            var iw = document.getElementById("prueba").offsetWidth - 23, ih=document.getElementById("prueba").offsetHeight - 23;
                            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
                            if(isResp) {                
                                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                                    sRatio = lastS;                
                                }				
                                else if(!isScale) {					
                                    if(iw<w || ih<h)						
                                        sRatio = Math.min(xRatio, yRatio);				
                                }				
                                else if(scaleType==1) {					
                                    sRatio = Math.min(xRatio, yRatio);				
                                }				
                                else if(scaleType==2) {					
                                    sRatio = Math.max(xRatio, yRatio);				
                                }			
                            }			
                            canvas.width = w*pRatio*sRatio;			
                            canvas.height = h*pRatio*sRatio;
                            canvas.style.width = w*sRatio+'px';			
                            canvas.style.height = h*sRatio+'px';
                            stage.scaleX = pRatio*sRatio;			
                            stage.scaleY = pRatio*sRatio;			
                            lastW = iw; lastH = ih; lastS = sRatio;		
                        }
                    })(true,'both',true,1);	
                }
                </script>