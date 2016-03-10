function ClueEntityModel(entityType, name) {    
    this.entityType = entityType;
    this.name = name;
};

ClueEntityModel.prototype.isSuspect = function() {
    return this.entityType === 'suspect';
};

ClueEntityModel.prototype.isWeapon = function() {
    return this.entityType === 'weapon';
};

ClueEntityModel.prototype.isRoom = function() {
    return this.entityType === 'room';
};
