const DataModelsEnum = require("../DataModels/DataModelsEnum");
const AbstractOutputHandler = require("./AbstractOutputHandler");

class TTLOutputHandler extends AbstractOutputHandler {

    constructor(autoInit, params) {
        super("TTL", autoInit, params);
    }

    init() {
        console.log(this.target + " Output Handler initialized");
    }

    terminate(params) {
        console.log(this.target + " Output Handler terminated");
    }

    write(item) {
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


module.exports = TTLOutputHandler;