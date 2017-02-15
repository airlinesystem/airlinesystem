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
    controller: 'offerCT',
    authenticate: true
  })
  .when('/aboutUs', {
    templateUrl: 'aboutUs/aboutUs.html',
    controller: 'aboutCT',
    authenticate: true
  })
  .otherwise({
    redirectTo: '/offer'
  });
  $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {
  return{
    attach : {
      request: function (object) {
        var jwt = $window.localStorage.getItem('token.airline');
        if (jwt) {
          object.headers['x-access-token'] = jwt;
        }
        object.headers['Allow-Control-Allow-Origin'] = '*';
        return object;
      }
    } 
  }
})
.run(function ($rootScope, $location, account) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !account.isAuth()) {
      $location.path('/signin');
    }
  });
});