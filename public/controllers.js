'use strict';

var app = angular.module('formApp', ['ngMessages']);

//controller for the user form
app.controller('formCtrl', function($scope) {

  //check password strength (LETTER, letter, number, length)
  $scope.passwordRegex = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}";

  $scope.userFormSubmit = function(valid) {
    //only submit, clear form, and mark complete if valid form
    if(valid) {
      swal(swal("Weclcome!", "Your account has been created!", "success"));
      $scope.user = {};
      $scope.user.completed = true;
    }
  };

});


//controller for the credit card info
app.controller('cardCtrl', function($scope) {
  //variable for checking valid card number from Luhn validation
  var checking = false;

  //variable for checking card type based on first number
  var cardType = false;

  $scope.creditSubmit = function(valid) {
    //only submit, clear form, and mark complete if valid form
    if(valid) {
      swal(swal("Thank You!", "Your payment is being processed!", "success"));
      $scope.card = {};
      $scope.card.completed = true;
    }
  };

  $scope.validCardCheck = function(event) {

    var ccString = $scope.card.num;

    var ccArr = ccString.split('');

    //check for card type, only looks at first number
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
    

    //start of Luhn validation
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
      });

      if(total % 10 === 0) {
        //if not real, set the check variable to false
        checking =  false;
      }
      else {
        checking =  true;
      }

    }

    $scope.checkNum = function() {
      //false keeps error hidden, true shows error messages
      return checking;
    }

    //show the card type message.
    $scope.checkBrand = function() {
      if(cardType) {
        $scope.card.brand = cardType;
        return true;
      }
      else {
        return cardType;
      }
    }

});
