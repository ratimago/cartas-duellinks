/**
 * Created by scalf on 2/11/16.
 */
$(document).ready(function () {
    var MaxInputs = 10; //Número Maximo de Campos
    var contenedor = $("#listaCharacteristics"); //ID del contenedor
    var AddButton = $("#agregarCharacteristic"); //ID del Botón Agregar

    //var x = número de campos existentes en el contenedor
    var x = $("#contenedor div").length + 1;
    var FieldCount = x - 1; //para el seguimiento de los campos

    $(AddButton).click(function (e) {
        if (x <= MaxInputs) //max input box allowed
        {
            FieldCount++;
            //agregar campo
            $(contenedor).append('<div><input type="text" name="mitexto[]" id="campo_' + FieldCount + '" placeholder="Texto ' + FieldCount + '"/><a href="#" class="eliminar">&times;</a></div>');
            x++; //text box increment
        }
        return false;
    });

    $("body").on("click", ".eliminar", function (e) { //click en eliminar campo
        if (x > 1) {
            $(this).parent('div').remove(); //eliminar el campo
            x--;
        }
        return false;
    });
});