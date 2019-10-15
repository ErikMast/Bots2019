<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{

    public function index(Request $request)
    {

        $date = "1911-5-30";
        $end = date('Y-m-d');

        if($request->has('start'))
        {
            $date = $request->get('start');
        }

        if($request->has('end'))
        {
            $end = $request->get('end');
        }

        return view("dashboard.index", compact('date', 'end'));
    }


}
