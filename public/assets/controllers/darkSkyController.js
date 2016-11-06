angular.module('app.weatherWidget')
    .controller('WeatherCtrl', [
        '$q', 'darkSky',
        function($q, darkSky) {
            activate();

            // log current weather data
            function activate() {
                getNavigatorCoords()
                    .then(function(latitude, longitude) {
                        darkSky.getCurrent(latitude, longitude)
                            .then(console.log)
                            .catch(console.warn);
                    })
                    .catch(console.warn);
            }

            // Get current location coordinates if supported by browser
            function getNavigatorCoords() {
                var deferred = $q.defer();

                // check for browser support
                if ("geolocation" in navigator) {
                    // get position / prompt for access
                    navigator.geolocation.getCurrentPosition(function(position) {
                        deferred.resolve(position);
                    });
                } else {
                    deferred.reject('geolocation not supported');
                }
                return deferred.promise;
            }
        }]);
