@extends('layouts.app')
@section('fluid', 'container-fluid')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="card">

                    <div class="card-header bg-dark text-white">
                        Dit zijn de resultaten van de form op report
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th> id</th>
                                <th> long</th>
                                <th> lat </th>
                                <th> magnitude </th>
                                <th> created_at</th>
                                <th> updated_at </th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($report as $reports)
                              <tr>    
                                <td>{{$reports->id}}</td>
                                <td>{{$reports->long}}</td>
                                <td>{{$reports->lat}}</td>
                                <td>{{$reports->magnitude}}</td>
                                <td>{{$reports->created_at}}</td>           
                                <td>{{$reports->updated_at}}</td>                 
                              </tr>
                            @endforeach
                       </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">

                    <div class="card-header bg-dark text-white">
                        Verloopgrafiek
                    </div>

                </div>
            </div>
        </div>

        <div class="row">

            <div class="col-md-8">
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        slected the specific time 
                    </div>
                </div>
            </div>

        </div>

    </div>

@endsection