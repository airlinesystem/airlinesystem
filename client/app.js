//app.js
angular.module('MyApp',[
  'MyApp.serv',
  'MyApp.signin',
  'MyApp.signup',
  'MyApp.offer',
  'MyApp.about',
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
      .when('/aboutUs', {
      templateUrl: 'aboutUs/aboutUs.html',
      controller: 'aboutCT'
    })
    
    })
   

