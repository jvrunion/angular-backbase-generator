'use strict';

/**
 * @ngdoc function
 * @name backbaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the backbaseApp
 */
angular.module('backbaseApp')
	.controller('ListCtrl', function ($scope, $sce, pipeService) {
		pipeService.getList().then(
			function success (data) {
				$scope.list = data.items;
				$scope.count = data.count;
			},
			function error () {
				$scope.error = true;
			}
		);

		$scope.toggleSummary = function (item) {
			item.full = item.full ? false : true;
		};
	});
