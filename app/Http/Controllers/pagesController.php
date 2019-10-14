<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class pagesController extends Controller
{
    public function dashboard(){
        $title = 'Welcome to atos';
        return view('pages.dashboard');
    }
}
