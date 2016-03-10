var cardKnownCtrl = function($scope, $location, clueService) {

    // Redirect if there is not a game in progress
    if(!clueService.isGameInProgress()) {
        $location.url('/new-game');
        return;
    }

    $scope.owner = clueService.getPlayers()[0];
    $scope.suspect = null;
    $scope.weapon = null;
    $scope.room = null;

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

    $scope.onSuspectSelected = function() {
        $scope.weapon = null;
        $scope.room = null;
    };

    $scope.onWeaponSelected = function() {
        $scope.suspect = null;
        $scope.room = null;
    };

    $scope.onRoomSelected = function() {
        $scope.suspect = null;
        $scope.weapon = null;
    };

    $scope.validate = function() {
        return ($scope.suspect || $scope.weapon || $scope.room) && $scope.owner;
    };

    $scope.submit = function() {  
        var entity = $scope.suspect ? $scope.suspect : $scope.weapon ? $scope.weapon : $scope.room;      
        clueService.addEntityOwner(entity, $scope.owner);
        $location.url('/clue-card');
    };
};

var app = angular.module('spa');
app.controller('CardKnownCtrl', cardKnownCtrl);

