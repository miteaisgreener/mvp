	angular.module('calculator.zillow',[])
	
	.controller('ZillowController',function ($scope, Link) {
		$scope.home = {};
		$scope.searchzillow = function(){
			console.log($scope.home, "in controller")
			Link.post($scope.home);
		}

	});