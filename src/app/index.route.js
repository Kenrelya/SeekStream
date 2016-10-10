(function() {
  'use strict';

  angular
    .module('seekstream')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('register', {
        url: '/',
        templateUrl: 'app/views/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
