'use strict';

/**
 * @ngdoc overview
 * @name backbaseApp
 * @description
 * # backbaseApp
 *
 * Main module of the application.
 */
angular
    .module('backbaseApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'pipe',
        'backbaseApp.pipeApi'
    ])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/list.html',
            controller: 'ListCtrl'
        });
    });