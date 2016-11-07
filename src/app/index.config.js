(function() {
  'use strict';

  angular
    .module('seekstream')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $resourceProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.withCredentials = true;
    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
