 angular.module('MyApp.by', [])
.controller('byCT',function ($scope,$location) {
    $scope.by = function(){
     $location.path('/')
    }
})

