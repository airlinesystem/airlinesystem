 var app = angular.module('MyApp',[]);

app.controller('signinCT', function($scope, account,$location) {
  $scope.data = {};
  $scope.signin=function(){
	  account.signin($scope.data).then(function(data){
	  
	  	if(res.data[0].userName == $scope.user.username && res.data[0].userPassword == $scope.user.password ){
	  	$location.path('/index')
	  }else{
	  	//alert('sholud signup')
	  	$location.path('/signup')
	  }
	  })
	}
});




