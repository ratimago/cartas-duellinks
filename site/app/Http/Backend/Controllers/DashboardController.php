<?php namespace App\Http\Backend\Controllers;

use App\Http\Backend\Repositories\FormRepo;
use App\Http\Backend\Repositories\PromotionRepo;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    protected $sectionName;

    /*
     * ================ Vista de panel general de administración ================
     */
    public function index()
    {
        return view('Backend.Dashboard.home');
    }

    /*
     * ================ Panel del Sitio Principal ================
     */
    public function site(FormRepo $repo, $id)
    {
        $this->sectionName = $repo->setSectionName();
        session()->put('backend.site.current', $id); // sesion del sitio
        $data = [
            'forms' => [$repo->getForms($id)],
            'downloads' => []
        ];
        return view('Backend.Dashboard.Site', $data)
            ->with('message', \Session::get("{$this->sectionName}.message"))
            ->with('warning', \Session::get("{$this->sectionName}.warning"));
    }

    /*
     * ================ 401 Acceso Denegado ================
     */
    public function error401()
    {
        return view('Backend.Errors.401');
    }

    public function redirect(Request $request)
    {

        if (\Request::ajax()) {
            session()->put('backend.site.current', 1); // sesion del sitio
        }
    }

}
