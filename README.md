# GO API - TEST
==============================================

This is a test project. Things can evolve rapidly without any notice, so don't build on top of this repository at the moment.

## Goals
1) create a new GO API to have a unique endpoint to access GO resources
2) provide a proxy to decouple the various parts of the GO architecture
3) provide a proxy to ensure the long term availability of CRUD routes on the GO API, that can then be used and maintained for GO tools, external users, trainings and notebooks

The decoupling of the architecture is achieved here by proxying any query to the backend database/logic layer through input and output handlers (sometimes also referred to as "adapters"):

[GOLR endpoint] ---- [GOLR input handler] ---- \

                                            |--- [GO API] --- (permanent CRUD routes) --- [Users & Tools]
                                                
[SPARQL endpoint] -- [SPARQL input handler] --/

In that way, the GO API can request data (e.g. Term, Gene, Annotation, GO-CAM, reference, group and contributors) from as many endpoints as needed and present a single consistent/permanent endpoint (CRUD routes) to users and tools. This will also allow to decomission some old technology/database/code by 1) creating a new input handler able to fetch the desired data and 2) removing the input handler communicating with the old tech/database/code.

This design will also protect the overall architecture and allows to implement changes in the backend without the need to modify the API or the UIs / external scripts.

## Usage examples
- User request data on a GO term to the API through the permanent `GET /term/:id`. The GO API request the data, for instance using its `GOLRInputHandler` and create the Term object in memory that is sent back, as a JSON object to the User.
- GO tool request to modify the definition of a GO term by the API (must be secured with OAuth, possibly Passeport). The GO API receives the request from the GO tool, either a) fetch the term thanks to one of the input handler and create the representation in memory OR b) receive the full object from the GO tool. In case b), the object modifications were already proposed by the client, so the GO API just uses one of the available Output Handler (or all) to write the updated term where desired. In case a), once the Term is created in memory, a modification can be done (`UPDATE /term/:id` + payload) to alter the representation of the term in memory (e.g. changing the definition, xrefs, obsoletion status etc). Once modified in memory, as in b), the GO API uses one or all the output handler to write the updated data to the appropriate backend storages.

## Data Models

A separate repository should be created for data models representing GO-related objects, as well as a NPM package. Those data models can then be used both in input & output handlers, as well as shared in the backend or frontend UIs. All data objects must extends `AbstractDataModel` and define their own type. New types can be added to DataModelEnums.js.

## Input Handler

An InputHandler must extends the `AbstractInputHandler` so it can be used as a generic Input Handler. If the number of Input Handlers were to increase too much, it could also be created and stored in different repositories and NPM packages. The main method to implement is read(type, id) which should use the type and id to identify and retrieve the data object from the endpoint this handler was created for.

## Output Handler

Same as for Input Handler, but extends the `AbstractOutputHandler`. The main method is write(item) where `item` is an `AbstractDataModel` object, containing all the required fields (e.g. for a Term, a Gene Product, a Reference etc) that can be written to the endpoint this output handler was designed for.

## Input Handler Manager

This manager is where to register (or remove) your input handlers. This utility class is used to initialize all the required handlers and provide an easy access to them. By creating a manager, one could also implement a logic where if the "traditional" input endpoint is not working, it could use a fallback to the other input handlers able to fetch that data.

## Output Handler Manager

Same as above, but managing the output handlers. One could imagine a utility function that would write the same `item` object to multiple endpoints at the same time, such avoiding synchronicity issues between multiple endpoints.

## Additional notes

For handlers, the `init()` and `terminate()` methods are here to be overriden and provide mechanisms where some codes (e.g. handshake with a server) are to be executed when the input handler comes to live / die.
