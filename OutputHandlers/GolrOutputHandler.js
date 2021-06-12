const DataModelsEnum = require("../DataModels/DataModelsEnum");
const AbstractOutputHandler = require("./AbstractOutputHandler");

class GolrOutputHandler extends AbstractOutputHandler {

    constructor(autoInit, params) {
        super("GOLR", autoInit, params);
    }

    init() {
        console.log(this.target + " Output Handler initialized");
    }

    terminate(params) {
        console.log(this.target + " Output Handler terminated");
    }

    write(item) {
        if(!item.wasModified) {
            console.log("WARNING: the item has not been modified");
            return false;
        }

        switch(item.type) {

            case DataModelsEnum.Term:
                console.log("Writing " + item.toString() + " to <" + this.target + ">");
                break;

            case DataModelsEnum.GeneProduct:
                console.log("Writing " + item.toString() + " to <" + this.target + ">");
                break;
    
        }
        return { "error" : "Unknown error while writing " + item.toString() + " to " + this.target };
    }

}


module.exports = GolrOutputHandler;