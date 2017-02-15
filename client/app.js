//app.js
angular.module('MyApp',[
  'MyApp.serv',
  'MyApp.signin',
  'MyApp.signup',
  'MyApp.offer',
  'ngRoute'])
.config(function ($routeProvider, $httpProvider) {

  $routeProvider
    .when('/signup', {
      templateUrl: 'signup/signup.html',
      controller: 'signupCT'
    })
      .when('/signin', {
      templateUrl: 'signin/signin.html',
      controller: 'signinCT'
    })
      .when('/offer',{
        templateUrl: 'offerpage/offer.html',
        controller: 'offerCT'
      })
    
    })
   

