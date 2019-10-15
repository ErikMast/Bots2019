// var ctx = document.getElementById("examChart").getContext("2d");


/**
 * Counts
 */

// For a pie chart

/*
Heat map
 */

document.addEventListener('DOMContentLoaded', () => {

    axios.get('/api/v1/seismic/seperator?start_date=1990-1-1&end_date=2019-1-1').then((data) => {


        d2 = {
            datasets: [{
                data: [data.data[0], data.data[1]],
                backgroundColor: ['#43a047', '#0277bd']
            }],



            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Menselijk',
                'Natuurlijk',
            ]
        };

        // debugger;

        var myPieChart = new Chart(document.getElementById('inducedvsnatural'), {
            type: 'pie',
            data: d2,
            // options: options
        });

    })

    axios.get('/api/v1/seismic/magnitude?start_date=1990-1-1&end_date=2019-1-1').then((data) => {


        d2 = {
            datasets: [{
                data: [data.data[0], data.data[1]],
                backgroundColor: ['#43a047', '#0277bd']
            }],



            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                '<3',
                '>=3',
            ]
        };

        // debugger;

        var myPieChart = new Chart(document.getElementById('magnitude'), {
            type: 'pie',
            data: d2,
            // options: options
        });

    })

    axios.get('../api/v1/seismic/heatmap?start_date=1990-1-1&end_date=2019-1-1').then((response) => {

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
            zoom: 9,
            styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6b9a76'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}]
                }
            ],
            mapTypeId: 'roadmap'
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

    axios.get('../api/v1/seismic/line?start_date=1990-2-2&end_date=2019-2-2')
        .then(function (response) {

            let c = 0;
            for(body in response.data)
            {
                data.push(Math.floor(Math.random() * 20) + 1  )
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
                    label: "Luchtkwaliteitschommelingen",
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
                text: 'Schommelingen'
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