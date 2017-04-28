$(document).on('ready', function(){
    
    /////***  Menu movil  ***/////
    menuMovil();
    
    /////***  Slider del home  ***/////
    sliderHome();
    
    /////***  Slider Generico  ***/////
    sliderGenerico();

    /////***  Funcion que solo destruye multi select en moviles  ***/////
    destruirSelect();
    
    /////***  Selects de formularios  ***/////
    selectFormulario();
    
    /////***  Validacion de formularios  ***/////
    formularios(); 
    
    /////***  Validacion de formulario bolsa de trabajo  ***/////
    formularioBolsaTrabajo(); 
    
    /////***  Validacion de captcha, cuando esta check se llama esta funcion  ***/////
    //recaptchaCallback();
    
    /////***  Slider para la seccion de camiones  ***/////
    sliderCamiones();

    /////***  Scroll generico  ***/////
    scrollGenerico();

    /////***  Galeria interna del blog  ***/////
    galeriaBlog();

    if($(window).width() > 960){
        animaciones();  
    }
    

    /////***  Invitacion para hacer scroll  ***/////
    invitacionScroll();

    //cargandocss(); 

    refacciones();

    ventanModal();

    animacionesScrollSucursales();
});

$(window).on('load', function(){
    /////***  Mapa para concesionarios  ***/////
    mapaConcesionarios();

    /////***  Carga de animaciones canvas en aplicaciones  ***/////
    aplicaciones();

    mandarFooterAbajo();

    animacionesScrollMenuPostventa();
});

/////***  Extend para animaciones de css  ***/////
$.fn.extend({
    animateCss: function (animationName, clase) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            $(this).addClass(clase);
        });
    }
});

/////***  Extend para mostrar u ocultar campo de formularios dependiendo de que opcion se escoja de un select  ***/////
$.fn.extend({
    elementoMostrar: function (elementoMostrar, value) {
        this.on('change', function(){
            var valor = $(this).val();

            if(valor == value){
                elementoMostrar.removeClass('ocultar').animateCss('fadeInUp');
            }else if(valor != value && elementoMostrar.hasClass('ocultar')){
                
            }else{
                elementoMostrar.animateCss('fadeOutDown', 'ocultar');
                return false;
            }
        })
    }
});

function menuMovil(){
    $(".button-collapse").sideNav();
}

function sliderHome(){
    if($('main').hasClass('home')){
        $("#slider-home").owlCarousel({
            autoplay: false,
            autoplayTimeout : 5000,
            autoplayHoverPause : true,
            autoHeight:true,
            dots: false,
            items: 1,
            loop:false,
            nav:true,
            navText : ['<i class="material-icons flechas-sliders">&#xE408;</i>','<i class="material-icons flechas-sliders">&#xE409;</i>'],
            themeClass : 'slider-principal',
            video:true
        });
    }
}

function sliderGenerico(){
    $("#slider-generico").owlCarousel({
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout : 4000,
        autoplayHoverPause : true,
        autoHeight:false, 
        items: 1,
        loop:true,
        nav:true,
        navText : ['<i class="material-icons flechas-sliders">&#xE408;</i>','<i class="material-icons flechas-sliders">&#xE409;</i>'],
        themeClass : 'slider-generico',
        responsive:{
            0:{
                stagePadding: 0,
                margin: 0
            },
            600:{
                stagePadding: 200,
                margin: 18
            },
            960:{
                stagePadding: 100,
                margin:36
            }
        }
    });
}

function destruirSelect(){
    if($(window).width() <= 992){
        $('#camiones').material_select('destroy');
        $('#camiones').addClass('browser-default').css('height', 'auto');
    }else{
        $('#camiones').material_select();
        $('#camiones').removeClass('browser-default');
    }
}

function selectFormulario(){ 
    $('select').material_select();
    
    $(window).resize(function(){
        destruirSelect();
    });
}

