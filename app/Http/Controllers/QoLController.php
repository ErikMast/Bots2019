<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QoLController extends Controller
{

    public function index(Request $request)
    {

        $seismic = null;
        $stikstof = null;

        if($request->has('long') && $request->has('lat'))
        {
            $seismic = $this->calculateSeismicScore($request->get('long'), $request->get('lat'));
            $stikstof = $this->getStikstofScore($request->get('long'), $request->get('lat')) * 10;


        }

        return view("qol.index", compact("seismic", "stikstof"));
    }

    private function getStikstofScore($long, $lat)
    {
        $query = DB::select("
            SELECT
              id,value, (
                6371 * acos (
                  cos ( radians(?) )
                  * cos( radians( lat ) )
                  * cos( RADIANS( `long` ) - radians(?) )
                  + sin ( radians(?) )
                  * sin( radians( lat ) )
                )
              ) AS distance
            FROM air_quality
            WHERE formula='NO' OR formula='NO2'
            HAVING distance < 30
            ORDER BY distance
            LIMIT 0 , 20;
            ", [$lat, $long, $lat]);

        $count = count($query);
        $mag = 0;
        foreach($query as $one)
        {
            $mag = $mag + $one->value;
        }
        $average = 0;
        if($mag !== 0)
        {
            $average = $count / $mag;
        }
        $qolis = $average * $count;
        return $qolis;
    }

    private function calculateSeismicScore($long, $lat)
    {
        $query = DB::select("
            SELECT
              id,mag, (
                6371 * acos (
                  cos ( radians(?) )
                  * cos( radians( lat ) )
                  * cos( RADIANS( `long` ) - radians(?) )
                  + sin ( radians(?) )
                  * sin( radians( lat ) )
                )
              ) AS distance
            FROM seismic_events
            HAVING distance < 5
            ORDER BY distance
            LIMIT 0 , 20;
            ", [$lat, $long, $lat]);
        $count = count($query);
        $mag = 0;
        foreach($query as $one)
        {
            $mag = $mag + $one->mag;
        }
        $average = 0;
        if($mag !== 0)
        {
            $average = $count / $mag;
        }
        $qolis = $average * $count;
        return $qolis;
    }

}
