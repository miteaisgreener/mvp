	angular.module('calculator.preq',[])
	
	.controller('PreqController',function($scope){

		$scope.price = 0;

		$scope.getPreq = function(){
			var afterTax = $scope.income * (1 - .32) / 12;
			var otherexpenses = afterTax * 0.2 / 12;

			var price = afterTax - otherexpenses - $scope.otherpayments;
			var price = Number(price).toFixed(2);

			$scope.price = price;
			
		}
	});