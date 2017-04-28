<?php namespace App\Http\Backend\Helpers;


class Directory {
    /**
     * Eliminar las carpetas vacías de un directorio
     * @param $path
     */
    public static function CleanDirectory($path) {
        $path = FileUtils::FixPath($path);

        if(!is_dir($path)) return false;

        $folder = dir($path);

        while(false !== $entry = $folder->read()) {
            if ($entry == '.' || $entry == '..') {
                continue;
            }
            if(FileUtils::CleanDirectory($path.DIRECTORY_SEPARATOR.$entry)) {
                @rmdir($path.DIRECTORY_SEPARATOR.$entry);
            }
        }
        return true;
    }

    public static function CopyDir($source,$destination,$permissions = 0755) {
        // Check for symlinks
        if (is_link($source)) {
            return symlink(readlink($source), $destination);
        }

        // Simple copy for a file
        if (is_file($source)) {
            return copy($source, $destination);
        }

        // Make destination directory
        if (!is_dir($destination)) {
            mkdir($destination, $permissions);
        }

        // Loop through the folder
        $dir = dir($source);
        while (false !== $entry = $dir->read()) {
            // Skip pointers
            if ($entry == '.' || $entry == '..') {
                continue;
            }

            // Deep copy directories
            FileUtils::CopyDir("$source/$entry", "$destination/$entry");
        }

        // Clean up
        $dir->close();
        return true;
    }

    /**
     * Cambiar los caracteres \ y / por el separado de directorios del
     * sistema en el que se está trabajando
     * @param $path
     *
     * @return string
     */
    public static function FixPath($path) {
        return preg_replace('%[\\/]%',DIRECTORY_SEPARATOR,$path);
    }

    public static function RenameDir($oldPath,$newPath) {
        $oldPath = FileUtils::FixPath($oldPath);
        $newPath = FileUtils::FixPath($newPath);

        if($oldPath != $newPath) {
            if(!is_dir($newPath)) {
                mkdir($newPath,0777,true);
            }

            /*
             * Si no es posible renombrar la carpeta de manera nativa
             * copiamos su contenido y luego la borramos
             */
            if(!@rename($oldPath,$newPath)) {
                FileUtils::CopyDir($oldPath,$newPath);
                FileUtils::RemoveDir($oldPath);
            }
        }
    }

    /**
     * Eliminar una carpeta con su contenido
     *
     * @param $path
     */
    public static function RemoveDir($path) {
        $path = FileUtils::FixPath($path);
        if(is_dir($path)) {
            $folder = dir($path);
            while(false !== $entry = $folder->read()) {
                if ($entry == '.' || $entry == '..') {
                    continue;
                }
                if(!is_dir($path.DIRECTORY_SEPARATOR.$entry)) unlink($path.DIRECTORY_SEPARATOR.$entry);
                else {
                    FileUtils::RemoveDir($path.DIRECTORY_SEPARATOR.$entry);
                    @rmdir($path.DIRECTORY_SEPARATOR.$entry);
                }
            }
            $folder->close();
            @rmdir($path);
        }
    }

    public static function SaveFile($inputField,$fileName,$path) {
        $file = \Input::File($inputField);

        $extension = $file->getClientOriginalExtension();

        $fileName .= '.'.$extension;

        $file->move($path,$fileName);

        return $fileName;
    }

}