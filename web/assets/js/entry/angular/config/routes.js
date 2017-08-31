'use strict';

export default function router($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'templates/main/login.html',
            controller: 'LoginCtrl'
        })
        .state('talk', {
            url: '/:user',
            templateUrl: 'templates/main/talk.html',
            controller: 'TalkCtrl'
        })
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })
    $urlRouterProvider.otherwise('/')
}