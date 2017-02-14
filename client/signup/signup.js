'use strict'

angular.module('MyApp.signup', [])

.controller('signupCT', function($scope, account, $location) {
	$scope.data = {};

$scope.signup = function () {
	account.signup($scope.data)
	.then(function () {

		$location.path('/offer');
	})
	.catch(function (error) {
		console.error(error);
	});
}
});