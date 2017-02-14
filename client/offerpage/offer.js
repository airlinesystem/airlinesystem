angular.module('MyApp.offer', ['ngRoute'])
.controller('offerCT',function ($scope,$location) {
	$scope.gitoffer = function(){
     $location.path('/')
	}
})