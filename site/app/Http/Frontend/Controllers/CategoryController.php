<?php

namespace App\Http\Frontend\Controllers;

use App\Http\Backend\Repositories\ArticleRepo;
use App\Http\Frontend\Repositories\CategoryRepo;
use Illuminate\Http\Request;

use App\Http\Frontend\Requests;
use App\Http\Frontend\Controllers\Controller;

class CategoryController extends Controller
{
    private $repo;
    private $articlerepo;

    function __construct(CategoryRepo $repo, ArticleRepo $articleRepo)
    {
        \Session::put(['intranet' => false]);
        $this->repo = $repo;
        $this->articlerepo = $articleRepo;
    }


    public function index()
    {

        $categories = $this->repo->getCategories()->get();
        $articles = $this->articlerepo->getArticles();
        //dd($articles);
        return view('Frontend.Blog.index', [
            'categories' => $categories,
            'blog' => true,
            'articles' => $articles]);
    }
}
