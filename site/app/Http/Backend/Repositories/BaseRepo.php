<?php namespace App\Http\Backend\Repositories;

use App\Http\Entities\Id;
use App\Http\Entities\Tag;
use App\Http\Backend\Repositories\UserRepo;
use App\Http\Backend\Traits\MessageTrait;
use App\Http\Backend\Traits\ModelStatusTrait;
use App\Http\Backend\Traits\ModelPositionsTrait;
use App\Http\Backend\Traits\ModelVisibilityTrait;

abstract class BaseRepo
{
    // Usa traits con el único objetivo de agrupar funcionalidades muy específicas y de una manera coherente.
    use MessageTrait;
    use ModelStatusTrait;
    use ModelPositionsTrait;
    use ModelVisibilityTrait;

    public $returnToIndex       = false;

    protected $model;
    protected $defaultFilters   = [];
    protected $maxSlugLength 	= 60;

    public function __construct()
    {
        \DB::enableQueryLog();
        $this->model = $this->setModel();
    }

    abstract public function setModel();
    abstract public function setSectionName();

    abstract public function save($item, $request);
    abstract public function paginate($filters);

    /*
     * ================== Obtener datos completos de usuario ==================
     */
    public function getUser()
    {
        $user = new UserRepo();
        return $user->getUserData();
    }

    /*
     * ================== Obtener registro por id ==================
     */
    public function getItem($id)
    {
        $item = $this->model;

        if(!empty($id))
        {
            $item = $this->model->find($id);
            if(!$item) abort(404);
        }

        return $item;
    }

    /*
     * ================== Obtener filtros para cada panel de control ==================
     */
    public function getFilters($sectionName)
    {
        return (\Session::has("{$sectionName}.filters"))
            ? \Session::get("{$sectionName}.filters")
            : $this->defaultFilters
        ;
    }

    /*
     * ================== Asignar filtros para cada panel de control ==================
     */
    public function setFilters($sectionName)
    {

        $data = \Input::except('_token');

        if(!empty($data))
        {
            $filters            = array_only($data, array_keys($this->defaultFilters));
            $filters['inverse'] = !empty($data['inverse']);
        }
        else
        {
            $filters = $this->defaultFilters;
        }

        \Session::Put("{$sectionName}.filters", $filters);
    }

    /*
     * ================== Buscar registro por ID ==================
     */
    public function find($id)
    {
        return $this->model->where('id', $id)->get()->first();
    }

    /*
     * ================== Buscar registro por campo ==================
     */
    public function findField($field, $value)
    {
        return $this->model->where($field, '=', $value)->first();
    }

    /*
     * ================== Buscar valor máximo de un campo ==================
     */
    public function maxField($max, $field, $value)
    {
        return $this->model->where($field, '=', $value)->max($max);
    }

    /*
     * ================== Conversion de Slug ==================
     */
    public function setSlug($name, $id = null)
    {
        // Nos aseguramos de que no se sobrepase la longitud máxima para el slug
        $originalSlug   = $slug = substr(str_slug($name), 0, $this->maxSlugLength);
        $valid          = false;

        if(!empty($id))
        {
            $item = $this->find($id);
            $slug = $item->slug;
        }
        else
        {
            do
            {
                $item = $this->findField('slug', $slug);
                $item ? $slug = $originalSlug.'-'.strtolower(str_random(4)) : $valid = true;
            }
            while (!$valid);
        }

        return $slug;
    }

    /*
     * ================== Guardar Ids ==================
     */
    public function saveIds($item, $ids)
    {
        Id::where('idssable_id', $item->id)->delete();

        $idList = explode(',', $ids);

        foreach($idList as $id)
        {
            $id = trim($id);

            if(!empty($object = $item->find($id)))
            {
                if(!empty($object) && ($item->id <> $object->id))
                    $item->ids()->save(new Id(['article_id' => $object->id]));
            }
        }
    }

    /*
     * ================== Validar los tags que no existan ==================
     */
    public function cleanTags()
    {
        $ids        = [];
        $taggables  = \DB::table('taggables')->get();

        foreach($taggables as $taggable) $ids[] = $taggable->tag_id;

        !empty($ids) ? \DB::table('tags')->whereNotIn('id', $ids)->delete() : null;
    }

    /*
     * ================== Guardar Tags ==================
     */
    public function saveTags($item,$tags)
    {
        $this->cleanTags();

        $ids        = [];
        $tagsArray  = explode(',',$tags);

        foreach($tagsArray as $tag)
        {
            $tag = trim($tag);

            if(!empty($tag))
            {
                $tagSlug    = str_slug($tag);
                $tagObject  = Tag::where('slug','=',$tagSlug)->first();

                if(!$tagObject)
                {
                    $tagObject = Tag::Create([
                        'value' => $tag,
                        'slug'  => $tagSlug,
                    ]);
                }
                $ids[] = $tagObject->id;
            }
        }

        $item->tags()->sync(array_unique($ids,SORT_NUMERIC));
    }

    /*
     * ================== Eliminar registros por ID ==================
     */
    public function destroy($ids)
    {
        return $this->model->destroy($ids);
    }
    
    public function GetLast($module)
    {
        $this->constraints = [['form_id','=',$module->id]];
        $last = $this->getLastPosition();
        return $last;
    }
    

}