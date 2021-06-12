const DataModelsEnum = require("../DataModels/DataModelsEnum");
const AbstractInputHandler = require("./AbstractInputHandler");

const GolrInputHandler = require("./GolrInputHandler");
const GAFInputHandler = require('./GAFInputHandler');
const GPADInputHandler = require('./GPADInputHandler');
const SPARQLInputHandler = require('./SPARQLInputHandler');
const OWLInputHandler = require('./OWLInputHandler');
const TTLInputHandler = require('./TTLInputHandler');

class InputHandlerManager {

    constructor(autoInit, params) {
        this.handlers = new Map();

        const golrIH = new GolrInputHandler(autoInit, params);
        const gpadIH = new GPADInputHandler(autoInit, params);
        const gafIH = new GAFInputHandler(autoInit, params);
        const sparqlIH = new SPARQLInputHandler(autoInit, params);
        const owlIH = new OWLInputHandler(autoInit, params);
        const ttlIH = new TTLInputHandler(autoInit, params);

        this.handlers.set(golrIH.getSource(), golrIH);
        this.handlers.set(gpadIH.getSource(), gpadIH);
        this.handlers.set(gafIH.getSource(), gafIH);
        this.handlers.set(sparqlIH.getSource(), sparqlIH);
        this.handlers.set(owlIH.getSource(), owlIH);
        this.handlers.set(ttlIH.getSource(), ttlIH);
    }

    getInputHandler(source) {
        if(!this.handlers.has(source)) {
            return undefined;
        }
        return this.handlers.get(source);
    }

    getInputHandlers() {
        return this.handlers;
    }

}

module.exports = InputHandlerManager;
