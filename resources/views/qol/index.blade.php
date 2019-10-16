@extends('layouts.app')
@section('fluid', 'container-fluid')
@section('content')

    <div class="container">

        <div class="card">
            <div class="card-header bg-dark text-white">
                Coordinaten
            </div>
            <div class="card-body">
                <form method="GET">
                    <div class="row">
                        <div class="col-md-3">
                            <b>Long</b> <input name="long" type="text" class="form-control" value="@if(isset($_GET['long'])){{$_GET['long']}}@endif">
                        </div>
                        <div class="col-md-3">
                            <b>Lat</b> <input name="lat" type="text" class="form-control" value="@if(isset($_GET['lat'])){{$_GET['lat']}}@endif">
                        </div>
                        <div class="col-md-3">
                            <input type="submit" class="btn btn-dark" value="Berekenen">
                        </div>
                    </div>
                </form>
            </div>
        </div>

        @if($seismic !== null && $stikstof !== null)
            <br>
            <div class="card">
                <div class="card-header bg-dark text-white">QoL score</div>
                <div class="card-body">
                    <b>Stikstofscore: </b> {{$stikstof}} <br>
                    <b>Seismische score: </b> {{$seismic}}
                    <br><br>
                    <b>Totale score: {{$stikstof + $seismic}}</b> <br>
                    <small class="text-muted">Des te hoger het getal, des te slechter de kwaliteit van leven</small>
                </div>
            </div>

        @endif

    </div>

@endsection
