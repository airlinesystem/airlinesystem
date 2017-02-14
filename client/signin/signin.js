'use strict';
angular.module('MyApp.signin', ['ngRoute'])
.controller('signinCT', function($scope, account,$location) {
  $scope.data = {};
  $scope.signin=function(){
	  account.signin($scope.data).then(function(data){
	  	console.log('ikujygftfseda')
	   $location.path('/offer.html')
	
	})
}
})