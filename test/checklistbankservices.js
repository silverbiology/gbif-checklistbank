//var path = require( 'path' );

var gbif = require('../index');
var g = new gbif();
console.log("Test Name Usage Commands:");


g.species.getAll({"language":"en","datasetKey":"d7dddbf4-2cf0-4f39-9b2a-bb099caae36c"}, function(res) {
	console.log("fhgfhg",res);

	});
	
	
var id = 1;

g.species.getByID(id, null, function(err, res) {
	console.log(id, err, res);
});


g.species.getVerbatim (function( res ) {
	console.log("hi",res);
});


g.species.getName(id, function(err, res) {
	console.log("Get Name:", id);
	console.log(err, res);
});


g.species.getParents({"language":"en"}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.species.getChildren({"language":"en"}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.species.getDescendants ({"language":"en","rank":"PHYLUM"}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.species.getRelated ({"language":"en","datasetKey":"d7dddbf4-2cf0-4f39-9b2a-bb099caae36c"}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.species.getSynonyms ({"language":"en"}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.species.getDescriptions (function( res ) {
	console.log("fhgfhg",res);
});

g.species.getDistributions (function( res ) {
	console.log("fhgfhg",res);
});

g.species.getImages (function( res ) {
	console.log("hi",res);
});

g.species.getReferences (function( res ) {
	console.log("hi",res);
});

g.species.getSpecies (function( res ) {
	console.log("hi",res);
});

g.species.getVernacular (function( res ) {
	console.log("hi",res);
});

g.species.getTypeSpecimens (function( res ) {
	console.log("hi",res);
});


//taxon lookup

g.lookup.getNameList({"name":"Bromusinermis","rank":"SPECIES","kingdom ":"Plantae"}, function(res) {
	console.log("fhgfhg",res);
});

/*
//searchservice
g.searchservice.getSearch({"canonical_name":"Gastrotricha","description":"Dryad welcomes data submissions related to published, or accepted, scholarly publications","kingdom ":"Plantae","kingdom":"Archaea","phylum":"Ciliophora","scientificName":"Protozoa","vernacularName":"Gastrotrichs",}, function(res) {
	console.log("fhgfhg",res);
});


/*
fix before testing

g.name_usage.getAll({"sourceId":"119459225","language":"en","datasetKey":"d7dddbf4-2cf0-4f39-9b2a-bb099caae36c"}, function( res ) {
	console.log(res);
	});
	
g.taxonLookUp.getname_usage({"name":"Bromusinermis","rank":"SPECIES","kingdom ":"Plantae"}, function( res ) {
	console.log(res);
});

*/

//name_list
/*
g.name_list.getAllName({"user":"gm"}, function(res) {
	console.log("fhgfhg",res);

	});
	
/*g.name_list.getIntList(function(res) {
	console.log("fhgfhg",res);

	});*/
	
//dataset_metrics(doubt about q)
//someproblem with dataset metrics
/*g.dataset_metrics.getMetrics ({limit:20,offset:0} ,function( res ) {
	console.log("fhgfhg",res);
});*/

//node(doubt about q)

/*var q = "Animalia";
g.node.getNode(q , function(res) {
	console.log("fhgfhg",res);

	});
g.node.getGetsNode({UUID,function(err, res) {
	console.log("Get Name:", UUID);
	console.log(err, res);
});



g.node.getNodeOrg({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.node.getNodeContact({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.node.getNodeEndPoint({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.node.getNodeIdentifier({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.node.getNodeTag({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.node.getNodeMachineTag({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.node.getNodeComment({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
	g.node.getNodeEndorsement({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	g.node.getNodePEndorsement({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.node.getNodeCountry({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.node.getNodeCountryIso({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.node.getNodeDataset({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.node.getNodeInstallation({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
	
//organisation(doubt about q,country)
/*var q = ?;
var country ="?"
g.organization.getOrg(q , country , function(res) {
	console.log("fhgfhg",res);

	});
	
*/
/*g.organization .getOrganisation({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgcontact({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgEndpoint({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgIdentifier({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgTag({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgMachineTag({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgComment({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgHostedDataset({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});	
	
g.organization .getOrgOwnedDataset({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});	
	
g.organization .getOrgInstallation({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});	
	
g.organization .getOrgPending({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});	
g.organization .getOrgPublishing({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});	
*/
//network
/*var q = ?
g.network.getNetwork(q , function(res) {
	console.log("fhgfhg",res);

	});
*/
/*g.network.getGetNetwork({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.network.getNetworkContact({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
g.network.getNetworkEndpoint({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.network.getNetworkIdentifier({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});

g.network.getNetworkTag({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
g.network.getNetworkMachineTag({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
g.network.getNetworkComment({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	*/

//dataset(doubt about q,type,country)
/*var q = 3;
var type = ?;
var country = ?;
g.dataset.getDataset(q , function(res) {
	console.log("fhgfhg",res);

	});
*/
/*g.dataset.getGetDataSet({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
g.dataset.getDataSetContact({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
g.dataset.getDataSetEndpoint({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
g.dataset.getDataSetIdentifier({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
g.dataset.getDataSetTag({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
g.dataset.getDataSetMachineTag({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
g.dataset.getDataSetComment({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	
g.dataset.getDataSetConstituents({limit:20,offset:0}, function(res) {
	console.log("fhgfhg",res);

	});
	*/
