(function () {
    'use strict';

    angular
        .module('wce2')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'app/home/home.html',
                controller  : 'HomeController',
                controllerAs : 'Home'
            })
            // route for the Company page
            .when('/home', {
                templateUrl : 'app/home/home.html',
                controller  : 'HomeController',
                controllerAs :  'Home'
            })
            // route for the Company page
            .when('/company', {
                templateUrl : 'app/company/company.html',
                controller  : 'CompanyController',
                controllerAs :  'Company'
            })
            // route for the Financials page
            .when('/financial', {
                templateUrl : 'app/financial/financial.html',
                controller  : 'FinancialController',
                controllerAs : 'Financial'
            })
            // route for the Scenarios page
            .when('/scenarios', {
                templateUrl : 'app/scenarios/scenarios.html',
                controller  : 'ScenariosController',
                controllerAs :  'Scenarios'
            })
            // route for the Company page
            .when('/recommendation', {
                templateUrl : 'app/recommendation/recommendation.html',
                controller  : 'RecommendationController',
                controllerAs :  'Recommendation'
            });
    }
})();
