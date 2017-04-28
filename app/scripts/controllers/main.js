'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, Products) {
  	this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var q = {
    	'$populate': [{
    		path: 'manufacturers',
    		populate: [{
    			path: 'country'
    		},{
    			path: 'address'
    		}]
    	},{
    		path: 'category'
    	}]
    }
    var params = '?' + $.param(q);

    Products.all(params, function (response) {
    	$scope.products = response.data;
    });
  })

  .factory('Products', function ($http) {
  	return {
  		all: function (params, cb) {
  			$http({
				method: 'GET',
				url: 'http://localhost:3030/products' + params,
			}).then(function (results) {
				cb(results.data);
			}, function (error) {
				console.log(error);
			});
  		}
  	}
  });
