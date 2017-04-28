<?php namespace App\Http\Backend\Helpers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Filesystem\Filesystem;

class Files
{
 
    /*
     * Carga de archivos
     * dir      = crear directorio si no es nulo
     * route    = ruta para cargar los archivos
     * files    = archivos a cargar
     * delete   = archivos a eliminar
     *
    */

    public function uploadFile($params, $dir = null)
    {
        @extract($params);

        // Crear directorio
        if (!is_null($dir))
        {
            File::makeDirectory($dir, 0777, true);
        }

        $files = array_filter($files);

        if (!empty($files))
        {
            foreach ($files as $file => $value)
            {
                if(!empty($entity))
                {
                    if(File::exists(public_path() . "/{$route}/{$entity->$file}"))
                    {
                        File::delete(public_path() . "/{$route}/{$entity->$file}");
                    }
                }
                $name = $value->getClientOriginalName();
                $string = htmlentities($name);
                $string = preg_replace('/\&(.)[^;]*;/', '\\1', $string);
                $string =  str_replace(' ','-', str_random(5) .'_'. $string);
                $value->move(public_path($route), $string);
            }
            return $string;
        }
    }

    /*
     * ============================= Renombrar archivos =============================
     */
    public function renameFile($oldfile, $newfile)
    {
        if(File::exists(public_path() . "/{$oldfile}"))
        {
            File::move(public_path() . "/{$oldfile}", public_path() . "/{$newfile}");
        }
    }

    /*
     * ============================= Eliminar archivos =============================
     */
    public function delete($params)
    {
        @extract($params);

        $files = array_filter($files);


        if (!empty($files))
        {
            foreach($files as $file)
            {
                if (File::exists(public_path() . "/{$route}/{$file}"))
                {
                    File::delete(public_path() . "/{$route}/{$file}");
                }
            }
        }
    }

    /*
     * ============================= Eliminar directorios =============================
     */
    public function deleteDirectory($route)
    {
        if (File::exists(public_path() . "/{$route}"))
        {
            $this->filesystem->deleteDirectory(public_path() . "/{$route}");
        }
    }
}