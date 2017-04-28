<div class="input-field col s12 l4">
    <ul id="resumen" class="concesionarios menu-generico hide-on-med-and-down">
        @foreach($states as $state)
            <li {{ (@$active == $state->slug) ? 'class=active' : null }}><a href="{{ route('centerservice.service', ['slug' => $state->slug]) }}">{{ $state->name }}</a></li>
        @endforeach
    </ul>

    <select onchange="location = this.value;" class="hide-on-large-only">
        @foreach($states as $state)
            <option {{ (@$active == $state->slug) ? 'selected='.$state->slug : null }} value="{{ route('centerservice.service', ['slug' => $state->slug]) }}">{{ $state->name }}</option>
        @endforeach
    </select>
</div>