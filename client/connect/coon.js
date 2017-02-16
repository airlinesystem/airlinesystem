 angular.module('MyApp.coon', [])
.controller('coonCT',function ($scope,$location) {
	$scope.gitoffer = function(){

     $location.path('/offer')
	}
})