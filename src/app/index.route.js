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
      .state('informations', {
        url: '/infos/:type', // type = Modify ou register
        templateUrl: 'app/views/informations.html',
        controller: 'InformationsController',
        controllerAs: 'info'
      })
      .state('profile', {
        url: '/profile/:user_id',
        templateUrl: 'app/views/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      })
      .state('search', {
        url: '/search?query',
        templateUrl: 'app/views/search.html',
        controller: 'SearchController',
        controllerAs: 'search'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
