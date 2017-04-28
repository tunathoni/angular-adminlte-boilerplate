'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('HeaderCtrl', function ($scope, $location) {
     
     $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    
  });
