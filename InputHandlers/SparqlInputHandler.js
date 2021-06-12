const DataModelsEnum = require("../DataModels/DataModelsEnum");
const AbstractInputHandler = require("./AbstractInputHandler");

class SPARQLInputHandler extends AbstractInputHandler {

    constructor(autoInit, params) {
        super("SPARQL", autoInit, params);
    }

    init() {
        console.log(this.source + " Input Handler initialized");
    }

    terminate(params) {
        console.log(this.source + " Input Handler terminated");
    }

    read(type, id) {
        switch(type) {

            case DataModelsEnum.Term:
                var item = new Term(id);
                console.log("\nFetching " + item.toString() + " from <" + this.source + ">:\n", item);
                return item;

            case DataModelsEnum.GeneProduct:
                var item = new GeneProduct(id);
                console.log("\nFetching " + item.toString() + " from <" + this.source + ">:\n", item);
                return item;
    
        }
        return { "error" : "Unknown error while reading (" + type + ":" + id + ")" };
    }

}


module.exports = SPARQLInputHandler;