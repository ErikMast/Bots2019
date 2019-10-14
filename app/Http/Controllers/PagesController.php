<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function dashboard(){
        return view('pages.dashboard');
    }
    public function accounts(){
        return view('pages.accounts');
    }
}
