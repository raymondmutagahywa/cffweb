(function () {
    'use strict';

  // create the controller and inject Angular's $scope
    angular.module('wce2').controller('HomeController', function ($scope) {
      // create a message to display in our view
        var vm = this;
        vm.scope = $scope;
        vm.scope.message = "Home page";
    });
}
)();
