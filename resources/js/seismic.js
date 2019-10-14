// var ctx = document.getElementById("examChart").getContext("2d");

let d = [];

document.addEventListener('DOMContentLoaded', () => {

    axios.get('./api/v1/seismic/line?start_date=1990-2-2&end_date=2019-2-2')
        .then(function (response) {
            console.log(response);
            d = response.data;
           response.data.forEach(() => {
           })
        });

})

var set = {
    backgroundColor: "color",
    borderWidth: 1,
    datasets: [{
        label: 'Verloopgrafiek',
        backgroundColor:"black",
        data: [
            1,2,3,4,5,6
        ]
    }]
}

ctx = document.getElementById('line');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: set,
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart'
        }
    }
});
myChart.update();
console.log("chart");