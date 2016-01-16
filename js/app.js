/*global angular*/
'use strict';
angular.module('myapp', [])
	.directive('hello', [function() {
		return {
			restrict: 'E',
			transclude: true,
			template: '<div>Hello<angular></angular></div>',
			controller: ["$scope",function(scope) {
				console.log(scope,this);
				this.func = function() {
					return "aaa";
				}
			}],
			link: function(scope){
				scope.aaa = "aaa";
				scope.console = function() {
					console.log("get parent scope ok");
				}
			}
		};
	}])
	.directive('angular', [function() {
		return {
			restrict: 'EA',
			transclude: true,
			template: '<button ng-click="console()">Angular</button>',
			require: "?hello",
			link: function(scope,element,attrs,helloCtrl) {
				console.log(scope);
			}
		};
	}]);