<?php namespace App\Http\Backend\Traits;

trait EntityCommonScopes
{
    public function scopeWhereVisible($query) {
        return $query->where('visible',1);
    }

    public function scopeWithSlug($query,$slug) {
        return $query->where('slug',$slug);
    }

    /*
     * ============ Galería y Tags ============
     
    public function scopeWithGalleryTags($query)
    {
        return $query->with(['galleries' => function($gallery)
        {
            $gallery->with(['elements' => function($elements)
            {
                $elements->orderBy('position', 'asc');
            }]);
        }, 'tags']);
    }
    */

    /*
     * ============ Ralcionados por Tags ============
     
    public function scopeWhereHasTags($query, $slug, $tagsId)
    {
        $query->where('slug', '<>', $slug)
        ->whereHas('tags', function($tags) use($tagsId){
            $tags->whereIn('id', $tagsId);
        })
        ->where('visible', true)
        ->orderByRaw("RAND()")
        ->limit(3);
    }
    */
}