var rumorCtrl = function($scope, $location, clueService) {

    // Redirect if there is not a game in progress
    if(!clueService.isGameInProgress()) {
        $location.url('/new-game');
        return;
    }

    $scope.rumor = new ClueRumorModel();

    $scope.getSuspects = function() {
        return clueService.getSuspects();
    };

    $scope.getWeapons = function() {
        return clueService.getWeapons();
    };

    $scope.getRooms = function() {
        return clueService.getRooms();
    };

    $scope.getPlayers = function() {
        return clueService.getPlayers();
    };

    $scope.playerWithoutCardsExists = function(player) {
        return $scope.rumor.playersWithoutCards.indexOf(player) > -1;
    };

    $scope.togglePlayerWithoutCards = function(player) {
        var index = $scope.rumor.playersWithoutCards.indexOf(player);
        if(index > -1) {
            $scope.rumor.playersWithoutCards.splice(index, 1);
        } else {
            $scope.rumor.playersWithoutCards.push(player);
        }
    };

    $scope.submitRumor = function() {
        clueService.addRumor($scope.rumor);
        $location.url('/clue-card');
    };
};

var app = angular.module('spa');
app.controller('RumorCtrl', rumorCtrl);

