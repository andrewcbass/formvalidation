'use strict';

var app = angular.module('formApp', ['ngMessages']);

app.controller('formCtrl', function($scope) {

  $scope.passwordRegex = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}";

  $scope.formSubmit = function(valid) {
    console.log(valid);

    
  }

});


app.controller('cardCtrl', function($scope) {




})
