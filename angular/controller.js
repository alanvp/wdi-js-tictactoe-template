var ticTacToeApp = angular.module('ticTacToeApp', []);

ticTacToeApp.controller('ticTacToeCtrl', function ($scope) {

  $scope.initGame = function() {
    $scope.players = [
      {name: "Bert", marker: "X", img: "/img/bert.jpg"},
      {name: "Ernie", marker: "0", img: "/img/ernie.jpg"},
    ];  
    $scope.tiles = ["","","","","","","","",""];
    $scope.currentPlayer = $scope.players[Math.floor(Math.random()*2)];  
  };
  
  var switchPlayer = function() {
    currentPlayer = $scope.currentPlayer;
    if (currentPlayer === $scope.players[0]) {$scope.currentPlayer = $scope.players[1];}
    else {$scope.currentPlayer = $scope.players[0];}
  };

  $scope.isWinner = function() {
    tiles = $scope.tiles;
    if (tiles[0] !== "" && tiles[0]===tiles[1] && tiles[0]===tiles[2]) {return true;}
    else if (tiles[3] !== "" && tiles[3]===tiles[4] && tiles[3]===tiles[5]) {return true;}    
    else if (tiles[6] !== "" && tiles[6]===tiles[7] && tiles[6]===tiles[8]) {return true;}
    else if (tiles[0] !== "" && tiles[0]===tiles[3] && tiles[0]===tiles[6]) {return true;}
    else if (tiles[1] !== "" && tiles[1]===tiles[4] && tiles[1]===tiles[7]) {return true;}
    else if (tiles[2] !== "" && tiles[2]===tiles[5] && tiles[2]===tiles[8]) {return true;}
    else if (tiles[0] !== "" && tiles[0]===tiles[4] && tiles[0]===tiles[8]) {return true;}
    else if (tiles[2] !== "" && tiles[2]===tiles[4] && tiles[2]===tiles[6]) {return true;}
    else return false;
  };

  $scope.isTie = function() {
    if ($scope.isWinner()) {return false;}
    for (var i=0; i<$scope.tiles.length; i++) {
      if ($scope.tiles[i] === "") {return false;}
    }
    return true;
  };

  $scope.addMarker = function() {
    if ($scope.tiles[this.$index] !== "") {return;}
    if ($scope.isWinner()) {return;}
    $scope.tiles[this.$index] = $scope.currentPlayer.marker;
    if ($scope.isWinner()) {console.log($scope.currentPlayer.name+" Won!");}
    else if ($scope.isTie()) {console.log("Tie!");}
    else {switchPlayer();}
  };

  $scope.initGame();

});