angular.module('myApp', ['dark-sky']);

app.config(['darkSkyProvider', function(darkSkyProvider) {
    darkSkyProvider
        .setApiKey('9513a416cec90f9924f8c8e705e2fc09');
}]);