function formularios(){
    $("#formulario-enviar").validate({
        ignore: ".ignore",
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            /*area_code: {
                required: true,
                minlength: 3
            },*/
            phone: "required",
            'truck[]':{
                required: true,
                minlength: 1
            },
            hiddenRecaptcha: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        },
        errorElement : 'div',
        messages: {
            name: "Escribe tu nombre",
            email: "Escribe un correo válido",
            /*area_code: {
                required: "Escribe tu lada",
                minlength: jQuery.validator.format("Min. {0}, caracteres")
            },*/
            phone: "Escribe tu telefono",
            'truck[]': "Escoge un camion",
            hiddenRecaptcha: "Valida el captcha"
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element.parents(".input-field").children('input'));
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

    $('.select-wrapper.icons').on('change', 'select.icons', function(){
        if($(this).hasClass('error')){
            $('#camiones-error').remove();
        } 
    });

    /////***  Vaidacion de campos solo numeros  ***/////
    $('.solo-numero').keydown(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });

    /////***  Oculta o mouestra elementos del formularios usa extend  ***/////
    $('select#cargo').elementoMostrar($('#cargo-empresarial'), 8);
    $('select#material').elementoMostrar($('#material-transportar'), 9); 
}

function formularioBolsaTrabajo(){ 
    $("#bolsa-trabajo").validate({
        ignore: ".ignore",
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10
            },
            hiddenRecaptcha: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        },
        errorElement : 'div',
        messages: {
            name: "Escribe tu nombre",
            email: "Escribe un correo válido",
            phone: {
                required: "Escribe tu telefono",
                minlength: jQuery.validator.format("Min. {0}, caracteres")
            },
            hiddenRecaptcha: "Valida el captcha"
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element.parents(".input-field").children('input'));
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

    /////***  Vaidacion de campos solo numeros  ***/////
    $('.solo-numero').keydown(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
}

function recaptchaCallback() {
    $('#hiddenRecaptcha').valid();
};

function sliderCamiones(){
    /////***  Se implementa scroll horizontal  ***/////
    /*$('#menu-camiones, #menu-camiones-interna').on('mousewheel', function(event) {
        this.scrollLeft -= (event.delta * 0);     
        event.preventDefault(); 
    });*/ 

    /////***  Se pone guapa la barra del scroll  ***/////
    $("#menu-camiones, #menu-camiones-interna").mCustomScrollbar({
        axis:"x",
        setLeft: '0', 
		theme:"dark-thin",
    });

    /*$('.menu-camiones-fixed').slideUp();*/

    $('#menu-camiones-todo-sitio').on('click',function(){
        $('.menu-camiones-fixed').slideToggle();
        $('.mCSB_container').css("left", "0");
    });

    if($('main').hasClass('camiones')){
        $('html, body').animate({"scrollTop": $('#scroll').position().top-17}, 500);
    }
}

function scrollGenerico(){
    /////***  Se pone guapa la barra del scroll para cualquier barra de la pagina  ***/////
    $("#resumen").mCustomScrollbar({
	    advanced:{autoExpandHorizontalScroll:true}, 
        autoHideScrollbar:true,
		autoExpandScrollbar:false,
        axis:"y",
		theme:"dark-thin"
    });
}

function mapaConcesionarios(){
    /////***  Solo se carga en concesionarios  ***/////
    if($('main').hasClass('concesionarios')){
        var localizacion = [];
        var marcas = [];

        $('.coordenadas-mapa').children('div').each(function(){
            coordenada = [$(this).data("titulo"), $(this).data("direccion"), $(this).data("telefonos"),$(this).data("latitud"), $(this).data("longitud")];
            localizacion.push(coordenada);
        });      

        centarMarcas = new google.maps.LatLngBounds();

        map = new google.maps.Map(document.getElementById("map"));

        for (i = 0; i < localizacion.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(localizacion[i][3], localizacion[i][4]),
                map : map
            });

            marcas.push(marker);

            centarMarcas.extend(marker.position);

            var infowindow = new google.maps.InfoWindow({
                content: ''
            });

            var contador = 0;


            var contenidoPinHtml = '<div class="titulopin texto-rojo">' + localizacion[i][0] + '</div>';
                    infowindow.setContent(contenidoPinHtml);         
                    infowindow.open(map, marker);

                    contador ++;
                    
                    var telefonos = localizacion[i][2].replace(/\,/i, "<br>");
                    var informacion ='<p>'+ localizacion[i][0] + ', '+ localizacion[i][1] +'</p>' +
                                    '<p>'+ telefonos +'</p>';

            /*google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    var contenidoPinHtml = '<div class="titulopin texto-rojo">' + localizacion[i][0] + '</div>';
                    infowindow.setContent(contenidoPinHtml);         
                    infowindow.open(map, marker);

                    contador ++;
                    
                    var telefonos = localizacion[i][2].replace(/\,/i, "<br>");
                    var informacion ='<p>'+ localizacion[i][0] + ', '+ localizacion[i][1] +'</p>' +
                                    '<p>'+ telefonos +'</p>';

                    if(contador == 1){
                        $('#direccion').fadeIn(500, function(){
                            $('#direccion').append(informacion);
                        });
                    }else{
                        $('#direccion').fadeOut(500, function(){
                            $('#direccion').empty();

                            $('#direccion').fadeIn(500, function(){
                                $('#direccion').append(informacion); 
                            });
                            
                        });
                    }
                }
	        })(marker, i));*/
        }

        map.setZoom(3);

        map.fitBounds(centarMarcas); 
    }
}

