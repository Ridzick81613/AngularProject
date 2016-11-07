var app = angular.module("RedEye", []);

app.controller('weatherCtrl', function($scope, $http)
{
  $scope.getData = function()
  {
    $http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + '$scope.zipcode' + ',us&appid=eee7a2ab44a813468869618fa17f7c8e')
        .then(function(response)
        {
          $scope.myData = response;
        },

      function(response)
      {
          $scope.myData = "Something went wrong";
      });

  app.filter('kelvinToFahrenheit', function()
  {
    return function(kelvin)
    {
      return (parseFloat(kelvin) - 273.15) * 1.80 + 32.00;
    }
  });
};
});

//controller code for weatherCtrl found on stackoverflow link:http://stackoverflow.com/questions/35236819/angularjs-using-http-get-with-ng-model authors: charlietfl & Eric Scandora
