/**
 * Created by raymondmutagahywa on 6/27/16.
 */

angular.module('wce2').component('financials', {
  templateUrl: 'app/components/financials/financials.html',
  controller: function FinancialsController($scope,$log, $filter,$http) {
      $scope.data = {
        companyID: 1,
        sales: 0,
        costs: 0,
        recievables: 0,
        payables: 0,
        inventory: 0
      };

      $scope.checkName = function(data) {
        if (data !== 'awesome' && data !== 'error') {
          return "Username should be `awesome` or `error`";
        }
      };

      $scope.saveUser = function() {
        // $scope.user already updated!
        return $http.post('/saveUser', $scope.user).error(function(err) {
          if(err.field && err.msg) {
            // err like {field: "name", msg: "Server-side error for this username!"}
            $scope.financailsForm.$setError(err.field, err.msg);
          } else {
            // unknown error
            $scope.financialsForm.$setError('name', 'Unknown error!');
          }
        });
      };

  }});
