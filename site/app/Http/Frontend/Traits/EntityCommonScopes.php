<?php namespace App\Http\Frontend\Traits;

trait EntityCommonScopes
{
    public function scopeWhereVisible($query) {
        return $query->where('visible',1);
    }

    public function scopeWithSlug($query,$slug) {
        return $query->where('slug',$slug);
    }

    /*
     * ============ Galería ============
     */
    public function scopeWithGallery($query)
    {
        return $query->with(['galleries' => function($gallery){
            $gallery->with(['elements' => function($elements){
                $elements->orderBy('position', 'asc');
            }]);
        }]);
    }

    /*
     * ============ Promociones activos ============
     */
    public function scopeWithElementsPublished($query)
    {
        return $query->where('date_published','<=',  date('Y/m/d'))
                     ->orderBy('date_published','desc');
    }

    /*
     * ============ Categoría visible ============
     */
    public function scopeWhereHasCategory($query)
    {
        return $query->whereHas('category', function($category){
           $category->where('active', true);
        });
    }

    /*
     * ============ Ralcionados ============
     */
    public function scopeWhereHasRelated($query, $slug, $listId, $related, $articleId = null)
    {
        if($articleId)
            $query->where('id', '<>', $articleId);
        else
            $query->where('slug', '<>', $slug);

        switch($related)
        {
            case 'ids' :
                $query->whereIn('id', $listId);
                break;
            case 'tags':
                $query->whereHas($related, function($article) use($listId){
                    $article->whereIn('id', $listId);
                });
                break;
        }

        $query->where('active', true)
        ->orderByRaw("100*(UNIX_TIMESTAMP() ^ id) & 0xffff");
    }

}