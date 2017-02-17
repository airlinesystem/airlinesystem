angular.module('MyApp.info', [])
.controller("infoCT",function ($scope,$location) {
   $scope.byment = function(){
	   $location.path('/')
   }
})

//  angular.module('MyApp.offer', [])
// .controller('offerCT',function ($scope,$location) {
// 	$scope.gitoffer = function(){
//      $location.path('/info')
// 	}
// })
