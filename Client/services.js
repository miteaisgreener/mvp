angular.module('calculator.services', [])

.factory('Link', function ($http) { //create Links, use $http 
  // Your code here

  var post = function (address) {
    return $http({
      method: 'POST', //GET all data from /api/links
      url: '/zillow',
      data: {address : address},
    })
    .then(function(data){
      console.log(data,"hello in Link");
    })
  };

    return {
      post: post
    };
  })