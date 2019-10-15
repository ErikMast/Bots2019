// var ctx = document.getElementById("examChart").getContext("2d");

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
                    data: data
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
    myChart.update();
})

// myChart.update();