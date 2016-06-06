(function () {
    'use strict';
  // create the controller and inject Angular's $scope
    angular.module('wce2').controller('FinancialController', function ($scope) {
      // create a message to display in our view
            var vm = this;
            vm.scope = $scope;
            vm.scope.message = "Financial page";
          //$scope.message = 'Company page!';
        });
})();
