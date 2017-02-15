 angular.module('MyApp.offer', [])
.controller('offerCT',function ($scope,$location) {
	$scope.gitoffer = function(){
     $location.path('/')
	}
})
