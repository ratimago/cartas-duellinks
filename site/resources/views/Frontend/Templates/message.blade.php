@if(!empty($alert))
    <div class="alert {{ $alert }} text-center" role="alert">
        <strong><i class="glyphicon {{ $icon }} icon"></i> {{ $expression }}</strong>, {{ $message }}
    </div>
@endif