@if($type != 'intranet')
    <div class="thumbnail">

        @if(isset($slug) && $slug == 'slider')
            <label>Imagen</label>
            <img src="{{asset($gallery->directory.'/'.$element->value)}}" alt="imagen galeria"/>
            @if(isset($element->background))
                <label>Imagen de Fondo</label>
                <img src="{{asset($gallery->directory.'/'.$element->background)}}" alt="imagen galeria"/>
                <span class="pull-right">Cambiar Imagen<input type="checkbox" name="checklogo{{ $element->id }}" class="checklogo{{ $element->id }}" value="1"
                                                         onclick="addEventGalery({{ $element->id }})"></span>
            @endif
        @else

            <img src="{{asset($gallery->directory.'/'.$element->value)}}" alt="imagen galeria"/>

        @endif

        <div class="caption">
            {!!Form::open(['route'=>['gallery.elemento.actualizar',$element->id],'files'=>true,'role'=>'form'])!!}
            @if(isset($slug) && $slug == 'slider')
                <div class="form-group">
                    @if(empty($element->background))
                        {!!Form::label('background','Fondo para tu imagen',['class'=>'control-label'])!!}
                        {!! Form::file("background", ['class'=>'form-control']) !!}
                        {!!$errors->first('background','<div class="text-danger">:message</div>')!!}
                    @else
                        <div class="input-logo-{{ $element->id }}" style="display: none;" id="input-logo-{{ $element->id }}">
                            {!!Form::label('background','Fondo para tu imagen',['class'=>'control-label'])!!}
                            {!! Form::file("background", ['class'=>'form-control']) !!}
                            {!!$errors->first('background','<div class="text-danger">:message</div>')!!}
                        </div>
                    @endif
                </div>
            @endif
            <div class="form-group">
                {!!Form::label('title','Título',['class'=>'control-label'])!!}
                {!!Form::text('title',$element->title,['class'=>'form-control'])!!}
            </div>
            @if(isset($slug) && $slug != 'slider')
                <div class="form-group">
                    {!!Form::label('text','Subtitulo',['class'=>'control-label'])!!}
                    {!!Form::text('subtitle',$element->subtitle, ['class'=>'form-control'])!!}
                </div>
            @endif
            @if($type == 'Promotion' or $type == 'Article' or $type == 'Block')
                <div class="form-group">
                    {!!Form::label('text','Url',['class'=>'control-label'])!!}
                    <label class="label label-primary">Ingresa una URL </label>
                    {!!Form::text('link_text',$element->link_text, ['class'=>'form-control'])!!}
                </div>
            @endif
            @if($type == 'Block')
                @if($gallery->name != 'block-2')
                    <div class="form-group">
                        {!!Form::label('text','Video',['class'=>'control-label'])!!}
                        <label class="label label-primary">Ingresa una URL </label>
                        {!!Form::text('link_href',$element->link_href, ['class'=>'form-control'])!!}
                    </div>
                @endif
            @endif
            <div class="btn-group btn-group-justified">
                <div class="btn-group" data-toggle="buttons">
                    <label class="btn btn-default btn-xs">
                        {!!Form::CheckBox('',$element->id, false, ['class'=>'multiselect'])!!}<span
                                class="glyphicon glyphicon-ok"></span>
                    </label>
                </div>
                <div class="btn-group">
                    <button type="submit" class="btn btn-success btn-xs"><span class="glyphicon glyphicon-refresh"></span></button>
                </div>
                <div class="btn-group">
                    <a class="btn btn-danger tobe_eliminated btn-xs"
                       href="{{route('gallery.elemento.eliminar',$element->id)}}"><span
                                class="glyphicon glyphicon-remove-sign"></span></a>
                </div>
            </div>
            {!!Form::close()!!}
        </div>
    </div>
    @else


    <div class="thumbnail">
        <div class="caption">


            {!!Form::open(['route'=>['gallery.elemento.actualizar',$element->id],'files'=>true,'role'=>'form'])!!}
            <a href="/intranet/archivos/{{$element->value}}"> <img width="70" src="{{asset('images/Docs-icon.png')}}" /></a>
            <div class="form-group">
                {!!Form::label('title','Nombre del archivo',['class'=>'control-label small'])!!}
                {!!Form::text('title',$element->title,['class'=>'form-control'])!!}
            </div>
            <strong class="media-middle small">Archivo: </strong><span class="small">{{$element->value}}</span>
            <strong class="media-middle small">Fecha de subida:</strong> <span class="small">{{$element->created_at}}</span>


            <div class="btn-group btn-group-justified">
                <div class="btn-group" data-toggle="buttons">
                    <label class="btn btn-default btn-xs">
                        {!!Form::CheckBox('',$element->id, false, ['class'=>'multiselect'])!!}<span
                                class="glyphicon glyphicon-ok"></span>
                    </label>
                </div>
                <div class="btn-group">
                    <button type="submit" class="btn btn-success btn-xs"><span class="glyphicon glyphicon-refresh"></span></button>
                </div>
                <div class="btn-group">
                    <a class="btn btn-danger tobe_eliminated btn-xs"
                       href="{{route('gallery.elemento.eliminar',$element->id)}}"><span
                                class="glyphicon glyphicon-remove-sign"></span></a>
                </div>
            </div>
            {!!Form::close()!!}
        </div>
    </div>
@endif