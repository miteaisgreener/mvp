	angular.module('calculator.mortgage',[])

	.controller('MortgageController',function($scope){
		
		$scope.payment = 0;

		$scope.getPayment = function(){
			var presentvalue = $scope.homeprice - $scope.downpayment;
			var rateperperiod = $scope.APR/12/100;
			var terms = - $scope.loanterm * 12;
			var bottom = 1 - Math.pow((1 + rateperperiod), terms);

			var payment = (presentvalue * rateperperiod / bottom) + $scope.homeinsurance/12 + $scope.monthlyHOA;
			var payment = Number(payment).toFixed(2);

			$scope.payment = payment;
		}


	});