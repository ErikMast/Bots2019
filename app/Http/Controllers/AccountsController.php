<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class accountsController extends Controller
{

    public function index(){        
        $users = User::all();
        return view('accounts.index')->with('user', $users);
    }
}
