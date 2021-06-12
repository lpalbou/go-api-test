const DataModelsEnum = require("./DataModelsEnum");

class AbstractDataModel {

    constructor(type, id, name) { 
        this.type = type;
        this.id = id;
        this.name = name;
        this.wasModified = false;
    }

    setID(newId) {
        this.id = newId;
        this.wasModified = true;
    }

    setName(newName) {
        this.name = newName;
        this.wasModified = true;
    }

    /**
     * Method to get the type of this specific object
     * @param {*} id 
     */
    getType() { 
        return this.type;
    }

    /**
     * Marker to check if the current data was modified or not
     */
    isModified() {
        return this.wasModified;
    }

    toString() {
        return "<" + this.type + "> <" + this.id + ">"; 
    }    

}

module.exports = AbstractDataModel;