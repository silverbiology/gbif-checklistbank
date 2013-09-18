//var path = require( 'path' );

var gbif = require('../index');
var g = new gbif();
console.log("Test Name Usage Commands:");


g.name_usage.getAll({"language":"en","datasetKey":"d7dddbf4-2cf0-4f39-9b2a-bb099caae36c"}, function(error,body) {
	console.log(error,body);

});
	
var id = 1;

g.name_usage.getByID(id, null, function(error,body) {
	console.log(id, error,body);
});


g.name_usage.getVerbatim (function( error,body ) {
	console.log("hi",error,body);
});


g.name_usage.getName(id, function(error,body) {
	console.log("Get Name:", id);
	console.log(error,body);
});


g.name_usage.getParents({"language":"en"}, function(error,body) {
	console.log(error,body);
	});
	
g.name_usage.getChildren({"language":"en"}, function(error,body) {
	console.log(error,body);

	});
	
g.name_usage.getDescendants({"language":"en","rank":"PHYLUM"}, function( error,body) {
	console.log( error,body);

	});
	
g.name_usage.getRelated({"language":"en","datasetKey":"d7dddbf4-2cf0-4f39-9b2a-bb099caae36c"}, function( error,body) {
	console.log( error,body);

	});
	
g.name_usage.getSynonyms({"language":"en"}, function( error,body) {
	console.log( error,body);

	});
	
g.name_usage.getDescriptions (function(  error,body ) {
	console.log( error,body);
});

g.name_usage.getDistributions (function(  error,body ) {
	console.log( error,body);
});

g.name_usage.getImages (function(  error,body ) {
	console.log( error,body);
});

g.name_usage.getReferences (function(  error,body ) {
	console.log( error,body);
});

g.name_usage.getSpecies (function( error,body ) {
	console.log( error,body);
});

g.name_usage.getVernacular (function(  error,body ) {
	console.log( error,body);
});

g.name_usage.getTypeSpecimens (function( error,body) {
	console.log("hi", error,body);
});


//taxon lookup

g.lookup.getNameList({"name":"Elymus arenarius"}, function(error,body) {
	console.log("fhgfhg",body);
});

/*
//searchservice
g.searchservice.getSearch({"canonical_name":"Gastrotricha","description":"Dryad welcomes data submissions related to published, or accepted, scholarly publications","kingdom ":"Plantae","kingdom":"Archaea","phylum":"Ciliophora","scientificName":"Protozoa","vernacularName":"Gastrotrichs",}, function(res) {
	console.log("fhgfhg",res);
});



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
*/	
var UUID = 2;
g.node.getGetsNode( UUID , function(error,body) {
	console.log("Get Name:", UUID);
	console.log(error,body);
});



g.node.getNodeOrg(UUID, function(error,body) {
//	console.log("Get Name:", id);
	console.log(error,body);
});


	
g.node.getNodeContact(id, function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeEndPoint(id , function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeIdentifier(id , function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeTag( id,function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeMachineTag(id ,function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeComment(id , function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeEndorsement( id ,function(error,body) {
	console.log(error,body);

	});
g.node.getNodePEndorsement( id ,function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeCountry(id , function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeCountryIso(id , function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeDataset( id ,function(error,body) {
	console.log("fhgfhg",error,body);

	});
	
g.node.getNodeInstallation( id ,function(error,body) {
	console.log(error,body);

	});
	
	
//organisation(doubt about q,country)
/*var q = ?;
var country ="?"
g.organization.getOrg(q , country , function(res) {
	console.log("fhgfhg",res);

	});
	
*/
/*g.organization .getOrganisation(id, function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgcontact(id, function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgEndpoint(id, function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgIdentifier(id, function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgTag(id, function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgMachineTag(id , function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgComment(id , function(res) {
	console.log("fhgfhg",res);

	});
	
g.organization .getOrgHostedDataset(id , function(res) {
	console.log("fhgfhg",res);

	});	
	
g.organization .getOrgOwnedDataset(id , function(res) {
	console.log("fhgfhg",res);

	});	
	
g.organization .getOrgInstallation(id , function(res) {
	console.log("fhgfhg",res);

	});	
	
g.organization .getOrgPending(id , function(res) {
	console.log("fhgfhg",res);

	});	
g.organization .getOrgPublishing(id , function(res) {
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
