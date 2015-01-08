  var myApp = angular.module('vending',[]);

  myApp.controller('VendingMachine', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
    $scope.snacks=[
          {name:'Pepsi', quantity:5, img:"pepsi.jpg"},
          {name:'Coca-Cola', quantity:3, img:"cocacola.jpeg"},
          {name:'Trail Mix', quantity:0, img:"trailmix.jpg"},
          {name:'Beef Jerky', quantity:10, img:"beef-jerky-strips.png"},
          {name:'Yogurt Pretzels', quantity:7, img:"yogurt-pretzels.jpg"},
          {name:'M&Ms', quantity:2, img:"m&ms.png"},
          {name:'Twizzlers', quantity:1, img:"twizzlers.jpg"},
          {name:'Snickers', quantity:5, img:"snickers.png"},
          {name:'Cheetos', quantity:2, img:"flaminhot.jpg"}
        ];
    $scope.selects;
    $scope.randomNum = 0;
    $scope.lastItemSelected = {};

    $scope.snackMeInit = function (){
      $scope.lastItemSelected = {};
      $scope.randomNum = Math.floor(Math.random() * ($scope.snacks.length-1)) + 1;
      $scope.selects = $scope.snacks[$scope.randomNum];

    }
    $scope.snackAccepted = function(){
      $scope.itemSelected = true;
      var snackAcceptedPos = $scope.randomNum;
      var currQuantity = $scope.snacks[snackAcceptedPos].quantity;
      if(currQuantity > 0){
        currQuantity--;
        $scope.snacks[snackAcceptedPos].quantity = currQuantity;
      }
      $scope.lastItemSelected = $scope.selects;
      $scope.selects = {};
    }

  }]);
