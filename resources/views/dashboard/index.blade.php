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

                    <div class="card-body" style="height:100%; width:100%;">
{{--                        <div class="alert alert-warning">This database is still computing, 1GB of data in total</div>--}}
                        <div id="cred4654" style="width: 100%; height: 20em;"></div>
                    </div>

                </div>
            </div>
            <div class="col-md-4">

            </div>
        </div>
        <br>
        <div class="card">

            <div class="card-header bg-dark text-white">
                Verloopgrafiek
            </div>

            <div class="card-body">
                <canvas id="line"></canvas>
            </div>

        </div>
        <br>
        <div class="row">

            <div class="col-md-4">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        Aandeel menselijke oorsprong vs natuurlijk
                    </div>
                    <div class="card-body">
                        <div class="alert alert-warning">This database is still computing, 3GB of data in total</div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        Aandeel klein (<3r) vs groot (3r>)
                    </div>
                    <div class="card-body">
                        <div class="alert alert-warning">This database is still computing, 9GB of data in total</div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        undefined graph
                    </div>
                    <div class="card-body">
                        <div class="alert alert-danger">No graph associated with this card</div>
                    </div>
                </div>
            </div>

        </div>

    </div>

@endsection

@section('scripts')
    <script src="{{asset("js/seismic.js")}}"></script>
@endsection