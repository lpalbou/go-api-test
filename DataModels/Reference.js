const AbstractDataModel = require("./AbstractDataModel"); 
const DataModelsEnum = require("./DataModelsEnum");

class Reference extends AbstractDataModel {

    constructor(id, name, evidence, link) {
        super(DataModelsEnum.Reference, id, name);
        this.evidence = evidence;
        this.link = link;
    }

    setEvidence(newEvidence) {
        this.evidence = newEvidence;
        this.wasModified = true;
    }

    setLink(newLink) {
        this.link = newLink;
        this.wasModified = true;
    }

}

module.exports = Reference;