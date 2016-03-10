function ClueRumorDataModel(suspect, weapon, room) {    

    this.suspect = suspect;   // ClueEntityModel
    this.weapon = weapon;     // ClueEntityModel
    this.room = room;         // ClueEntityModel
};

ClueRumorDataModel.prototype.hasEntity = function(entity) {
    return this.suspect === entity || this.weapon === entity || this.room === entity;
};

ClueRumorDataModel.prototype.removeEntity = function(entity) {
    if(this.suspect === entity) {
        this.suspect = null;
    } else if(this.weapon === entity) {
        this.weapon = null;
    } else if(this.room === entity) {
        this.room = null;
    }
};

ClueRumorDataModel.prototype.getOnlyEntity = function() {
    var onlyEntity = null;    
    if(this.suspect && !this.weapon && !this.room) {
        onlyEntity = this.suspect;
    } else if(!this.suspect && this.weapon && !this.room) {
        onlyEntity = this.weapon;
    } else if(!this.suspect && !this.weapon && this.room) {
        onlyEntity = this.room;
    }
    return onlyEntity;
}
