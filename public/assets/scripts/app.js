var app = angular.module("RedEye", []);

app.controller("weatherCtrl", MyCtrl)
  function MyCtrl($scope, $http) {
    // var usersZip = $scope.zip;

    $scope.findWeather = function(){
      $http.post('/getWeather', $scope.zip).then(function successCallback(response) {
      console.log(response.data);
     $scope.printarea = response.data;
      }, function errorCallback(response) {
        $scope.printarea="An error occurred.";
      });

    }
  }
