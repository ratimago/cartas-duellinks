<div style="background: black;">
            <div style=" border-bottom: 2px solid red; text-align:center; padding: 10px 0">
                <img src="http://isuzu.desarrollosmasclicks.com/imagenes/isuzu-logo.png" alt="Isuzu"/>
            </div>

            <div style="padding: 20px; color: white; overflow: auto;">
                <h4 style="color:white">Se ha llenado un formulario desde el sitio web <span style="color:red;">Isuzu</span></h4>

                <p style="color:white">A continuación se muestran los datos del Contactante: </p>
                <ul>
                    <li style="color:red;"><span style="color: white;"><b style="display: inline-block; width: 200px;">Nombre:</b> {{ $name }}</span></li>
                    <li style="color:red;"><span style="color: white;"><b style="display: inline-block; width: 200px;">Correo:</b> {{ $email }}</span></li>
                    <li style="color:red;"><span style="color: white;"><b style="display: inline-block; width: 200px;">Lada:</b> {{ $area_code }}</span></li>
                    <li style="color:red;"><span style="color: white;"><b style="display: inline-block; width: 200px;">Teléfono:</b> {{ $phone }}</span></li>
                    <li style="color:red;"><span style="color: white;"><b style="display: inline-block; width: 200px;">Estado:</b> {{ $state_str }}</span></li>
                    <li style="color:red;"><span style="color: white;"><b style="display: inline-block; width: 200px;">Empresa:</b> {{ $company_name }}</span></li>
                    <li style="color:red;"><span style="color: white;"><b style="display: inline-block; width: 200px;">Modelos de Interés:</b> {{ $trucks }}</span></li>
                    <li style="color:red;"><span style="color: white;"><b style="display: inline-block; width: 200px;">Cargo del Contactante:</b>
                        @if(!empty($bussiness_office))
                            {{ $bussiness_office }}
                        @else
                            {{ $other_office }}
                        @endif
                        </span>
                    </li>
                    <li style="color:red;"><span style="color: white;"><b style="display: inline-block; width: 200px;">Tipo de Negocio:</b> {{ $bussiness_type }}</span></li>
                    <li style="color:red;"><span style="color: white;"><b style="display: inline-block; width: 200px;">Material a Transportar:</b>
                            @if(!empty($material_transport))
                                {{ $material_transport }}
                            @else
                                {{ $other_material }}
                            @endif
                        </span>
                    </li>
                    <li style="color:red;"><span style="color: white;"><b style="display: inline-block; width: 200px;">Peso Aprox. Carga:</b> {{ $load_weight }}</span></li>
                    <li style="color:red;"><span style="color: white;"><b style="display: inline-block; width: 200px;">Mensaje:</b> {{ $message_text }}</span></li>
                </ul>
            </div>

            <div style="color: #FFF; padding: 8px 0 5px; clear: both;">
                <div style="padding-top: 10px; border-top: 1px dashed red;">
                    <p style="font-family: arial; margin: 0; text-align: center;"><strong style="color:red">ISUZU</strong> - <span style="font-size: 12px;"> Derechos Reservados 2016</span></p>
                </div>
            </div>
        </div>
