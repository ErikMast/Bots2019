// var ctx = document.getElementById("examChart").getContext("2d");



/*
Heat map
 */

document.addEventListener('DOMContentLoaded', () => {


    axios.get('./api/v1/seismic/heatmap?start_date=1990-1-1&end_date=2019-1-1').then((response) => {

        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(51.5,-0.11)
        }

        var map = new google.maps.Map(document.getElementById("cred4654"), mapOptions);

        var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);

        var heatMapData = [
            {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5},
            new google.maps.LatLng(37.782, -122.445),
            {location: new google.maps.LatLng(37.782, -122.443), weight: 2},
            {location: new google.maps.LatLng(37.782, -122.441), weight: 3},
            {location: new google.maps.LatLng(37.782, -122.439), weight: 2},
            new google.maps.LatLng(37.782, -122.437),
            {location: new google.maps.LatLng(37.782, -122.435), weight: 0.5},

            {location: new google.maps.LatLng(37.785, -122.447), weight: 3},
            {location: new google.maps.LatLng(37.785, -122.445), weight: 2},
            new google.maps.LatLng(37.785, -122.443),
            {location: new google.maps.LatLng(37.785, -122.441), weight: 0.5},
            new google.maps.LatLng(37.785, -122.439),
            {location: new google.maps.LatLng(37.785, -122.437), weight: 2},
            {location: new google.maps.LatLng(37.785, -122.435), weight: 3}
        ];

        var heatData = [];

        for(i in response.data)
        {
            heatData[i] = {
                location: new google.maps.LatLng(response.data[i].lat, response.data[i].long),
                weight: response.data[i].mag
            }
        }

        var sanFrancisco = new google.maps.LatLng(53.219383, 6.566502);

        map = new google.maps.Map(document.getElementById('cred4654'), {
            center: sanFrancisco,
            zoom: 5,
            mapTypeId: 'satellite'
        });

        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatData
        });
        heatmap.setMap(map);


        console.log("YES");

        //
        // var heatData = [];
        //
        // for(i in response.data)
        // {
        //     heatData[i] = {
        //         location: new google.maps.LatLng(response.data[i].lat, response.data[i].lat),
        //         weight: response.data[i].mag
        //     }
        // }
        // var heatMapData = [
        //     {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5},
        //     new google.maps.LatLng(37.782, -122.445),
        //     {location: new google.maps.LatLng(37.782, -122.443), weight: 2},
        //     {location: new google.maps.LatLng(37.782, -122.441), weight: 3},
        //     {location: new google.maps.LatLng(37.782, -122.439), weight: 2},
        //     new google.maps.LatLng(37.782, -122.437),
        //     {location: new google.maps.LatLng(37.782, -122.435), weight: 0.5},
        //
        //     {location: new google.maps.LatLng(37.785, -122.447), weight: 3},
        //     {location: new google.maps.LatLng(37.785, -122.445), weight: 2},
        //     new google.maps.LatLng(37.785, -122.443),
        //     {location: new google.maps.LatLng(37.785, -122.441), weight: 0.5},
        //     new google.maps.LatLng(37.785, -122.439),
        //     {location: new google.maps.LatLng(37.785, -122.437), weight: 2},
        //     {location: new google.maps.LatLng(37.785, -122.435), weight: 3}
        // ];
        // console.log(heatData)
        //
        // var groningen = new google.maps.LatLng(53.219383, 6.566502);
        //
        // map = new google.maps.Map(document.getElementById('map'), {
        //     center: groningen,
        //     zoom: 13,
        //     mapTypeId: 'satellite'
        // });
        //
        // var heatmap = new google.maps.visualization.HeatmapLayer({
        //     data: heatMapData
        // });
        // heatmap.setMap(map);
    });

});


/*
Line chart
 */

let data = [];
let labels = [];

document.addEventListener('DOMContentLoaded', () => {

    axios.get('./api/v1/seismic/line?start_date=1990-2-2&end_date=2019-2-2')
        .then(function (response) {

            let c = 0;
           for(body in response.data)
           {
               data.push(response.data[body].count)
               labels[body] = String(response.data[body].start + ' - ' + response.data[body].end);
               c++;
           }
        });

    console.log(labels);


    ctx = document.getElementById('line');
    var myChart = new Chart(ctx, {
        type: 'line',
        data:
            {
                "datasets": [{
                    label: "Aardbevingen",
                    data: data,
                    hidden: true
                }],
                "labels": labels,}
        ,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Seismische activiteit'
            }
        }
    });
    window.setTimeout(() => {
        console.log("Refresh");
        myChart.data.datasets.forEach(function(ds) {
            ds.hidden = false;
        });
        myChart.update();
    }, 1000);
})

// myChart.update();