const AbstractDataModel = require("./AbstractDataModel"); 
const DataModelsEnum = require("./DataModelsEnum");

class Evidence extends AbstractDataModel {

    constructor(id, name) {
        super(DataModelsEnum.Evidence, id, name);
    }

}

module.exports = Evidence;