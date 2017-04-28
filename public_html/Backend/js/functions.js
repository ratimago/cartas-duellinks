var taskMultiSelect  = $(".task-multi-select");
var checkSelectAll  = $(".multi-select-all");
var checkSelected   = $(".select-checkbox");
var action_url   = $(".btn_site");

var scrollBar = function(){
    if ($(document).height() > $(window).height()) { 
        $('footer').addClass('relative');
    } 
    else {
        $('footer').addClass('fixed');
    }
}

function order_your_master(){
    var trs_prev = [];
    var trs_nuevo = [];
    var trs_ids = [];
    if( $("#articles_table").length > 0 ) {
        console.log('table articles');
        var type = $("#articles_table").data('type');
        Sortable.create(document.getElementById("articles_table"), {
            handle: ".my_handler",
            onStart: function (/**Event*/evt) {
                $("#articles_table tr").each(function () {
                    trs_prev.push($(this).attr("data-pos"));
                });
                console.log(trs_prev);
            },
            // dragging ended
            onEnd: function (/**Event*/evt) {
                $("#articles_table tr").each(function () {
                    trs_nuevo.push($(this).attr("data-pos"));
                    trs_ids.push($(this).attr("data-id"));
                });
                //page = $("#tabla_resultados").data("page");
                console.log('prev ' + trs_prev + ' nuevo '+ trs_nuevo + ' ids '+ trs_ids);
                $.post("/mcPanel/"+type+"/reorder",{
                    prev_array : trs_prev,
                    new_array : trs_nuevo,
                    ids_array : trs_ids
                },function(data){
                    //location.reload(true);
                    console.log(data);

                    var x = 0;
                    $("#articles_table tr").each(function () {
                        $(this).attr("data-pos",data[x]);
                        console.log($(this));
                        x++;
                    });

                });
                trs_prev = [];
                trs_nuevo = [];
                trs_ids = [];
            },
        });
    }
}

var multiSelectAll = function(event)
{
    checkSelected.prop('checked',checkSelectAll.prop("checked"));
};

var multiSelectGallery = function(event)
{
    $( "#multiSelect" ).click(function() {
        var labels = $('[data-toggle="buttons"] label');
        if($(this).is(':checked')){
            labels.addClass('active');
        } else {
            labels.removeClass('active');
        }
    });
};


/*
 ================== Acción a ejecutar desde un panel ==================
 */
var multiSelectAction = function (event)
{
    var formMultiSelect = $("#form-multi-select");
    // Limpiamos el formulario
    formMultiSelect.find("input[class=hidden-check]").detach();
    // Establecemos el action del formulario
    formMultiSelect.prop('action', $(this).data("href"));

    // Asignamos los nuevos valores
    var selected = $(".select-checkbox:checked");

    if (selected.length > 0) {

        if($(this).attr('id') == 'visibility'){
            $( "#dialog-confirm-visibilidad" ).dialog({
                resizable: false,
                height: "auto",
                width: 400,
                modal: true,
                buttons: {
                    "Cambiar Visibilidad": function() {
                        selected.each(function () {
                            var input = '<input class="hidden-check" name="selected[]" type="hidden" value="' + this.value + '" />';
                            formMultiSelect.append(input);
                        });

                        // enviamos el formulario
                        formMultiSelect.submit();
                        $(this).dialog("close");
                        //}
                        //return false;
                    },
                    Cancel: function() {
                        $( this ).dialog( "close" );
                    }
                }
            });
        }else if($(this).attr('id') == 'delete'){
            $( "#dialog-confirm" ).dialog({
                resizable: false,
                height: "auto",
                width: 400,
                modal: true,
                buttons: {
                    "Eliminar Elementos": function() {
                        selected.each(function () {
                            var input = '<input class="hidden-check" name="selected[]" type="hidden" value="' + this.value + '" />';
                            formMultiSelect.append(input);
                        });

                        // enviamos el formulario
                        formMultiSelect.submit();
                        $(this).dialog("close");
                    },
                    Cancel: function() {
                        $( this ).dialog( "close" );
                    }
                }
            });
        }

        /*var r = confirm("Confirme la accion sobre los " + selected.length + " elementos seleccionados: " + $(this).data("action"));
        if (r) {
            selected.each(function () {
                var input = '<input class="hidden-check" name="selected[]" type="hidden" value="' + this.value + '" />';
                formMultiSelect.append(input);
            });

            // enviamos el formulario
            formMultiSelect.submit();
        }*/
    }
    return false;
};

/*
 ================== Acción a ejecutar desde un panel ==================
 */
var sendUploadAck = function (e,data)
{
    var result              = data.result.files[0];
    var url                 = $('#fileupload').data('url-ack');

    var uploaderContainer   = $("#gallery-container");
    var uploaderMultiSelect = $('.multiselect');

    if(!result.error) {
        //if(result.size < 153600) {

            var refreshGallery = function (response) {
                if (response) {
                    var row = uploaderContainer.find('.row');

                    console.log(row);

                    info = row.find('i');
                    if (info) info.detach();

                    row.append(response);

                    uploaderMultiSelect = $('.multiselect');
                }
            };

            $.post(url, {
                'name': result.name
            }/*,refreshGallery*/);
    }
};

/*
 ================== Acción a ejecutar desde un panel ==================
 */

