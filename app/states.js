(function(angular) {
    "use strict";

    var startingApp = angular.module('startingApp');

    startingApp.config(function($routeProvider) {
        
     $routeProvider
        .when('/', {
              URL: '/'     
              })
     
        .when('/about', {
               templateUrl: 'app/views/about_us.html'
                })
     
        .when('/8-free-bonuses', {
               templateUrl: 'app/views/8_free_bonuses.html'
                })
        .when('/privacy-policy', {
                templateUrl: 'app/views/privacy_policy.html'
                })
        .when('/faqs', {
                templateUrl: 'app/views/faqs.html'
                })
     
        .otherwise ({ redirectTo: '/' });
                
                })

})(window.angular);