angular.module('MyApp.info', [])
.controller("infoCT",function ($scope,$location) {
   $scope.byment = function(){
	   $location.path('/')
   }
})
