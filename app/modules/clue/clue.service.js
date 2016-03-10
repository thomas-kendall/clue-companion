var clueService = function() {    

    var game = null;

    var createNewGame = function(players) {
        var suspects = [
            new ClueEntityModel('suspect', 'Green'  ), // Jacob Green
            new ClueEntityModel('suspect', 'Mustard'), // Jack Mustard
            new ClueEntityModel('suspect', 'Peacock'), // Eleanor Peacock
            new ClueEntityModel('suspect', 'Plum'   ), // Victor Plum
            new ClueEntityModel('suspect', 'Scarlet'), // Kasandra Scarlet
            new ClueEntityModel('suspect', 'White'  ), // Diane White
        ];

        var weapons = [
            new ClueEntityModel('weapon', 'Ax'          ),
            new ClueEntityModel('weapon', 'Baseball bat'),
            new ClueEntityModel('weapon', 'Candlestick' ),
            new ClueEntityModel('weapon', 'Dumbbell'    ),
            new ClueEntityModel('weapon', 'Knife'       ),
            new ClueEntityModel('weapon', 'Pistol'      ),
            new ClueEntityModel('weapon', 'Poison'      ),
            new ClueEntityModel('weapon', 'Rope'        ),
            new ClueEntityModel('weapon', 'Trophy'      ),
        ];

        var rooms = [
            new ClueEntityModel('room', 'Dining Room'),
            new ClueEntityModel('room', 'Guest House'),
            new ClueEntityModel('room', 'Hall'       ),
            new ClueEntityModel('room', 'Kitchen'    ),
            new ClueEntityModel('room', 'Living Room'),
            new ClueEntityModel('room', 'Observatory'),
            new ClueEntityModel('room', 'Patio'      ),
            new ClueEntityModel('room', 'Spa'        ),
            new ClueEntityModel('room', 'Theatre'    ),
        ];

        game = new ClueGameModel(suspects, weapons, rooms, players);
    }; 

    var createNewClassicGame = function(players) {
        var suspects = [
            new ClueEntityModel('suspect', 'Colonel Mustard'),
            new ClueEntityModel('suspect', 'Miss Scarlet'   ),
            new ClueEntityModel('suspect', 'Mr. Green'      ),
            new ClueEntityModel('suspect', 'Mrs. Peacock'   ),
            new ClueEntityModel('suspect', 'Mrs. White'     ),
            new ClueEntityModel('suspect', 'Professor Plum' ),
        ];

        var weapons = [
            new ClueEntityModel('weapon', 'Candlestick'),
            new ClueEntityModel('weapon', 'Knife'      ),
            new ClueEntityModel('weapon', 'Lead Pipe'  ),
            new ClueEntityModel('weapon', 'Revolver'   ),
            new ClueEntityModel('weapon', 'Rope'       ),
            new ClueEntityModel('weapon', 'Wrench'     ),
        ];

        var rooms = [
            new ClueEntityModel('room', 'Ballroom'     ),
            new ClueEntityModel('room', 'Billiard Room'),
            new ClueEntityModel('room', 'Conservatory' ),
            new ClueEntityModel('room', 'Dining Room'  ),
            new ClueEntityModel('room', 'Hall'         ),
            new ClueEntityModel('room', 'Kitchen'      ),
            new ClueEntityModel('room', 'Library'      ),
            new ClueEntityModel('room', 'Lounge'       ),
            new ClueEntityModel('room', 'Study'        ),
        ];

        game = new ClueGameModel(suspects, weapons, rooms, players);
    }; 

    var isGameInProgress = function() {
        return game != null;
    };

    var getSuspects = function() {
        return game.suspects;
    };

    var getWeapons = function() {
        return game.weapons;
    };

    var getRooms = function() {
        return game.rooms;
    };

    var getPlayers = function() {
        return game.players;
    };

    var addEntityOwner = function(entity, owner) {
        game.addEntityOwner(entity, owner);
    };

    var addRumor = function(rumor) {
        game.addRumor(rumor);
    };

    var findOwner = function(clueEntity) {
        return game.findOwner(clueEntity);
    };

    var isProvenEntity = function(clueEntity) {
        return game.isProvenEntity(clueEntity);
    };

    return  {
        isGameInProgress: isGameInProgress,
        getSuspects: getSuspects,
        getWeapons: getWeapons,
        getRooms: getRooms,
        getPlayers: getPlayers,
        createNewGame: createNewGame,
        createNewClassicGame: createNewClassicGame,
        addEntityOwner: addEntityOwner,
        addRumor: addRumor,
        findOwner: findOwner,
        isProvenEntity: isProvenEntity
    };
};

var app = angular.module('spa');
app.service('clueService', clueService);

