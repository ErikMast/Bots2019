@extends('layouts.app')
@section('fluid', 'container-fluid')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">

                    <div class="card-header bg-dark text-white">
                        Dit zijn de resultaten van de form op report
                    </div>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th> long</th>
                                <th> lat </th>
                                <th> location</th>
                                <th> magnitude </th>
                                <th> created_at</th>
                                <th> updated_at </th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($report as $reports)
                              <tr>    
                                <td>{{$reports->long}}</td>
                                <td>{{$reports->lat}}</td>
                                <td><a href="https://maps.google.com/?q={{$reports->long}} {{$reports->lat}} " target="_blank">Map</a></td>
                                <td>{{$reports->magnitude}}</td>
                                <td>{{$reports->created_at}}</td>           
                                <td>{{$reports->updated_at}}</td>                 
                              </tr>
                            @endforeach
                       </tbody>
                    </table>
                </div>
            </div>

    </div>

@endsection