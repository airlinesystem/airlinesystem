angular.module('MyApp.serv', [])
.factory('account', function ($http, $location, $window) {
  return {
    signin : function (user) {
      return $http({
        method: 'POST',
        url: '/api/users/signin',
        data: user
      })
      .then(function (resp) {
        return resp.data.token;
      });
    },

    signup : function (user) {
      console.log('im in the serv',user)
      return $http({
        method: 'POST',
        url: '/api/users/signup',
        data: user
      })
      .then(function (resp) {
        return resp.data.token;
      });
    },
    isAuth : function () {
      return !!$window.localStorage.getItem('token.airline');
    },
    signout : function () {
      //console.log('in ser')
      $window.localStorage.removeItem('token.airline');
      $location.path('/signin');
    }  
  }
})
