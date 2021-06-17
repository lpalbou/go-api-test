const DataModelsEnum = require("../DataModels/DataModelsEnum");
const AbstractOutputHandler = require("./AbstractOutputHandler");

class MinervaOutputHandler extends AbstractOutputHandler {

    constructor(autoInit, params) {
        super("Minerva", autoInit, params);
    }

    init(params) {
        console.log("my custom INIT for ", this.target);
    }

    terminate(params) {
        console.log("my custom TERMINATE for ", this.target);
    }

    write(item) {
        if(!item.wasModified) {
            console.log("WARNING: the item has not been modified");
            return false;
        }

        console.log("Writing " + item.toString() + " to <" + this.target + ">");

        switch(item.type) {

            case DataModelsEnum.Term:
                break;

            case DataModelsEnum.GeneProduct:
                break;
    
        }
        return { "error" : "Unknown error while writing " + item.toString() + " to " + this.target };
    }

}


module.exports = MinervaOutputHandler;