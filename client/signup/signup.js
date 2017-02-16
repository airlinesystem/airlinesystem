angular.module('MyApp.signup', [])
.controller('signupCT', function($scope, account, $location) {
	$scope.data = {};
	$scope.signup = function () {
		account.signup($scope.data)
		.then(function (token) {
			$window.localStorage.setItem('token.airline', token);
			$location.path('/offer');
		})
		.catch(function (error) {
			console.error(error);
		});
	}
});