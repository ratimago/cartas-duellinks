    @if($type == 'intranet')
        <h3>Carga de archivos para la Intranet Isuzu</h3>
        <i>Arrastre los archivos que desea subir a la intranet a cualquier parte de la ventana para agregarlos su lista o galeria.</i><br>
    @else

        <h4>Cargar de Archivos</h4>
        <i>Arrastre los archivos a cualquier parte de la ventana para agregarlos su lista o galeria.</i><br>

        <?php
        $block = null;
        if ($gallery->imageable_type == 'App\Http\Entities\Block') {
            $block = \App\Http\Entities\Block::find($gallery->imageable_id);
        }
        ?>

        @if(isset($block))

            @if($block->slug == 'slider') <!-- Slider Home-->
                <span class="label label-primary">Se recomienda que las imágenes tengan una resolución de:</span><br>
                <span class="label label-primary">1500px de ancho por 524 px de altura para los fondos</span><br>
                <span class="label label-primary">y 653 px de ancho por 520 px de altura para los camiones en formato PNG (sin fondo)</span>
            @elseif($block->slug == 'promociones')<!-- Promociones -->
                <span class="label label-primary">Se recomienda que las imágenes tengan una resolución de 650px por 380px.</span>
                <span class="label label-primary">El peso máximo de las imágenes es de 150 KB.</span>
            @elseif($block->slug == 'tips-isuzu') <!--Tips Isuzu-->
                <span class="label label-primary">Se recomienda que las imágenes tengan una resolución de 223px por 217px.</span>
                <span class="label label-primary">El peso máximo de las imágenes es de 150 KB.</span>
            @endif

            @if($block->staticmenu_id == 1) <!--A cerca de -->
                    <span class="label label-primary">Se recomienda que las imágenes tengan una resolución de 223px por 217px.</span>
                    <span class="label label-primary">El peso máximo de las imágenes es de 150 KB.</span>
            @endif


        @endif

        @if($gallery->name == 'block-2')<!-- Refacciones Isuzu -->
                <span class="label label-primary">Se recomienda que las imágenes tengan una resolución de 700px por 750px.</span>
                <span class="label label-primary">El peso máximo de las imágenes es de 150 KB.</span>

        @else
                <span class="label label-primary">Se recomienda que las imágenes tengan una resolución de 650px por 380px.</span>
                <span class="label label-primary">El peso máximo de las imágenes es de 150 KB.</span>
        @endif

    @endif
<br/>
<br/>

{!!Form::Open([
    'url'           =>  route('gallery.cargar', compact('id')),
    'id'            => 'fileupload',
    'files'         => true,
    'data-url-ack'  => route('gallery.ack', compact('id'))
])!!}
        <!-- Redirect browsers with JavaScript disabled to the origin page -->
<noscript><input type="hidden" name="redirect" value="https://blueimp.github.io/jQuery-File-Upload/"></noscript>
<!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->
<div class="row fileupload-buttonbar">
    <div class="col-lg-7">
        <!-- The fileinput-button span is used to style the file input field as button -->
            <span class="btn btn-default fileinput-button">
                <i class="glyphicon glyphicon-plus"></i>
                <span>Agregar</span>
                <input type="file" name="files[]" multiple>
            </span>
        <button type="submit" class="btn btn-default start">
            <i class="glyphicon glyphicon-upload"></i>
            <span>Comenzar</span>
        </button>
        <button type="reset" class="btn btn-default cancel">
            <i class="glyphicon glyphicon-ban-circle"></i>
            <span>Cancelar</span>
        </button>
        <!-- The global file processing state -->
        <span class="fileupload-process"></span>

    </div>
    <!-- The global progress state -->
    <div class="col-lg-5 fileupload-progress fade">
        <!-- The global progress bar -->
        <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-success" style="width:0%;"></div>
        </div>
        <!-- The extended global progress state -->
        <div class="progress-extended">&nbsp;</div>
    </div>
</div>

<!-- The table listing the files available for upload/download -->
<div class="panel panel-default">
    <div class="table-responsive">
        <table role="presentation" class="table table-striped table-hover">
            <thead>
            <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Tamaño</th>
                <th>Progreso</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody class="files">
            <tr>
                <td colspan="5">&nbsp;</td>
            </tr>
            </tbody>
        </table>
    </div>
</div>

{!!Form::close()!!}

        <!-- The blueimp Gallery widget -->
<div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls" data-filter=":even">
    <div class="slides"></div>
    <h3 class="title"></h3>
    <a class="prev">‹</a>
    <a class="next">›</a>
    <a class="close">×</a>
    <a class="play-pause"></a>
    <ol class="indicator"></ol>
</div>
<!-- The template to display files available for upload -->
<script id="template-upload" type="text/x-tmpl">
{% for (var i=0, file; file=o.files[i]; i++) { %}
    <tr class="template-upload fade">
        <td>
            <span class="preview"></span>
        </td>
        <td>
            <p class="name">{%=file.name%}</p>
            <!-- <strong class="error text-danger"></strong> -->
        </td>
        <td>
            <p class="size">Procesando archivo...</p>
        </td>
        <td>
            <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="progress-bar progress-bar-success" style="width:0%;"></div></div>
        </td>
        <td>
            {% if (!i && !o.options.autoUpload) { %}
                <button class="btn btn-primary start" >
                    <i class="glyphicon glyphicon-upload"></i>
                    <span>Comezar</span>
                </button>
            {% } %}
            {% if (!i) { %}
                <button class="btn btn-warning cancel">
                    <i class="glyphicon glyphicon-ban-circle"></i>
                    <span>Cancelar</span>
                </button>
            {% } %}
        </td>
    </tr>
{% } %}

</script>
<!-- The template to display files available for download -->
<script id="template-download" type="text/x-tmpl">
{% for (var i=0, file; file=o.files[i]; i++) { %}
    <tr class="template-download fade">
        <td>
            <span class="preview">
                {% if (file.thumbnailUrl) { %}
                    <a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" data-gallery><img src="{%=file.thumbnailUrl%}"></a>
                {% } %}
            </span>
        </td>
        <td>
            <p class="name">
                {% if (file.url) { %}
                    <a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" {%=file.thumbnailUrl?'data-gallery':''%}>{%=file.name%}</a>
                {% } else { %}
                    <span>{%=file.name%}</span>
                {% } %}
            </p>
        </td>
        <td>
            {% if (file.error) { %}
                <div><span class="label label-danger">Error</span> {%=file.error%}</div>
            {% } %}
        </td>
        <td>
            <span class="size">{%=o.formatFileSize(file.size)%}</span>
        </td>
        <td>
            {% if (!file.deleteUrl) { %}
                <button class="btn btn-warning cancel">
                    <i class="glyphicon glyphicon-ban-circle"></i>
                    <span>Cancelar</span>
                </button>
            {% } %}
        </td>
    </tr>
{% } %}

</script>