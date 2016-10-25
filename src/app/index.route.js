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
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/views/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile',
        params:
        {
          user_profile: null
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
