<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{

    public function accounts(){
        return view('pages.accounts');
    }
}
