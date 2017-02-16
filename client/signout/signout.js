 angular.module('MyApp.signout', [])
 .controller('outCT',function ($scope,$location,account) {
 	console.log('1');
 	account.signout();
	console.log('2');
 		
 
 })
