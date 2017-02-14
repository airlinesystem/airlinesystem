var myApp = angular.module('myApp',[
  'myApp.signup',
  'myApp.serv',
  'myApp.signin',
  'ngRoute'
  ])
.config(function ($routeProvider, $httpProvider) {
  //x$locationProvider.hashPrefix('')
  $routeProvider
  .when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'signupCT'
  })
  .when('/signin', {
    templateUrl:'signin/signin.html',
    controller:'signinCT'
  })
})