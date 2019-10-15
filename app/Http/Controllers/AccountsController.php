<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class accountsController extends Controller
{

    public function accounts(){        
        $users = User::all();
        return view('accounts.index')->with('user', $users);
    }
    
    public function destroy($id)
    {
        $todo= Todo::find($id);
        $todo->delete();
        return redirect()->route('homepage');
    }
}