function galeriaBlog(){
    if($('main').hasClass('interna-blog')){
        $('#galleryContainer').DOPThumbnailGallery({
            'ID': 1,
            'SettingsDataType': 'JSON',
            'SettingsFilePath': '/json/settings.json',
            'ContentDataType': 'HTML'
        });
    }
}

function aplicaciones(){
    if($('main').hasClass('aplicaciones')){
        /////***  Esta funcion no esta definida dentro de este js pero es la que inicia el canvas  ***/////
        init();
    }
}

function animaciones(){
    //iniciando scrollmagic
    var controller = new ScrollMagic.Controller();

    //Animacion del header solo para escritorio
        //var barraNabegacion = new ScrollMagic.Scene({
        //    triggerElement: '.slider',   //Comienzo de la animacion
        //    triggerHook: 0.12,       //Altura del indicador para comezar animacion
        //    reverse: true           //Controla animacion de solo una vez o simpre
        //})
        //.setClassToggle('nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i, .navbar-fixed, ul.right li.pagina-principal a, ul.right li a, .brand-logo.pagina-principal img', 'animacionNav') //Se agrega animacion a titulos
        //.addIndicators({            //indicadores
        //    name: 'Animacion del nav',       //nombre de animacion
        //    colorTrigger: 'pink',    //color del indicador de la animacion
        //    indent:10,              //distancia entre el indicador y la barra de navegacion
        //    colorStart: 'green',    //Color del marcador del inicio de la animacion
        //    colorEnd: 'purple'      //Color del termino de la animacion
        //})
        //.addTo(controller); 

        //Animacion para el slider
        var pinIntroSlider = new ScrollMagic.Scene({
            triggerElement: '.panel.slider',
            duration: '70%',
            triggerHook: 0.12
        })
        .setPin('.panel.slider', {pushFollowers: false})
        //.addIndicators({            //indicadores
        //    name: 'Pin',       //nombre de animacion
        //    colorTrigger: 'blue',    //color del indicador de la animacion
        //    indent:0,              //distancia entre el indicador y la barra de navegacion
        //    colorStart: 'orange',    //Color del marcador del inicio de la animacion
        //    colorEnd: 'yellow'      //Color del termino de la animacion
        //})
        .addTo(controller);

        //Animacion para los titulos del home
    $('.panel.titulos').each(function(){
        //creando la escena
        var miEscena = new ScrollMagic.Scene({
            triggerElement: this,   //Comienzo de la animacion
            duration: '70%',        //Duracion de animacion en pixeles de alto
            triggerHook: 0.6,       //Altura del indicador para comezar animacion
            reverse: true           //Controla animacion de solo una vez o simpre
        })
        .setClassToggle('.animacionTitulo', 'fadeInUp') //Se agrega animacion a titulos
        //.addIndicators({            //indicadores
        //    name: 'fadeInUp',       //nombre de animacion
        //    colorTrigger: 'red',    //color del indicador de la animacion
        //    indent:10,              //distancia entre el indicador y la barra de navegacion
        //    colorStart: 'green',    //Color del marcador del inicio de la animacion
        //    colorEnd: 'purple'      //Color del termino de la animacion
        //})
        .addTo(controller);
    })

    //Efecto de zoom pra logotipo
    var efectoDeZoom = new TimelineMax();
    efectoDeZoom.from('.logotipo img', 1, {scaleX:0, scaleY:0, autoAlpha: 0}); 

    var efectoDeZoomLogotipoHome = new ScrollMagic.Scene({
            triggerElement: '.logotipo',
            triggerHook: 1,
            duration: '80%'
        })
        .setTween(efectoDeZoom)
        .addTo(controller);

    //Efecto Acerca de
    var efectoDeLista = new TimelineMax();
    efectoDeLista
        .from('.lista-animada .izquierda', 1, {x:-100, autoAlpha: 0})
        .from('.lista-animada .abajo', 1, {y:-100, autoAlpha: 0})
        .from('.lista-animada .arriba', 1, {y:100, autoAlpha: 0})
        .from('.lista-animada .derecha', 1, {x:100, autoAlpha: 0});

    var efectoDeZoomLogotipoHome = new ScrollMagic.Scene({
            triggerElement: '.acercaDe',
            triggerHook: 0.8,
            duration: '80%'
        })
        .setTween(efectoDeLista)
        .addTo(controller);


    //Efecto parallax
    $('.parallax').each(function(){
        var parallaxTl = new TimelineMax();
        parallaxTl
            .from(this.children[1], 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
            .from(this.children[0], 1, {y: '-50%', ease:Power0.easeNone}, 0);

        var efectoParallaxHome = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: '80%'
        })
        .setTween(parallaxTl)
        .addTo(controller)
    })
}

