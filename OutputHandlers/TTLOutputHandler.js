const DataModelsEnum = require("../DataModels/DataModelsEnum");
const AbstractOutputHandler = require("./AbstractOutputHandler");

class TTLOutputHandler extends AbstractOutputHandler {

    constructor(autoInit, params) {
        super("TTL", autoInit, params);
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


module.exports = TTLOutputHandler;