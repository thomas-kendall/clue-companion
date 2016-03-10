function CluePlayerModel(name) {    

    this.name = name;
    this.entitiesOwned = [];    // array of ClueEntityModel
    this.entitiesNotOwned = []; // array of ClueEntityModel
    this.rumorsProved = [];     // array of { suspect, weapon, room }, some of which become null through process of elimination
};

CluePlayerModel.prototype.addEntityOwned = function(entity) {
    if(entity && this.entitiesOwned.indexOf(entity) < 0) {
        this.entitiesOwned.push(entity);
    }
};

CluePlayerModel.prototype.addEntityNotOwned = function(entity) {    
    if(entity && this.entitiesNotOwned.indexOf(entity) < 0) {
        this.entitiesNotOwned.push(entity);
    }
};

CluePlayerModel.prototype.addRumorProved = function(rumorProved) {
    if(rumorProved && this.rumorsProved.indexOf(rumorProved) < 0) {
        this.rumorsProved.push(rumorProved);
    }
};

CluePlayerModel.prototype.isOwner = function(entity) {
    return this.entitiesOwned.indexOf(entity) > -1;
};

CluePlayerModel.prototype.clearData = function() {
    this.entitiesOwned = [];
    this.entitiesNotOwned = [];
    this.rumorsProved = [];
};

CluePlayerModel.prototype.processData = function() {
    // For each entity owned, remove any rumorsProved for that entity
    for(var i = 0; i < this.entitiesOwned.length; i++) {
        var entity = this.entitiesOwned[i];
        for(var j = 0; j < this.rumorsProved.length; j++) {
            if(this.rumorsProved[j].hasEntity(entity)) {
                this.rumorsProved.splice(j, 1);
                j--;
            }
        }
    }

    // For each entity not owned, remove possiblities from rumors, adding to entitiesOwned if only one possibility left
    for(var i = 0; i < this.entitiesNotOwned.length; i++) {
        var entity = this.entitiesNotOwned[i];
        for(var j = 0; j < this.rumorsProved.length; j++) {
            if(this.rumorsProved[j].hasEntity(entity)) {
                this.rumorsProved[j].removeEntity(entity);
                var onlyEntity = this.rumorsProved[j].getOnlyEntity();
                if(onlyEntity) {
                    this.addEntityOwned(onlyEntity);
                    this.rumorsProved.splice(j, 1);
                    j--;
                }
            }
        }        
    }
};

