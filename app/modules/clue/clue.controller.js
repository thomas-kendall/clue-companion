var clueCtrl = function($scope, $location, clueService) {
    $scope.getGame = function() {
        return clueService.getGame();
    };

    $scope.suspectOwnerAssigned = function(suspect, owner) {
        clueService.assignSuspect(suspect, owner);
    };

    $scope.weaponOwnerAssigned = function(weapon, owner) {
        clueService.assignWeapon(weapon, owner);
    };

    $scope.roomOwnerAssigned = function(room, owner) {
        clueService.assignRoom(room, owner);
    };
};

var app = angular.module('spa');
app.controller('ClueCtrl', clueCtrl);

