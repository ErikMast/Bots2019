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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/seismic.js":
/*!*********************************!*\
  !*** ./resources/js/seismic.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// var ctx = document.getElementById("examChart").getContext("2d");

/*
Heat map
 */
document.addEventListener('DOMContentLoaded', function () {
  axios.get('./api/v1/seismic/heatmap?start_date=1990-1-1&end_date=2019-1-1').then(function (response) {
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
      zoom: 5,
      mapTypeId: 'satellite'
    });
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatData
    });
    heatmap.setMap(map);
    console.log("YES"); //
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
  axios.get('./api/v1/seismic/line?start_date=1990-2-2&end_date=2019-2-2').then(function (response) {
    var c = 0;

    for (body in response.data) {
      data.push(response.data[body].count);
      labels[body] = String(response.data[body].start + ' - ' + response.data[body].end);
      c++;
    }
  });
  console.log(labels);
  ctx = document.getElementById('line');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      "datasets": [{
        label: "Aardbevingen",
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
        text: 'Seismische activiteit'
      }
    }
  });
  window.setTimeout(function () {
    console.log("Refresh");
    myChart.data.datasets.forEach(function (ds) {
      ds.hidden = false;
    });
    myChart.update();
  }, 1000);
}); // myChart.update();

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi ./resources/js/seismic.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Ontwikkeling\laragon\www\Bots2019\resources\js\seismic.js */"./resources/js/seismic.js");


/***/ })

/******/ });