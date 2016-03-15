'use strict';

var app = angular.module('formApp', ['ngMessages']);

app.controller('formCtrl', function($scope) {

  $scope.passwordRegex = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}";

  $scope.userFormSubmit = function(valid) {
    console.log(valid);


  }

});


app.controller('cardCtrl', function($scope) {
  var checking = false;
  $scope.creditSubmit = function(valid) {
    console.log(valid);

  }

  $scope.validCardCheck = function(event) {
    console.log(event);
    var ccString = $scope.card.num;

    var ccArr = ccString.split('');
    var evenCheck = 1;
    for(var i=ccArr.length - 1; i >= 0; i--) {
      evenCheck += 1;
      if(evenCheck % 2 !== 0) {
        ccArr[i] *=  2;
      }
      if(ccArr[i] > 9) {
        var split = ccArr[i].toString().split('');
        ccArr[i] = Number(split[0]) + Number(split[1]);
        }
      }

      var total = ccArr.reduce(function(a, b) {
        return Number(a) + Number(b);
      }) * 9;
      console.log('TOTAL', total);

      if(total % 10 === 0) {
        checking =  false;
      }
      else {
        checking =  true;
      }

    }

    $scope.checkNum = function() {
      console.log('checked');
      return checking;
    }

});
