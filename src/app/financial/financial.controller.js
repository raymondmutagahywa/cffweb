(function () {
    'use strict';
  // create the controller and inject Angular's $scope

    angular.module('wce2').controller('FinancialController', function ($log, $filter) {

        var vm = this;
        vm.seasons = [
            {id: 1, name: "Autumn", start: "3", end: "5", sales: 25},
            {id: 2, name: "Winter", start: "6", end: "8", sales: 25},
            {id: 3, name: "Spring", start: "9", end: "11", sales: 25},
            {id: 4, name: "Summer", start: "12", end: "2", sales: 25}
        ];
        vm.monthlist = [
            {value: 1, text: 'January'},
            {value: 2, text: 'February'},
            {value: 3, text: 'March'},
            {value: 4, text: 'April'},
            {value: 5, text: 'May'},
            {value: 6, text: 'June'},
            {value: 7, text: 'July'},
            {value: 8, text: 'August'},
            {value: 9, text: 'September'},
            {value: 10, text: 'October'},
            {value: 11, text: 'November'},
            {value: 12, text: 'December'}
        ];
        vm.showSeasons = function showSeasons() {
            return "I work";
        };
        vm.showStart = function showStatus(season) {
            var selected = [];
            if (season.start) {
                selected = $filter('filter')(vm.monthlist, {value: season.start});
            }
            return selected.length ? selected[0].text : 'Not set';
        };

        vm.showEnd = function showStatus(season) {
            var selected = [];
            if (season.end) {
                selected = $filter('filter')(vm.monthlist, {value: season.end});
            }
            return selected.length ? selected[0].text : 'Not set';
        };
        vm.checkName = function checkName(data, id) {
           // if (data !== vm.defaultseason) {
                  $log.info("Name: " + data + " id: " + id);
            //} else { $log.info("Please update the default season name for " +id); }
        };
    /*
    // CUD functions
        vm.saveUser = function(data, id) {
      //$scope.user not updated yet
            angular.extend(data, {id: id});
            return $http.post('/saveUser', data);
        };
*/
   //remove user
        vm.removeUser = function (index) {
            vm.seasons.splice(index, 1);
        };

    // add season
        vm.addUser = function () {
            $log.info("I have entered addUser");
            vm.inserted = {
                id: vm.seasons.length + 1,
                name: '',
                start: null,
                end: null,
                sales: 0
            };
            vm.seasons.push(vm.inserted);
        };

    });

})();


