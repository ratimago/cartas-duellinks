<?php

namespace App\Http\Frontend\Controllers;

use Illuminate\Http\Request;
use Google\Spreadsheet\DefaultServiceRequest;
use Google\Spreadsheet\ServiceRequestFactory;
use Google\Spreadsheet\Google_Client;
use Google\Spreadsheet\Google_Service_Drive_About;
use Google\Spreadsheet\SpreadsheetService;
use Google\Auth\Credentials;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class Drive extends Controller
{

//
    /*
     * Aquí van los datos de la sección credenciales del proyecto que creamos con Google Console
     * Modificarlos según su propia direccion de correo y Id de cliente
     */
    private $nombreAplicacion = "Php-Spreadsheet";
    private $direccionCorreo = "cecilia.hernandez@masclicks.com.mx";
    private $idCliente = "9e0a271e191abb4367816c171d1eb08baf1e486e";

// Nombre del SpreadSheet creada
    private $nombreSpreahSheet = "PHP & Spreadsheets";
// Nombre de hoja de cálculo
    private $hojaCalculo = "Usuarios";

    private $scope = array('https://docs.google.com/a/masclicks.com.mx/spreadsheets/d/1fnb-peIP-NC5SYWM92u2MVurrQ4TlNfWDRJ1EucxU5g/edit?usp=sharing');

// Inicializamos Google Client
    private $client;
    private $cred;

    public function __construct()
    {
        $this->client = new Google_Client();
        $this->client->setApplicationName($this->nombreAplicacion);
        $this->client->setClientId($this->idCliente);
    }


    public function Send()
    {
        // credenciales, scope y archivo p12. Agregar el correcto Path al archivo p12
        $this->cred = new Credentials(
            $this->direccionCorreo,
            $scope,
            file_get_contents('PATH TO P12 file')
        );

        $this->client->setAssertionCredentials($this->cred);

// si expiro el access token generamos otro
        if ($this->client->isAccessTokenExpired()) {
            $this->client->getAuth()->refreshTokenWithAssertion($this->cred);
        }

// Obtenemos el access token
        $obj_token = json_decode($this->client->getAccessToken());
        $accessToken = $obj_token->access_token;

// Inicializamos google-spreadsheet-client
        $serviceRequest = new DefaultServiceRequest($accessToken);
        ServiceRequestFactory::setInstance($serviceRequest);

//Obtenemos los Spreadsheets disponibles para las credenciales actuales
        $spreadsheetService = new SpreadsheetService();
        $spreadsheetFeed = $spreadsheetService->getSpreadsheets();

// Obtenemos la spreadsheet por su nombre
        $spreadsheet = $spreadsheetFeed->getByTitle($this->nombreSpreahSheet);

// Obtenemos las hojas de cálculo de la spreadsheet obetenida
        $worksheetFeed = $spreadsheet->getWorksheets();

// Obtenemos la hoja de cálculo por su nombre
        $worksheet = $worksheetFeed->getByTitle($this->hojaCalculo);
        $listFeed = $worksheet->getListFeed();

        /*
         * Array de datos a agregar.
         * Observar que el valor de la claves del array que representan los encabezados
         * de las columnas van en minúsculas, en vez de Email sería email.
         * Esto es porque los encabezados de columna deben coincidir exactamente
         * con lo que fue devuelto por la API de Google y no por lo que se ve en Google Drive.
         */

        $dataAgregar = array('nombre' => 'Juan',
            'email' => 'Martinez',
            'telefono' => '1567890'
        );

// Agregar datos
        $listFeed->insert($dataAgregar);
    }


}
