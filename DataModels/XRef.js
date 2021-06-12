class XRef extends AbstractDataModel  {

    constructor(id, name, description, url) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.type = DataModelsEnum.XRef;
    }

}

module.exports = XRef;