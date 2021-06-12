const AbstractDataModel = require("./AbstractDataModel"); 
const DataModelsEnum = require("./DataModelsEnum");

class Link extends AbstractDataModel {

    constructor(id, name, url, curie) {
        super(DataModelsEnum.Link, id, name);
        this.url = url;
        this.curie = curie;
    }

    setURL(newURL) {
        this.url = newURL;
        this.wasModified = true;
    }

    setCURIE(newCurie) {
        this.curie = newCurie;
        this.wasModified = true;
    }

}

module.exports = Link;