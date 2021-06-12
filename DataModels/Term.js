const AbstractDataModel = require("./AbstractDataModel"); 
const DataModelsEnum = require("./DataModelsEnum");

class Term extends AbstractDataModel {

    constructor(id, name, altIDs = undefined, definition = undefined, synonyms = undefined, xrefs = undefined, subsets = undefined, obsoleted = false) {
        super(DataModelsEnum.Term, id, name);
        this.altIDs = altIDs;
        this.definition = definition;
        this.synonyms = synonyms;
        this.xrefs = xrefs;
        this.subsets = subsets;
        this.obsoleted = this.obsoleted;
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

    setSubsets(newSubsets) {
        this.subsets = newSubsets;
        this.wasModified = true;
    }

    setObsoleted(newObsoleted) {
        this.obsoleted = newObsoleted;
        this.wasModified = true;
    }

}

module.exports = Term;