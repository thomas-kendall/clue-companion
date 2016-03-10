function ClueGameModel(suspects, weapons, rooms, players) {    
    this.suspects = suspects;
    this.weapons = weapons;
    this.rooms = rooms;
    this.players = players;    
    this.rumors = [];
    this.entityOwners = [];
    this.provenEntities = []; // This is where the cards in the envelope are
};

ClueGameModel.prototype.findByName = function(collection, name) {
    var result = null;
    for(var i = 0; i < collection.length; i++) {
        if(collection[i].name === name) {
            result = collection[i];
            break;
        }
    }
    return result;
};

ClueGameModel.prototype.findSuspectByName = function(name) {
    return this.findByName(this.suspects, name);
};

ClueGameModel.prototype.findWeaponByName = function(name) {
    return this.findByName(this.weapons, name);
};

ClueGameModel.prototype.findRoomByName = function(name) {
    return this.findByName(this.rooms, name);
};

ClueGameModel.prototype.addEntityOwner = function(entity, owner) {
    this.entityOwners.push({
        entity: entity,
        owner: owner
    });

    this.processInformation();
};

ClueGameModel.prototype.addRumor = function(rumor) {
    this.rumors.push(rumor);
    this.processInformation();
};

ClueGameModel.prototype.findOwner = function(entity) {
    var owner = null;
    for(var i = 0; i < this.players.length; i++) {
        if(this.players[i].isOwner(entity)) {
            owner = this.players[i];
            break;
        }
    }
    return owner;
};

ClueGameModel.prototype.processInformation = function() {
    // Clear all game and player data
    this.provenEntities = [];
    for(var i = 0; i < this.players.length; i++) {
        this.players[i].clearData();
    }

    // Process each entity owner
    for(var i = 0; i < this.entityOwners.length; i++) {
        this.processEntityOwned(this.entityOwners[i]);
    }

    // Process each rumor
    for(var i = 0; i < this.rumors.length; i++) {
        this.processRumor(this.rumors[i]);
    }

    // Process all player data
    for(var i = 0; i < this.players.length; i++) {
        this.players[i].processData();
    }

    // Are there any entities that are on everyone's entitiesNotOwned list?
    var allEntities = this.suspects.concat(this.weapons).concat(this.rooms);
    for(var i = 0; i < allEntities.length; i++) {
        var entity = allEntities[i];
        var possiblyOwned = false;        
        for(var j = 0; j < this.players.length; j++) {
            var player = this.players[j];
            if(player.entitiesNotOwned.indexOf(entity) < 0) {
                // entity is possibly owned by this player
                possiblyOwned = true;
                break;
            }
        }
        if(!possiblyOwned) {            
            this.provenEntities.push(entity);
        }
    }

    // Are there any entities that are the only ones not owned?
    var unownedEntities = this.findUnownedEntities(this.suspects);
    if(unownedEntities.length === 1 && this.provenEntities.indexOf(unownedEntities[0]) < 0) {
        this.provenEntities.push(unownedEntities[0]);
    }
    unownedEntities = this.findUnownedEntities(this.weapons);
    if(unownedEntities.length === 1 && this.provenEntities.indexOf(unownedEntities[0]) < 0) {
        this.provenEntities.push(unownedEntities[0]);
    }
    unownedEntities = this.findUnownedEntities(this.rooms);
    if(unownedEntities.length === 1 && this.provenEntities.indexOf(unownedEntities[0]) < 0) {
        this.provenEntities.push(unownedEntities[0]);
    }
}

ClueGameModel.prototype.processEntityOwned = function(entityOwned) {
    var entity = entityOwned.entity;
    var owner = entityOwned.owner;
    owner.addEntityOwned(entity);
    for(var i = 0; i < this.players.length; i++) {
        if(this.players[i] === owner) continue;
        this.players[i].addEntityNotOwned(entity);
    }
}

ClueGameModel.prototype.processRumor = function(rumor) {
    // For each player that doesn't own the entities, player.addEntityNotOwned()
    for(var i = 0; i < rumor.playersWithoutCards.length; i++) {
        rumor.playersWithoutCards[i].addEntityNotOwned(rumor.possibleSuspect);
        rumor.playersWithoutCards[i].addEntityNotOwned(rumor.possibleWeapon);
        rumor.playersWithoutCards[i].addEntityNotOwned(rumor.possibleRoom);
    }

    // If the rumor has a cardShownBy, player.addRumorProved()
    if(rumor.cardShownBy) {
        rumor.cardShownBy.addRumorProved(rumor.getRumorData());
    }
}

ClueGameModel.prototype.findUnownedEntities = function(entities) {
    var unownedEntities = [];
    for(var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        var owned = false;
        for(var j = 0; j < this.players.length; j++) {
            var player = this.players[j];
            if(player.isOwner(entity)) {
                owned = true;
                break;
            }
        }
        if(!owned) {
            unownedEntities.push(entity);
        }
    }
    return unownedEntities;
}

ClueGameModel.prototype.isProvenEntity = function(entity) {
    return this.provenEntities.indexOf(entity) > -1;
}
