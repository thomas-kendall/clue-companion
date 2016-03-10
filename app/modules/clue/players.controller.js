var playersCtrl = function($scope, $location, clueService) {

    // Redirect if there is not a game in progress
    if(!clueService.isGameInProgress()) {
        $location.url('/new-game');
        return;
    }

    $scope.selectedPlayer = clueService.getPlayers()[0];

    var getEntitiesByType = function(entityPool, entityType) {
        var entities = [];
        for(var i = 0; i < entityPool.length; i++) {
            var entity = entityPool[i];
            if(entity.entityType === entityType) {
                entities.push(entity);
            }
        }
        return entities;
    }

    $scope.getOwnedSuspects = function() {
        return getEntitiesByType($scope.selectedPlayer.entitiesOwned, 'suspect');
    };

    $scope.getOwnedWeapons = function() {
        return getEntitiesByType($scope.selectedPlayer.entitiesOwned, 'weapon');
    };

    $scope.getOwnedRooms = function() {
        return getEntitiesByType($scope.selectedPlayer.entitiesOwned, 'room');
    };

    $scope.getUnownedSuspects = function() {
        return getEntitiesByType($scope.selectedPlayer.entitiesNotOwned, 'suspect');
    };

    $scope.getUnownedWeapons = function() {
        return getEntitiesByType($scope.selectedPlayer.entitiesNotOwned, 'weapon');
    };

    $scope.getUnownedRooms = function() {
        return getEntitiesByType($scope.selectedPlayer.entitiesNotOwned, 'room');
    };

    $scope.getPlayers = function() {
        return clueService.getPlayers();
    };
};

var app = angular.module('spa');
app.controller('PlayersCtrl', playersCtrl);

