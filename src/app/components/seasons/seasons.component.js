/**
 * Created by raymondmutagahywa on 6/8/16.
 */
'use strict';
/*
function MonthGap(x, y) {
  // Return the number of months between month X and month Y or 12 if they are equal
  return ((x < y) ? (y-x) : (y+12-x));
}
*/

angular.
module('wce2').
component('seasons', {
  templateUrl: 'app/components/seasons/seasons.html',
  controller: function SeasonsController($scope,$log, $filter) {

    $scope.seasons = [
      {id: 1, name: "Autumn", start: "3", end: "5", sales: 25},
      {id: 2, name: "Winter", start: "6", end: "8", sales: 25},
      {id: 3, name: "Spring", start: "9", end: "11", sales: 25},
      {id: 4, name: "Summer", start: "12", end: "2", sales: 25}
    ];
    $scope.monthlist = [
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
    $scope.showSeasons = function showSeasons() {
      return "I work";
    };
    $scope.showStart = function showStatus(season) {
      var selected = [];
      if (season.start) {
        selected = $filter('filter')($scope.monthlist, {value: season.start});
      }
      return selected.length ? selected[0].text : 'Not set';
    };
    $scope.showEnd = function showStatus(season) {
      var selected = [];
      if (season.end) {
        selected = $filter('filter')($scope.monthlist, {value: season.end});
      }
      return selected.length ? selected[0].text : 'Not set';
    };
    $scope.checkName = function checkName(data, id) {
      // if (data !== $scope.defaultseason) {
      $log.info("Name: " + data + " id: " + id);
      //} else { $log.info("Please update the default season name for " +id); }
    };
    /*
     // CUD functions
     $scope.saveUser = function(data, id) {
     //$scope.user not updated yet
     angular.extend(data, {id: id});
     return $http.post('/saveUser', data);
     };
     */
    //remove user
    $scope.removeUser = function (index) {
      $scope.seasons.splice(index, 1);
    };

    // add season
    $scope.addUser = function () {
      $log.info("I have entered addUser");
      $scope.inserted = {
        id: $scope.seasons.length + 1,
        name: '',
        start: null,
        end: null,
        sales: 0
      };
      $scope.seasons.push($scope.inserted);
    };



}});
