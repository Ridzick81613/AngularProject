angular.module('myApp', ['dark-sky']);

app.config(['darkSkyProvider', function(darkSkyProvider) {
    darkSkyProvider
        .setApiKey('9513a416cec90f9924f8c8e705e2fc09');
}]);

//look at spicy arguments example, make functions here to return the stuff you need using dark sky methods.

var myApp = angular.module('weather', []);

myApp.controller('SpicyController', ['$scope'])
