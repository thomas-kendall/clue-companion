function ClueRumorModel() {    

    this.possibleSuspect = null;   // ClueEntityModel
    this.possibleWeapon = null;    // ClueEntityModel
    this.possibleRoom = null;      // ClueEntityModel
    this.cardShownBy = null;       // CluePlayerModel
    this.playersWithoutCards = []; // array of CluePlayerModel
};

ClueRumorModel.prototype.getRumorData = function() {
    return new ClueRumorDataModel(this.possibleSuspect, this.possibleWeapon, this.possibleRoom);
};
