<?php

namespace App\Http\Frontend\Controllers;

use App\Http\Frontend\Repositories\ArticleRepo;
use App\Http\Frontend\Repositories\CategoryRepo;
use Illuminate\Http\Request;
use App\Http\Frontend\Requests;
use App\Http\Frontend\Controllers\Controller;

class ArticleController extends Controller
{
    private $repo;
    private $repocategory;

    function __construct(CategoryRepo $repocategory, ArticleRepo $repo)
    {
        $this->repo = $repo;
        $this->repocategory = $repocategory;
    }


    //
    public function index($slug)
    {
        $categories = $this->repocategory->getCategories()->get();
        $articles = $this->repo->getArticles($slug);
        //dd($articles);
        return view('Frontend.Blog.list',
            ['articles' => $articles,
                'title' => $slug,
                'blog' => true,
                'categories' => $categories]);
    }

    public function show($slug_category, $slug_article)
    {
        $article = $this->notFoundUnless($this->repo->getArticle($slug_category, $slug_article)->first());
        return view('Frontend.Blog.article',
            ['article' => $article,
                'gallery' => $article->galleries->first(),
                'title' => $article->title,
                'meta_description' => $article->meta_description,
                'blog' => true]);
    }
}
