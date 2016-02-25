var clueService = function() {    

    var game = {
        suspects: [],
        weapons: [],
        rooms: []
    };

    var getGame = function() {
        return game;
    };

    var createNewGame = function() {
        game = {};

        game.suspects = [
            { name: 'Mr. Green'      , owner: null },
            { name: 'Professor Plum' , owner: null },
            { name: 'Colonel Mustard', owner: null },
            { name: 'Mrs. Peacock'   , owner: null },
            { name: 'Miss Scarlet'   , owner: null },
            { name: 'Mrs. White'     , owner: null },
        ];

        game.weapons = [
            { name: 'Candlestick', owner: null },
            { name: 'Knife'      , owner: null },
            { name: 'Lead Pipe'  , owner: null },
            { name: 'Revolver'   , owner: null },
            { name: 'Rope'       , owner: null },
            { name: 'Wrench'     , owner: null },
        ];

        game.rooms = [
            { name: 'Conservatory' , owner: null },
            { name: 'Lounge'       , owner: null },
            { name: 'Kitchen'      , owner: null },
            { name: 'Library'      , owner: null },
            { name: 'Hall'         , owner: null },
            { name: 'Study'        , owner: null },
            { name: 'Ballroom'     , owner: null },
            { name: 'Dining Room'  , owner: null },
            { name: 'Billiard Room', owner: null },
        ];
    }; 

    var assignSuspect = function(suspect, owner) {
        for(var i = 0; i < game.suspects; i++) {
            if(game.suspects[i] === suspect) {
                game.suspects[i].owner = owner;
                break;
            }
        }
    };

    var assignWeapon = function(weapon, owner) {
        for(var i = 0; i < game.weapons; i++) {
            if(game.weapons[i] === weapon) {
                game.weapons[i].owner = owner;
                break;
            }
        }
    };

    var assignRoom = function(room, owner) {
        for(var i = 0; i < game.rooms; i++) {
            if(game.rooms[i] === room) {
                game.rooms[i].owner = owner;
                break;
            }
        }
    };

    return  {
        getGame: getGame,
        createNewGame: createNewGame,
        assignSuspect: assignSuspect,
        assignWeapon: assignWeapon,
        assignRoom: assignRoom,
    };
};

var app = angular.module('spa');
app.service('clueService', clueService);

