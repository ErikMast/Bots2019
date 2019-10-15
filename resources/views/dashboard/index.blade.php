@extends('layouts.app')
@section('fluid', 'container-fluid')
@section('content')

    <div class="container">

        <div class="row">
            <div class="col-md-8">
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
            </div>
            <div class="col-md-4">
                <div class="dropdown float-right">
                    <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="padding: 1em; width: 10em !important; min-width: 5em !important;">

                        <form action="">
                            <b>Startdatum</b>
                            <input type="text" class="form-control" value="{{$date}}">
                            <br>
                            <b>Einddatum</b>
                            <input type="text" class="form-control" value="{{$end}}">
                            <hr>
                            <input type="submit" class="btn btn-dark" value="Toepassen" style="width: 100%">
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br>

        <div class="row">
            <div class="col-md-12">

                <div id="accordion">
                    <div class="card">
                        <div class="card-header bg-dark text-white" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link text-white" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Visualisatie
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <div id="cred4654" style="width: 100%; height: 40em;"></div>                            </div>
                        </div>
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
                        <canvas id="inducedvsnatural"></canvas>
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