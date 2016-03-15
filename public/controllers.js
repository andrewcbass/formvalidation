'use strict';

var app = angular.module('formApp', ['ngMessages']);

app.controller('formCtrl', function($scope) {

  $scope.passwordRegex = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}";

  $scope.userFormSubmit = function(valid) {
    console.log(valid);

    if(valid) {
      swal(swal("Weclcome!", "Your account has been created!", "success"));
      $scope.user = {};
      $scope.user.completed = true;
    }


  }

});


app.controller('cardCtrl', function($scope) {
  var checking = false;
  var cardType = '';

  $scope.creditSubmit = function(valid) {
    console.log(valid);
    console.log($scope.creditCard);

    if(valid) {
      swal(swal("Thank You!", "Your payment is being processed!", "success"));
      $scope.card = {};
      $scope.card.completed = true;
    }
  }

  $scope.validCardCheck = function(event) {

    var ccString = $scope.card.num;

    var ccArr = ccString.split('');

    //check for card type
    if(ccArr[0] == "3") {
      cardType = "You are paying with American Express."
    }
    if(ccArr[0] == "4") {
      cardType = "You are paying with Visa."
    }
    if(ccArr[0] == "5") {
      cardType = "You are paying with Mastercard."
    }
    if(ccArr[0] == "6") {
      cardType = "You are paying with Discover."
    }

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

      if(total % 10 === 0) {
        checking =  false;
      }
      else {
        checking =  true;
      }

    }

    $scope.checkNum = function() {
      return checking;
    }

    $scope.checkBrand = function() {
      $scope.card.brand = cardType;
      return true;
    }

});
