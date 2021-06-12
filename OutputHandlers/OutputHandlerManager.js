const DataModelsEnum = require("../DataModels/DataModelsEnum");
const AbstractInputHandler = require("./AbstractOutputHandler");

const GolrOutputHandler = require("./GolrOutputHandler");
const GAFOutputHandler = require('./GAFOutputHandler');
const GPADOutputHandler = require('./GPADOutputHandler');
const SPARQLOutputHandler = require('./SPARQLOutputHandler');
const OWLOutputHandler = require('./OWLOutputHandler');
const TTLOutputHandler = require('./TTLOutputHandler');

class OutputHandlerManager {

    constructor(autoInit, params) {
        this.handlers = new Map();

        const golrOH = new GolrOutputHandler(autoInit, params);
        const gpadOH = new GPADOutputHandler(autoInit, params);
        const gafOH = new GAFOutputHandler(autoInit, params);
        const sparqlOH = new SPARQLOutputHandler(autoInit, params);
        const owlOH = new OWLOutputHandler(autoInit, params);
        const ttlOH = new TTLOutputHandler(autoInit, params);

        this.handlers.set(golrOH.getTarget(), golrOH);
        this.handlers.set(gpadOH.getTarget(), gpadOH);
        this.handlers.set(gafOH.getTarget(), gafOH);
        this.handlers.set(sparqlOH.getTarget(), sparqlOH);
        this.handlers.set(owlOH.getTarget(), owlOH);
        this.handlers.set(ttlOH.getTarget(), ttlOH);
    }

    getOutputHandler(source) {
        if(!this.handlers.has(source)) {
            return undefined;
        }
        return this.handlers.get(source);
    }

    getOutputHandlers() {
        return this.handlers;
    }

}

module.exports = OutputHandlerManager;
