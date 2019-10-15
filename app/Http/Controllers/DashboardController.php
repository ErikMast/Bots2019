<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class DashboardController extends Controller
{
    public function air(Request $request)
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
        return view("dashboard.air", compact('date', 'end'));
    }
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
        $qolis = null;
        if($request->has('long') && $request->has('lat'))
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
            ", [$request->get('lat'), $request->get('long'), $request->get('lat')]);
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
        }
        return view("dashboard.index", compact('date', 'end', 'qolis'));
    }
}