function invitacionScroll(){
    if($('main').hasClass('aplicaciones aplicacion-camiones') || $('main').hasClass('promociones') || $('main').hasClass('postventa')){
        $('#invitacion-scroll').remove();
    }else{
        if($(document).height() > ($(window).height() + ($(window).height()*0.5))){
            $(window).scroll(function (event) {
                if($(window).scrollTop() < 200){
                    $('#invitacion-scroll').fadeIn();
                }else{
                    $('#invitacion-scroll').fadeOut();
                }
            });
        }else if($(document).height() == $(window).height()){
            $('#invitacion-scroll').remove();
        }else{
            $('#invitacion-scroll').remove();
        }

        $('#invitacion-scroll').on('click', function(){
            $("html, body").animate({ "scrollTop": $(window).height() }, 1000);
        })
    }

    //console.log('ancho del documento', $(document).height());
    //console.log('ancho de la ventana', $(window).height());
    //console.log('ancho de la ventana mas la mitad', ($(window).height() + ($(window).height()*0.5)));
}

function refacciones(){
    $('.collapsible-refacciones').collapsible({
        onOpen: function(el) { 
            $('.carousel').carousel({
                padding: 0 
            });
            mandarFooterAbajo();
        },onClose: function(el) { 
            mandarFooterAbajo();
        },
    });
    $('.carousel').carousel({
        padding: 0 
    });
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
}

function mandarFooterAbajo(){
    var ventana = $(window).height();
    var footer = $('footer').height();
    var header = $('header').height();
    var main = $('main').height();

    var alturaMinima = main + footer + header;

    if(!$('main').hasClass('garantias')){
        if(alturaMinima < ventana){
            $('main').height(ventana - footer - header - 40);
        }
    }

    console.log(footer, header)
}

function animacionesScrollMenuPostventa(){
    if($('main').hasClass('bueno')){
        $('html, body').animate({"scrollTop": $('#scroll').position().top-122}, 500);
    }
}

function animacionesScrollSucursales(){
    if($('main').hasClass('concesionarios')){
        $('html, body').animate({"scrollTop": $('#scroll').position().top-122}, 500);
    }
}

function ventanModal(){
    $('.modal').modal({
        startingTop: '1%', // Starting top style attribute
        endingTop: '0%',
    }); 
}

function cargandocss() {
    function loadjscssfile(filename, filetype){
                if (filetype=="js"){ //if filename is a external JavaScript file
                    var fileref=document.createElement('script')
                    fileref.setAttribute("type","text/javascript")
                    fileref.setAttribute("src", filename)
                }
                else if (filetype=="css"){ //if filename is an external CSS file
                    var fileref=document.createElement("link")
                    fileref.setAttribute("rel", "stylesheet")
                    fileref.setAttribute("type", "text/css")
                    fileref.setAttribute("href", filename)
                }
                if (typeof fileref!="undefined")
                    document.getElementsByTagName("body")[0].appendChild(fileref)
            }
            loadjscssfile("/css/estilos.min.css", "css") ////dynamically load and add this .css file
            loadjscssfile("/css/estilos-head.min.css", "css") ////dynamically load and add this .css file
}
