// var ctx = document.getElementById("examChart").getContext("2d");



/*
Heat map
 */

document.addEventListener('DOMContentLoaded', () => {


    axios.get('./api/v1/seismic/heatmap?start_date=1990-1-1&end_date=2019-1-1').then((response) => {

        var heatData = [];

        for(i in response.data)
        {
            heatData[i] = {
                location: new google.maps.LatLng(response.data[i].lat, response.data[i].lat),
                weight: response.data[i].mag
            }
        }

        var groningen = new google.maps.LatLng(53.219383, 6.566502);

        map = new google.maps.Map(document.getElementById('map'), {
            center: groningen,
            zoom: 13,
            mapTypeId: 'satellite'
        });

        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatData
        });
        heatmap.setMap(map);
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