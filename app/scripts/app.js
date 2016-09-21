'use strict';

/**
 * @ngdoc overview
 * @name seekstreamApp
 * @description
 * # seekstreamApp
 *
 * Main module of the application.
 */
angular
  .module('seekstreamApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $logProvider, $resourceProvider, $httpProvider) {
    $logProvider.debugEnabled(true);
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.withCredentials = true;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
