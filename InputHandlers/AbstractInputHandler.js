class AbstractInputHandler {

    constructor(source, autoInit, params = undefined) {
        this.source = source;
        if(autoInit) {
            this.init(params);
        }
    }

    getSource() {
        return this.source;
    }

    showInfo() {
        console.log("\nInput Handler: ", this);
        console.log("- Source: ", this.getSource() + "\n");
    }

    /**
     * Systematically call when using this InputHandler before any other operation
     */
    init(params) { 
        throw new Error("Not implemented");
    }

    /**
     * Method to call to retrieve the data from the source this input handler was coded for
     * @param {*} type : resource type
     * @param {*} id : resource id
     */
    read(type, id) { 
        throw new Error("Not implemented");
    }

    /**
     * Systematically call after all operations have been performed
     */
    terminate(params) {
        throw new Error("Not implemented");
    }

}

module.exports = AbstractInputHandler;