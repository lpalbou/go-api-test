const AbstractDataModel = require("./AbstractDataModel"); 
const DataModelsEnum = require("./DataModelsEnum");

class GeneProduct extends AbstractDataModel {

    constructor(id, name, altIDs = undefined, definition = undefined, synonyms = undefined, xrefs = undefined, subsets = undefined, obsoleted = false) {
        super(DataModelsEnum.GeneProduct, id, name);
        this.altIDs = altIDs;
        this.definition = definition;
        this.synonyms = synonyms;
        this.xrefs = xrefs;
    }

    setAltIDs(newAltIDs) {
        this.altIDs = newAltIDs;
        this.wasModified = true;
    }

    setDefinition(newDefinition) {
        this.definition = newDefinition;
        this.wasModified = true;
    }

    setSynonyms(newSynonyms) {
        this.synonyms = newSynonyms;
        this.wasModified = true;
    }

    setXRefs(newXrefs) {
        this.xrefs = newXrefs;
        this.wasModified = true;
    }

}

module.exports = GeneProduct;