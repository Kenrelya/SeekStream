(function() {
  'use strict';

  angular
    .module('seekstream')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
