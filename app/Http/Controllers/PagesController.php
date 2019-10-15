<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class PagesController extends Controller
{

    public function accounts(){
        
        $users = User::all();
        return view('pages.accounts')->with('user', $users);
    }
}
