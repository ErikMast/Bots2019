<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeismicLineChart;
use App\SeismicEvent;
use Illuminate\Http\Request;

class SeismicController extends Controller
{

    public function lineChart(SeismicLineChart $request)
    {
        $startDate = $request->get('start_date');
        $endDate = $request->get('end_date');

        return response()->json(
            SeismicEvent::select('date')->whereDate('date', '>', $startDate)->whereDate('date', '<', $endDate)->get()->toArray()
        );
    }

}
