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

Route::get('/', 'DashboardController@index')->name('dashboard.index');
Route::get('/data/air', 'DashboardController@air')->name('dashboard.air');
Route::get('/report', 'ReportController@index')->name('report.index');
Route::post('/report', 'ReportController@store')->name('report.store')->middleware('throttle:10,1');

Auth::routes(["register" => false]);

Route::prefix("api/v1")->name('api.')->group(function() {
    Route::get('/seismic/line', 'SeismicController@lineChart')->name('seismic.line');
    Route::get('/seismic/heatmap', 'SeismicController@heatMapChart')->name('seismic.heat');
    Route::get('/seismic/prediction', 'SeismicController@predictionChart')->name('seismic.heat');
    Route::get('/seismic/seperator', 'SeismicController@typeSeperatorGraph')->name('seismic.seperator');
    Route::get('/seismic/magnitude', 'SeismicController@magnitudeSeperatorGraph')->name('seismic.magnitude');
}
);

Route::middleware("auth")->group(function() {
    Route::get('/accounts', 'accountsController@index')->name('pages.accounts');
    Route::get('/reports', 'ReportController@reports')->name('report.reports');
});