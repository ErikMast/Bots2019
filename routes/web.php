<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');
Route::get('/report', 'ReportController@index')->name('report.index');
Route::post('/report', 'ReportController@store')->name('report.store')->middleware('throttle:1,1');

Auth::routes(["register" => false]);

Route::get('/dashboard', 'PagesController@dashboard');