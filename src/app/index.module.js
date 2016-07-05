(function () {
  /**
   * Created by raymondmutagahywa on 6/3/16.
   */
    'use strict';
  // configure our module
    angular.module('wce2', [ 'ngAnimate', 'ngResource', 'ngRoute', 'ngMaterial','xeditable']).run(function(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });
}())
