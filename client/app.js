//app.js  
angular.module('MyApp',[
  'MyApp.serv',
  'MyApp.signin',
  'MyApp.signup',
  'MyApp.offer',
  'MyApp.about',
  'MyApp.info',
  'MyApp.coon',
  'MyApp.signout',
  "MyApp.by",
  'ngRoute'])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'signupCT'
  })
  .when('/signout', {
    template: '',
    controller: 'outCT'
  })
  .when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'signinCT'
  })
  .when('/by', {
    template: 'by/by.html',
    controller: 'byCT',
    authenticate: true
  })
  .when('/offer',{
    templateUrl: 'offerpage/offer.html',
    controller: 'offerCT',
    authenticate: true
  })
  .when('/info', {
    templateUrl: 'infoPage/info.html',
    controller: 'infoCT',
    authenticate: true
  })
  .when('/aboutUs', {
    templateUrl: 'aboutUs/aboutUs.html',
    controller: 'aboutCT',
    authenticate: true
  })
    .when('/coon', {
    templateUrl: 'connect/coon.html',
    controller: 'coonCT',
    authenticate: true
  })
  .otherwise({
    redirectTo: '/signup'
  });
  $httpProvider.interceptors.push('AttachTokens');
})

.factory('AttachTokens', function ($window) {
  
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('token.airline');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, account) {
 
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !account.isAuth()) {
      $location.path('/signin');
    }
  });
});

