'use strict';

angular.module('ak2App')
	.controller('RoutecontrollerCtrl', function ($scope, $route) {
		var resolve = function () {
			var target = $route.current.target.root;
			console.log(target);
			$scope.target = target;
		};
		$scope.isActive = function (path) {
			return $scope.target == path;
		};
		$scope.$on(
			'$routeChangeSuccess',
			function () {
				resolve();
			}
		);


	});
