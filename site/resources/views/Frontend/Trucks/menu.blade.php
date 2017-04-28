<section class="menu-camiones white">
    <div class="row">
        <div class="col s12 center-align">
            <ul id="menu-camiones" class="white">
                @if(isset($trucks))
                    @foreach($trucks as $truck)
                        <li {{ (@$active == $truck->slug) ? 'class=active' : null }}>
                            <a href="{{ route('truck.getTruck', ['slug' => $truck->slug]) }}">
                                <img src="{{ asset('filesUpdates/Camiones/'.$truck->name_profile) }}"
                                     alt="{{ $truck->name }}">

                                <p class="truncate">
                                    <strong>{{ $truck->name }}</strong> {{ \Frontend::getLoadWeight($truck->loading_capacity) }}</p>
                                <!-- Falta poner las toneladas -->
                            </a>
                        </li>
                    @endforeach
                @endif
            </ul>
        </div>
    </div>
</section>

