angular.module('MyApp.signin', [])
.controller('signinCT', function($scope, account,$location,$window) {
  $scope.data = {};
  $scope.signin = function () {
    console.log('in signin js',$scope.data)

    account.signin($scope.data)
    .then(function (token) {
      $window.localStorage.setItem('token.airline', token);
      $location.path('/offer');
    })
    .catch(function (error) {
      console.error(error);
    });
  }

})