/*global angular*/
'use strict';
angular.module('myapp', [])
	.directive('hello', [function() {
		return {
			restrict: 'E',
			template: '<span>Hello Angular</span>',
			link: function(scope) {
				console.log(scope);
			}
		};
	}]);