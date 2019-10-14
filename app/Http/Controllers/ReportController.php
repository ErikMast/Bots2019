<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReport;
use App\Report;
use Illuminate\Http\Request;

class ReportController extends Controller
{

    public function index()
    {
        return view("report.index");
    }

    public function store(StoreReport $request)
    {
        Report::create($request->only([
            "magnitude", "long", "lat"
        ]));

        return view("report.success");
    }
    public function reports()
    {
        return view("report.reports");
    }
}
