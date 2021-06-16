const AbstractDataModel = require("../DataModels/AbstractDataModel");

class AbstractOutputHandler {

    constructor(target, autoInit, params = undefined) {
        this.target = target;
        if(autoInit) {
            this.init(params);
        }
    }

    getTarget() {
        return this.target;
    }

    showInfo() {
        console.log("\nOutput Handler: ", this);
        console.log("- Target: ", this.getTarget() + "\n");
    }

    /**
     * Systematically call when using this OutputHandler before any other operation
     * You can override this method to init your output handler (e.g. create connexion)
     */
    init(params) { 
        console.log(this.target + " Output Handler initialized with (" , params , ")");
    }

    /**
     * Systematically call after all operations have been performed
     * You can override this method to terminate your output handler (e.g. close connexion)
     */
    terminate(params) { 
        console.log(this.target + " Output Handler terminated with (" , params , ")");
    }

    /**
     * Must override this method to write/send the data to the source specific to that handler
     * @param {*} item : entity to be written (e.g. a term, gene product, activity, reference, etc)
     */
    write(item) { 
        throw new Error("Not implemented");
    }

}

module.exports = AbstractOutputHandler;