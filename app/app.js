console.log('app module loading...');

var app = angular.module('spa', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/menu', {
            templateUrl: 'app/modules/menu/views/menu.html',
            controller: 'MenuCtrl'
        })
        .when('/clue-card', {
            templateUrl: 'app/modules/clue/views/clue-card.html',
            controller: 'ClueCtrl'
        })
        .otherwise('/menu');    
});

app.controller('AppCtrl', function ($scope) {
        console.log('AppCtrl loaded.');
});

console.log('app module loaded.');
