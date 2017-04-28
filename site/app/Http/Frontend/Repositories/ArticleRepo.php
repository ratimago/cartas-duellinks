<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 1/11/16
 * Time: 01:29 PM
 */

namespace App\Http\Frontend\Repositories;


use App\Http\Entities\Article;

class ArticleRepo extends BaseRepo
{
    private $slug_category;
    private $slug_article;

    public function getModel()
    {
        return new Article();
    }

    public function getArticles($slug)
    {
        $this->slug_category = $slug;
        $articles = $this->getModel()
            ->join('categories', function ($join) {
                $join->on('articles.category_id', '=', 'categories.id')
                    ->where('categories.slug', 'LIKE', '%' . $this->slug_category . '%');
            })->with(['galleries' => function ($galleries) {
                $galleries->with(['elements' => function ($elements) {
                    $elements->orderBy('position', 'asc')->first();
                }])->first();
            }, 'category'])->paginate(10);
        return $articles;
    }

    public function getArticle($category, $article)
    {
        $this->slug_category = $category;
        $this->slug_article = $article;
        $article = $this->getModel()
            ->join('categories', function ($join) {
                $join->on('articles.category_id', '=', 'categories.id')
                    ->where('categories.slug', 'LIKE', '%' . $this->slug_category . '%')
                    ->where('articles.slug', 'LIKE', '%' . $this->slug_article . '%');
            })->with(['galleries' => function ($galleries) {
                $galleries->with(['elements' => function ($elements) {
                    $elements->orderBy('position', 'asc');
                }]);
            }]);
        return $article;
    }

}