if ( $('#multiSelect').length ){
    function setUploader()
    {
        var uploaderSelectAll       = $('#multiSelect');
        var uploaderFileUpload      = $('#fileupload');
        var uploaderMultiSelect     = $('.multiselect');
        var uploaderFormMultiSelect = $('.formMultiSelect');

        // Seleccionar/deseleccionar elementos
        uploaderSelectAll.on('click',function(event) {
            uploaderMultiSelect.prop('checked', uploaderSelectAll.prop('checked'));
        });

        uploaderFormMultiSelect.submit(function(event) {
            var form = $(this);
            var count = 0;
            uploaderMultiSelect.each(function() {
                if($(this).prop('checked') == true) {
                    var field = '<input name="multiselect[]" type="hidden" value="'+this.value+'"/>';
                    $(field).appendTo(form);
                    count++;
                }
            });

            if(!count) return false;
        });

        uploaderFileUpload
            .bind('fileuploaddone', sendUploadAck)
            .fileupload({
                maxChunkSize: 1*1024*1024, // 4 MB
                sequentialUploads: true,
                acceptFileTypes: /(\.|\/)(gif|jpg|jpeg|png)$/i,

                stop: function(){
                    //location.reload(true);
                    $('#msj_promo').removeClass('hide');
                    setTimeout(function(){location.reload(true)}, 2000);
                }
            });
    }
}
/*
 ================== Previsualizar imagenes al cargar ===============
 */
function readImage(file, element)
{
    var image, reader;
    reader = new FileReader();
    image = new Image();
    reader.readAsDataURL(file);
    reader.onload = function(_file) {
        image.src = _file.target.result;
        image.onload = function() {
            var h, n, s, t, w;
            w = this.width;
            h = this.height;
            t = file.type;
            n = file.name;
            s = ~~(file.size / 1024) + 'KB';
            element.siblings('.thumbnail').fadeOut();
            element.siblings('.thumbnail').fadeIn();
            element.siblings('.thumbnail').children('img').attr("src", this.src);
            console.log( element.siblings('thumbnail').html() );
        }
    }
}

/*
 ================== Imagen Previa ===============
 */
function previewImage()
{
    $(".image-container input[type='file']").change(function() {
        var F, i, _i, _len;
        if (this.disabled) {
            return alert("Â¡Carga de archivos no soportado!");
        }
        F = this.files;
        if (F && F[0]) {
            for (i = 0; i < F.length; i++) {
                readImage(F[i], $(this));
            }
        }
    });
    if( $(".image-container input[type='file']").length > 0 ){
        if( $(".image-container input[type='file']").val().length === 0 ){
            console.log( "entro por que hay algo que no me gusta" );
        }
    }
}

/*
 ================== Ordenar galerías ===============
 */
var orderSlider = function ()
{
    $("#sortable").sortable({
        update: function () {
            var neworder = [];
            $.each($('#sortable li'), function (i, val) {
                neworder[i] = $(this).attr("id");
            });

            $.post("/mcPanel/" + $(this).data('content') + "/order",{
                'order': neworder
            }, function (data) {
                console.log(data);
            });
        }
    });
};

/*
 ================== Editor de texto ===============
 */
function tinyMce()
{
    // tinymce
    tinymce.init({
        selector: ".text_rich",
        theme: "modern",
        plugins: ["advlist autolink lists link image charmap preview hr anchor pagebreak", "searchreplace wordcount visualblocks visualchars code fullscreen", "insertdatetime media nonbreaking save table contextmenu directionality", "paste textcolor colorpicker textpattern filemanager template"],
        toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image filemanager template",
        toolbar2: "preview media | forecolor backcolor",
        image_advtab: true,
        removed_menuitems: 'newdocument',
        language: 'es',
        /*templates : [
         {
         title : "",
         url : "",
         description: ""
         },
         {
         title : "Paragraph Examples",
         url : "../../vendor/tinymce/templates/paragraph_example.html",
         description: "Plantilla de apoyo para la creaciÃ³n de parrafos"
         },
         {
         title : "Water Security Description" ,
         url : "../../vendor/tinymce/templates/water_security_example.html",
         description: "Plantilla de apoyo para la descripciÃ³n de la seccion de Water Security"
         }
         ]*/
    });
}


/*
 ================== Imagen Previa ===============
 */
function datePicker()
{
    console.log('datePick');
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
        weekHeader: 'Sm',
        dateFormat: "DD dd 'de' MM 'de' yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
    $(".datepicker").datepicker({
        dateFormat: "yy-mm-dd"
    });
}

var redirect_action = function (){
    var action = $(this).data('action');
    $.post("/mcPanel/redirect",{
                'action': action,
            }, function (data) {
                console.log(data);
                window.location.href = action;
            });
};

/*
 ================== Inicio de funciones ==================
 */
$(document).ready(function() {
    setTimeout( function(){
        scrollBar();
    }, 500);

    // Autocompletados
    //$('#autocomplete-name').on('keyup', autocompletar);
   /* $('body').on('click',function(){
        console.log('autocompleta');
        var ulOpciones = $('body').find('.listSuggestions');
        if(ulOpciones.length==1){
            ulOpciones.remove();
        }
        
    });
    */
    /* Ordenar las clinicas y testimoniales */
    order_your_master();

    // Multiselect
    checkSelectAll.click(multiSelectAll);
    taskMultiSelect.click(multiSelectAction);

    // redirect
    action_url.click(redirect_action);

    multiSelectGallery();
    //noSubmit();
    /////checkSelectAllS.on('click',multiSelectAllSlider);
    orderSlider();
    tinyMce();
    previewImage();
    ///tags();
    datePicker();
    //hiddenCategories();
    setUploader();

    $.support.transition = false;

});
