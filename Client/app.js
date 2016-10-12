angular.module('calculator',[
	'calculator.mortgage',
	'calculator.preq',
	'calculator.zillow',
	'calculator.services',
	'ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/mortgage',{
			templateUrl: 'mortgage.html',
			controller: 'MortgageController'
		})
		.when('/preq',{
			templateUrl: 'preq.html',
			controller: 'PreqController'
		})
		.when('/zillow',{
			templateUrl: 'zillow.html',
			controller: 'ZillowController'
		})
		.otherwise({
			redirectTo: '/'
		});
	})
