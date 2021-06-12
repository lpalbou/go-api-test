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
     * Can be used for handshake / auth
     */
    init(params) { 
        throw new Error("Not implemented");
    }

    /**
     * Method to call to write/send the data to the source this specific handler was coded for
     * @param {*} type : resource type
     * @param {*} id : resource id
     */
    write(item) { 
        if(!item.wasModified) {
            console.log("WARNING: " + item.toString() + " was not modified, nothing to save");
            return false;
        }
        console.log("Writing <" + item.type + "> with ID <" + item.id + "> to " + this.target);
        return true;
    }

    /**
     * Systematically call after all operations have been performed
     */
    terminate(params) {
        throw new Error("Not implemented");
    }

}

module.exports = AbstractOutputHandler;