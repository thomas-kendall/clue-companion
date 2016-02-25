var menuCtrl = function($scope, $location, clueService) {
    $scope.startClue = function(){
        clueService.createNewGame();
        $location.url('/clue-card');
    };
};

var app = angular.module('spa');
app.controller('MenuCtrl', menuCtrl);

