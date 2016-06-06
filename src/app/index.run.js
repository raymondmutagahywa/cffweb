(function() {
    'use strict';
  
    angular
      .module('wce2')
      .run(runBlock);
  
    /** @ngInject */
    function runBlock($log) {
  
      $log.debug('runBlock end');
    }

})();
