@extends('layouts.app')
@section('fluid', 'container-fluid')
@section('content')

    <div class="container">

        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active bg-dark" href="#">Seismisch</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">Lucht</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">Water</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">Geluid</a>
            </li>
        </ul>

        <br>

        <div class="row">
            <div class="col-md-8">
                <div class="card">

                    <div class="card-header bg-dark text-white">
                        Visualisatiekaart
                    </div>

                    <div class="card-body">
                        <div id="map"></div>
                    </div>

                </div>
            </div>
            <div class="col-md-4">

            </div>
        </div>

        <div class="card">

            <div class="card-header bg-dark text-white">
                Verloopgrafiek
            </div>

            <div class="card-body">
                <canvas id="line"></canvas>
            </div>

        </div>

        <div class="row">

            <div class="col-md-4">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        Aandeel menselijke oorsprong vs natuurlijk
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        Aandeel klein (<3r) vs groot (3r>)
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        gereserveerd, opdonderen
                    </div>
                </div>
            </div>

        </div>

    </div>

@endsection

@section('scripts')
    <script src="{{asset("js/seismic.js")}}"></script>
@endsection