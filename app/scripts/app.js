'use strict';

angular
	.module('ak2App', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute'
	])
	.provider('path', function () {
		var paths = {
			home: {
				root: 'home',
				header: {
					title: 'This is Home Page'
				}
			},
			contact: {
				root: 'contact',
				header: {
					title: 'This is Contact Page'
				}
			}
		};
		this.find =  function(p) {
			return paths[p];
		};
		this.$get = function () {
			return {
				find: find()
			}
		};
	})
	.config(function ($routeProvider, pathProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				target: pathProvider.find('home')
			})
			.when('/contact/:user', {
				templateUrl: 'views/contact.html',
				target: pathProvider.find('contact')
			})
			.otherwise({
				redirectTo: '/'
			});
	});

