const express = require('express');
const app = express();

// Import handler managers
const InputHandlerManager = require("./InputHandlers/InputHandlerManager");
const OutputHandlerManager = require("./OutputHandlers/OutputHandlerManager");
const DataModelsEnum = require('./DataModels/DataModelsEnum');

// Instanciate them / start them
const ihManager = new InputHandlerManager(true);
const ohManager = new OutputHandlerManager(true);
console.log("\nAll handlers have been initialized\n\n");




// =======================================================
//      STEP 1 : get TERM independent of the source
// =======================================================

var genericInHandler = ihManager.getInputHandler("GPAD");
genericInHandler.showInfo();

var term = genericInHandler.read(DataModelsEnum.Term, "GO:XXXX");
var gp = genericInHandler.read(DataModelsEnum.GeneProduct, "UniProtKB:XXX");


// =======================================================
//          STEP 2 : do the CHANGES REQUESTED (if any)
// =======================================================

term.setObsoleted(true);
term.setDefinition("this is my new definition");

// gp.setSynonyms(["tp53", "p53"]);


// =======================================================
//          STEP 3: write the CHANGES (if any)
// =======================================================

var genericOutHandler = ohManager.getOutputHandler("GPAD");
genericOutHandler.showInfo();

genericOutHandler.write(term);
genericOutHandler.write(gp);











// ================================================================================
//
//                           ROUTES: /go
//
// ================================================================================

keysArrayGO = ["synonyms", "relatedSynonyms", "alternativeIds", "xrefs", "subsets"]
app.get('/go/:id', function(req, res) {
  utils.fetchAndSend(res, sparqlGOs.getSummary(req.params.id), true, keysArrayGO);
});

app.get('/go/:id/models', function(req, res) {
  utils.fetchAndSend(res, sparqlGOs.getGOModels(req.params.id));
});

app.get('/go/:id/hierarchy', function(req, res) {
  utils.fetchAndSend(res, sparqlGOs.getHierarchy(req.params.id));
});





// // Export your Express configuration so that it can be consumed by the Lambda handler
// module.exports = app

// // Uncomment if want to perform local test
// var port = 8888;
// app.listen(port, () => {
//   console.log(`API listening at http://localhost:${port}`)
// })