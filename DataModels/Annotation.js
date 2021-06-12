const AbstractDataModel = require("./AbstractDataModel"); 
const DataModelsEnum = require("./DataModelsEnum");

class Annotation extends AbstractDataModel {

    constructor(gene, term, evidence) {
        super(DataModelsEnum.Annotation, undefined, undefined);
        this.gene = gene;
        this.term = term;
        this.evidence = evidence;
    }

    setGene(newGene) {
        this.gene = newGene;
        this.wasModified = true;
    }

    setTerm(newTerm) {
        this.term = newTerm;
        this.wasModified = true;
    }

    setEvidence(newEvidence) {
        this.evidence = newEvidence;
        this.wasModified = true;
    }

}

module.exports = Annotation;