var app = angular.module('spa', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider){
    $routeProvider
        .when('/new-game', {
            templateUrl: 'app/modules/clue/views/new-game.html',
            controller: 'NewGameCtrl'
        })
        .when('/clue-card', {
            templateUrl: 'app/modules/clue/views/clue-card.html',
            controller: 'ClueCtrl'
        })
        .when('/card-known', {
            templateUrl: 'app/modules/clue/views/card-known.html',
            controller: 'CardKnownCtrl'
        })
        .when('/rumor', {
            templateUrl: 'app/modules/clue/views/rumor.html',
            controller: 'RumorCtrl'
        })
        .when('/players', {
            templateUrl: 'app/modules/clue/views/players.html',
            controller: 'PlayersCtrl'
        })
        .otherwise('/new-game');    
});

app.controller('AppCtrl', function ($scope, $location) {
    $scope.routeIs = function(routeName){
        return $location.path() === routeName;
    };
});

console.log('app module loaded.');


