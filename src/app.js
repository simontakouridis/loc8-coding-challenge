import angular from 'angular';
import styles from './style.css';
import ngmap from 'ngmap';

angular.module('loc8App', ['ngMap'])
.controller('loc8Controller', function($scope, NgMap, $log) {

  $scope.polygons = [
    {
      id: "polygon1",
      color: "#FF8F6E",
      coordinates: "[[41.766977, -88.196189],\
        [41.715742, -88.195502],\
        [41.763391, -88.114478]\
      ]",
      visibility: "true"
    },
    {
      id: "polygon2",
      color: "#FF3335",
      coordinates: "[[41.831794, -87.956549],\
        [41.831794, -87.942130],\
        [41.817722, -87.892348],\
        [41.812861, -87.787978],\
        [41.873733, -87.768752],\
        [41.783939, -87.751929],\
        [41.773954, -87.876899],\
        [41.801857, -87.927367],\
        [41.779587, -87.954833]\
      ]",
      visibility: "true"
    },
    {
      id: "polygon3",
      color: "#9B318D",
      coordinates: "[[41.877701, -88.143170],\
        [41.883325, -88.092358],\
        [41.836276, -88.088238],\
        [41.840369, -88.137677]\
      ]",
      visibility: "true"
    },
    {
      id: "polygon4",
      color: "#2C2B2B",
      coordinates: "[[41.704150, -87.998975],\
        [41.742587, -87.971509],\
        [41.728752, -87.916577],\
        [41.741050, -87.676938],\
        [41.841903, -87.680371],\
        [41.851110, -87.621320],\
        [41.706201, -87.619260]\
      ]",
      visibility: "true"
    },
    {
      id: "polygon5",
      color: "#1351EF",
      coordinates: "[[41.959961, -88.119138],\
        [41.939023, -87.988675],\
        [41.884347, -88.020947],\
        [41.878828, -88.064051],\
        [41.934913, -88.098469]\
      ]",
      visibility: "true"
    },
    {
      id: "polygon6",
      color: "#FFF655",
      coordinates: "[[41.903747, -87.948781],\
        [41.951512, -87.920285],\
        [41.937957, -87.880461],\
        [41.965725, -87.828834],\
        [41.976190, -87.786605],\
        [41.901618, -87.835700],\
        [41.947342, -87.727553],\
        [41.876060, -87.629106],\
        [41.894079, -87.827975]\
      ]",
      visibility: "true"
    }
  ];

  $scope.markers = [
    {
      position: [41.744278, -88.157479],
      polygon: "polygon1"
    },
    {
      position: [41.808900, -87.854779],
      polygon: "polygon2"
    },
    {
      position: [41.857248, -88.115018],
      polygon: "polygon3"
    },
    {
      position: [41.781513, -87.659085],
      polygon: "polygon4"
    },
    {
      position: [41.920865, -88.055211],
      polygon: "polygon5"
    },
    {
      position: [41.926017, -87.756907],
      polygon: "polygon6"
    }
  ];

  $scope.toggleVisibility = function (id) {

    for (var i=0; i<$scope.polygons.length; i++) {
      if ($scope.polygons[i].id == id) {
        if ($scope.polygons[i].visibility == "true") {
          $scope.polygons[i].visibility = "false";
        } else {
          $scope.polygons[i].visibility = "true";
        }
      }
    }
  }

})
.directive('addPolygon', function(){
    return {
      scope: {
        id: '@',
        color: '@',
        coordinates: '@',
        visibility: '@'
      },
      templateUrl: '/src/polygonTemplate.html'
    };
});
