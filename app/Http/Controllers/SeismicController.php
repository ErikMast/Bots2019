<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeismicLineChart;
use App\SeismicEvent;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SeismicController extends Controller
{

    public function heatMapChart(SeismicLineChart $request)
    {
        $startDate = $request->get('start_date');
        $endDate = $request->get('end_date');

        $events = SeismicEvent::whereDate('date', '>', $startDate)->whereDate('date', '<', $endDate)->orderBy('date')->get();

        return response()->json($events);
    }

    public function lineChart(SeismicLineChart $request)
    {
        $startDate = $request->get('start_date');
        $endDate = $request->get('end_date');

        $month = null;
        $year = null;

        $events = SeismicEvent::select('date')->whereDate('date', '>', $startDate)->whereDate('date', '<', $endDate)->orderBy('date')->get();

        $data = array();
        $current = array();
        $lastdate = null;
        $current['count'] = 0;

        foreach($events as $event)
        {
            $carbon = new Carbon($event->date);

            if($month === null) $month = $carbon->month;
            if($year === null) $year = $carbon->year;



            if($year !== $carbon->year || $month !== $carbon->month) {
                $year = null;
                $month = null;
                $current['end'] = $lastdate;
                $data[] = $current;
                $current = array();
                $current['count'] = 0;
                $current['start'] = $carbon->format('d-m-Y');
                continue;
            }

            $year = $carbon->year;
            $month = $carbon->month;
            $lastdate = $carbon->format('d-m-Y');

            if(!array_key_exists('start', $current))
            {
                $current['start'] = $carbon->format('d-m-Y');
            }


            $current['count']++;
        }

        return(response()->json($data));

//        return response()->json(
//            SeismicEvent::select('date')->whereDate('date', '>', $startDate)->whereDate('date', '<', $endDate)->get()->toArray()
//        );
    }

}
