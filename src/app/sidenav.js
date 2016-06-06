(function () {
  /**
   * Created by raymondmutagahywa on 6/3/16.
   */
    'use strict';
    angular.module('wce2').controller('SidenavController', function ($scope, $mdSidenav) {
        var vm = $scope;
        vm.toggleLeftMenu = function () {
            $mdSidenav('left').toggle();
        };
    });
})();


