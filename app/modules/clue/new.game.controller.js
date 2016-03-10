var newGameCtrl = function($scope, $location, $cookies, clueService) {
    
    $scope.players = [];
    $scope.numberOfPlayersList = [2, 3, 4, 5, 6];
    $scope.numberOfPlayers = 4;
    $scope.gameType = 'clue'; // other option is classic

    $scope.refreshPlayers = function(players) {
        if(players) {
            $scope.players = players;
            $scope.numberOfPlayers = players.length;
        }
        
        if($scope.numberOfPlayers < 2) $scope.numberOfPlayers = 2;
        if($scope.numberOfPlayers > 6) $scope.numberOfPlayers = 6;

        if($scope.players.length > $scope.numberOfPlayers) {
            $scope.players.splice($scope.numberOfPlayers, $scope.players.length - $scope.numberOfPlayers);
        }
        for(var i = $scope.players.length; i < $scope.numberOfPlayers; i++) {
            var playerName = i === 0 ? "Your name" : "Player " + i;
            $scope.players.push(new CluePlayerModel(playerName));
        }
    }

    $scope.createGame = function() {
        if($scope.gameType === 'clue') {
            clueService.createNewGame($scope.players);    
        } else if($scope.gameType === 'classic') {
            clueService.createNewClassicGame($scope.players);    
        } else {
            alert('Unknown game type: ' + $scope.gameType);
        }
        
        saveSettingsToCookies();

        $location.url('/clue-card');
    };

    var getPlayerNames = function() {
        var names = [];
        for(var i = 0; i < $scope.players.length; i++) {
            names.push($scope.players[i].name);
        }
        return names;
    };

    var loadSettingsFromCookies = function() {
        var playerNamesString = $cookies.get('playerNames');
        if(playerNamesString) {
            var playerNames = JSON.parse(playerNamesString);
            var players = [];            
            for(var i = 0; i < playerNames.length; i++) {
                players.push(new CluePlayerModel(playerNames[i]));
            }
            $scope.refreshPlayers(players);
        }
    };

    var saveSettingsToCookies = function() {
        var playerNames = getPlayerNames();
        $cookies.put('playerNames', JSON.stringify(playerNames));
    };

    $scope.refreshPlayers(null);
    loadSettingsFromCookies();
};

var app = angular.module('spa');
app.controller('NewGameCtrl', newGameCtrl);

