var clueCtrl = function($scope, $location, clueService) {

    // Redirect if there is not a game in progress
    if(!clueService.isGameInProgress()) {
        $location.url('/new-game');
        return;
    }

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

    $scope.findOwner = function(entity) {
        return clueService.findOwner(entity);
    };

    $scope.isProvenEntity = function(entity) {
        return clueService.isProvenEntity(entity);
    };
};

var app = angular.module('spa');
app.controller('ClueCtrl', clueCtrl);

