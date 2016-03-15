'use strict';

var app = angular.module('formApp', ['ngMessages']);

app.controller('formCtrl', function($scope) {

  $scope.passwordRegex = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}";

  $scope.sameSame = function() {
    if($scope.user.password === $scope.user.confirm) {
      $scope.match = false;
      return;
    }
    else {
      $scope.match = true;
    }
  }

});


app.controller('cardCtrl', function($scope) {



  
})
