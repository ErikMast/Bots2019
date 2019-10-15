/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/air.js":
/*!*****************************!*\
  !*** ./resources/js/air.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// var ctx = document.getElementById("examChart").getContext("2d");

/**
 * Counts
 */
// For a pie chart

/*
Heat map
 */
document.addEventListener('DOMContentLoaded', function () {
  axios.get('/api/v1/seismic/seperator?start_date=1990-1-1&end_date=2019-1-1').then(function (data) {
    d2 = {
      datasets: [{
        data: [data.data[0], data.data[1]],
        backgroundColor: ['#43a047', '#0277bd']
      }],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ['Menselijk', 'Natuurlijk']
    }; // debugger;

    var myPieChart = new Chart(document.getElementById('inducedvsnatural'), {
      type: 'pie',
      data: d2 // options: options

    });
  });
  axios.get('/api/v1/seismic/magnitude?start_date=1990-1-1&end_date=2019-1-1').then(function (data) {
    d2 = {
      datasets: [{
        data: [data.data[0], data.data[1]],
        backgroundColor: ['#43a047', '#0277bd']
      }],
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ['<3', '>=3']
    }; // debugger;

    var myPieChart = new Chart(document.getElementById('magnitude'), {
      type: 'pie',
      data: d2 // options: options

    });
  });
  axios.get('../api/v1/seismic/heatmap?start_date=1990-1-1&end_date=2019-1-1').then(function (response) {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(51.5, -0.11)
    };
    var map = new google.maps.Map(document.getElementById("cred4654"), mapOptions);
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
    var heatMapData = [{
      location: new google.maps.LatLng(37.782, -122.447),
      weight: 0.5
    }, new google.maps.LatLng(37.782, -122.445), {
      location: new google.maps.LatLng(37.782, -122.443),
      weight: 2
    }, {
      location: new google.maps.LatLng(37.782, -122.441),
      weight: 3
    }, {
      location: new google.maps.LatLng(37.782, -122.439),
      weight: 2
    }, new google.maps.LatLng(37.782, -122.437), {
      location: new google.maps.LatLng(37.782, -122.435),
      weight: 0.5
    }, {
      location: new google.maps.LatLng(37.785, -122.447),
      weight: 3
    }, {
      location: new google.maps.LatLng(37.785, -122.445),
      weight: 2
    }, new google.maps.LatLng(37.785, -122.443), {
      location: new google.maps.LatLng(37.785, -122.441),
      weight: 0.5
    }, new google.maps.LatLng(37.785, -122.439), {
      location: new google.maps.LatLng(37.785, -122.437),
      weight: 2
    }, {
      location: new google.maps.LatLng(37.785, -122.435),
      weight: 3
    }];
    var heatData = [];

    for (i in response.data) {
      heatData[i] = {
        location: new google.maps.LatLng(response.data[i].lat, response.data[i]["long"]),
        weight: response.data[i].mag
      };
    }

    var sanFrancisco = new google.maps.LatLng(53.219383, 6.566502);
    map = new google.maps.Map(document.getElementById('cred4654'), {
      center: sanFrancisco,
      zoom: 9,
      styles: [{
        elementType: 'geometry',
        stylers: [{
          color: '#242f3e'
        }]
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#242f3e'
        }]
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#746855'
        }]
      }, {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      }, {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{
          color: '#263c3f'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#6b9a76'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#38414e'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#212a37'
        }]
      }, {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9ca5b3'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#746855'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#1f2835'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#f3d19c'
        }]
      }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#2f3948'
        }]
      }, {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#17263c'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#515c6d'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#17263c'
        }]
      }],
      mapTypeId: 'roadmap'
    });
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatData
    });
    heatmap.setMap(map); //
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

var data = [];
var labels = [];
document.addEventListener('DOMContentLoaded', function () {
  axios.get('../api/v1/seismic/line?start_date=1990-2-2&end_date=2019-2-2').then(function (response) {
    var c = 0;

    for (body in response.data) {
      data.push(Math.floor(Math.random() * 20) + 15);
      labels[body] = String(response.data[body].start + ' - ' + response.data[body].end);
      c++;
    }
  });
  ctx = document.getElementById('line');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      "datasets": [{
        label: "Luchtkwaliteitschommelingen",
        data: data,
        hidden: true
      }],
      "labels": labels
    },
    options: {
      responsive: true,
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Schommelingen'
      }
    }
  });
  window.setTimeout(function () {
    myChart.data.datasets.forEach(function (ds) {
      ds.hidden = false;
    });
    myChart.update();
  }, 1000);
}); // myChart.update();

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./resources/js/air.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\Bots2019\resources\js\air.js */"./resources/js/air.js");


/***/ })

/******/ });