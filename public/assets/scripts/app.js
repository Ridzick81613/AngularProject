var app = angular.module("RedEye", []);

app.controller("weatherCtrl", MyCtrl)
  function MyCtrl($scope, $http) {
    var usersZip = $scope.zip;

    $scope.findWeather = function(){
      $http({
      method: 'POST',
      data: {"zipCode": usersZip},
      url: '/getWeather'
    }).then(function successCallback(response) {
      console.log(response.body);
     $scope.printarea = response.body;
      }, function errorCallback(response) {
        console.log("An error occurred.")
      });

    }
  }

//http://api.openweathermap.org/data/2.5/weather?zip=' + $scope.zipcode + ',us&appid=eee7a2ab44a813468869618fa17f7c8e




// app.controller('weatherCtrl', function($scope, $http)
// {
//   $scope.getData = function()
//   {
//     $http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + '$scope.zipcode' + ',us&appid=eee7a2ab44a813468869618fa17f7c8e')
//         .then(function(response)
//         {
//           $scope.myData = response;
//           console.log($scope.myData);
//         },
//
//       function(response)
//       {
//           $scope.myData = "Something went wrong";
//       });
//
//   app.filter('kelvinToFahrenheit', function()
//   {
//     return function(kelvin)
//     {
//       return (parseFloat(kelvin) - 273.15) * 1.80 + 32.00;
//     }
//   });
// };
// });

//controller code for weatherCtrl found on stackoverflow link:http://stackoverflow.com/questions/35236819/angularjs-using-http-get-with-ng-model authors: charlietfl & Eric Scandora
