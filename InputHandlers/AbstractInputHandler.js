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
        console.log(this.source + " Input Handler initialized");
    }

    /**
     * Systematically call after all operations have been performed
     */
    terminate(params) {
        console.log(this.source + " Input Handler terminated");
    }

    /**
     * Must override this method to read the data from the source specific to that handler
     * @param {*} type : resource type
     * @param {*} id : resource id
     */
    read(type, id) { 
        throw new Error("Not implemented");
    }


}

module.exports = AbstractInputHandler;