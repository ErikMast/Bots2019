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
                                <th> id</th>
                                <th> long</th>
                                <th> lat </th>
                                <th> magnitude </th>
                                <th> created_at</th>
                                <th> updated_at </th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($user as $users)
                              <tr>    
                                <td>{{$users->id}}</td>
                                <td>{{$users->name}}</td>
                                <td>{{$users->email}}</td>
                                <td>{{$users->created_at}}</td>           
                                <td>{{$users->updated_at}}</td>                 
                              </tr>
                            @endforeach
                       </tbody>
                    </table>
                </div>
            </div>

    </div>

@endsection