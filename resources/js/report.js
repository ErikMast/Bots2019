
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Jouw browser ondersteunt dit niet!")
    }
}

function showPosition(position) {
    console.log(position.coords.latitude + " " + position.coords.longitude);
    document.getElementById('coords').innerHTML = "Noorderbreedte: " + position.coords.latitude +
        " Zuiderbreedte: " + position.coords.longitude;
    document.getElementsByName("long")[0].value = position.coords.longitude;
    document.getElementsByName("lat")[0].value = position.coords.latitude;
}

getLocation();