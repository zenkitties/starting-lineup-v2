(function(angular) {
    "use strict";

var startingApp = angular.module('startingApp',['ui.router']);
    
startingApp.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ==================

        .state('home',{
            url: '/home',
            templateUrl: 'app/views/home/home.html'
        })

        .state('8-free-bonuses',{
            url: '/8-free-bonuses',
            templateUrl: 'app/views/8_free_bonuses/8_free_bonuses.html'
        })

        .state('about-us',{
            url: '/about-us',
            templateUrl: 'app/views/about_us/about_us.html'
        })

        .state('faqs', {
            url: '/faqs',
            templateUrl: 'app/views/faqs/faqs.html'
        })

        .state('privacy-policy',{
            url: '/privacy-policy',
            templateUrl: 'app/views/privacy_policy/privacy_policy.html'
        })

//        .state('bonus', {
//            templateUrl: 'app/views/includes/bonus.html'
//        })
});
    
    // CONTROLLERS =======================================
    
startingApp.controller('HplController',['$scope', function($scope){
    $scope.products = [
        {
            id: '01',
            name: 'The Catapult Loading System',
            url: 'http://gohpl.com/clsbook',
            description: 'This is a description of the catapult loading system.',
            img: '/img/the-catapult-loading-system.png'
        },
        {
            id: '02',
            name: 'The Science of Sticky Coaching',
            url: 'http://gohpl.com/soscbook',
            description: 'This is a description of the science of sticky coaching.',
            img: '/img/the-science-of-sticky-coaching.png'
        },
        {
            id: '03',
            name: 'The Ugly Truth About Hitting Ground Balls',
            url: 'http://gohpl.com/uglytruthbook',
            description: 'This is a description of the ugly truth about hitting ground balls.',
            img: '/img/the-ugly-truth-about-hitting-ground-balls.png'
        }
    ]
}]);
    
startingApp.controller('GithubController',['$scope'], function($scope){
    $scope.github = [
        {
            acct: 'zenkitties',
            branch: 'starting-lineup-v2'; 
        }
    ]
})
    
    
    
    // DIRECTIVES ========================================
    
startingApp.directive('eightFreeBonuses',function(){
    return {
        restrict: 'EAC',
        templateUrl: 'app/views/includes/bonus.html'
    }
});
    
startingApp.directive('newsletter',function(){
    return {
        restrict: 'EAC',
        templateUrl: 'app/views/includes/newsletter.html'
    }
});
    
startingApp.directive('hplProducts',function(){
    return {
        restrict: 'EAC',
        templateUrl: 'app/views/includes/hpl-products.html',
        controller: 'HplController'
    }
});
    
startingApp.directive('contactUs',function(){
    return {
        restrict: 'EAC',
        templateUrl: 'app/views/includes/contact_us.html'
    }
});    
    
    
})(window.angular);