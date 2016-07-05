/**
 * Created by raymondmutagahywa on 6/8/16.
 */
'use strict';
// Register `IndustrySelector` component, along with its associated controller and template
angular.
module('wce2').
component('industrySelector', {
  templateUrl: 'app/components/industryselector/industrySelector.html',
  controller: function IndustrySelectorController($scope,$http,$log) {

    // Set Industries
     $http.get("app/components/industryselector/industry.json").then(function (response) {
       $scope.ICBs = response.data.records;
    });

    // Set subsectors
      $http.get("app/components/industryselector/subsector.json").then(function (response) {
      $scope.subsectors = response.data.records;
    });

    this.testX = function testfunc() {
      $log.info("you can put a function, in a function");
      var obj = {"iICB": "0001","sICB": "0000","sName": "Raymond"}
      $scope.subsectors.push(obj);
    }

}});
