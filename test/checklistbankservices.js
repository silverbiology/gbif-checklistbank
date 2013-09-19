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

g.name_usage.getVernacular (function( res ) {
	//console.log( error,body);
	//console.log(error,body);
	//console.log(res);
	if(res['success']) {
		
	}
});

g.name_usage.getTypeSpecimens (function( res) {
	//console.log("hi", error,body);
	//console.log(error,body);
	//console.log(res);
	if(res['success']) {
		
	}
});


//taxon lookup

g.lookup.getNameList({"name":"Elymus arenarius"}, function(res) {
	//console.log(error,body);
	//console.log(res);
	if(res['success']) {
		
	}
});

/*
//searchservice
g.searchservice.getSearch({"canonical_name":"Gastrotricha","description":"Dryad welcomes data submissions related to published, or accepted, scholarly publications","kingdom ":"Plantae","kingdom":"Archaea","phylum":"Ciliophora","scientificName":"Protozoa","vernacularName":"Gastrotrichs",}, function(error,body) {
	console.log(error,body);
});



//name_list
/*
g.name_list.getAllName({"user":"gm"}, function(error,body) {
	console.log(error,body);

	});
	
/*g.name_list.getIntList(function(error,body) {
	console.log(error,body);

	});*/
	
//dataset_metrics(doubt about q)
//someproblem with dataset metrics
/*g.dataset_metrics.getMetrics ({limit:20,offset:0} ,function( res ) {
	console.log(error,body);
});*/

//node(doubt about q)

/*var q = "Animalia";
g.node.getNode(q , function(error,body) {
	console.log(error,body);

	});
*/	
/*var UUID = 82;
g.node.getGetsNode( UUID , function(error,body) {
	console.log("Get Name:", UUID);
	console.log(error,body);
});


var organisation = "UniversitÃ© de Bangui (Central African Republic)";
g.node.getNodeOrg(UUID, organisation, function(error,body) {
//	console.log("Get Name:", UUID);
	console.log(error,body);
});


	
g.node.getNodeContact(UUID, function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeEndPoint(UUID, function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeIdentifier( UUID , function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeTag( UUID,function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeMachineTag(UUID ,function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeComment(UUID , function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeEndorsement(UUID ,function(error,body) {
	console.log(error,body);

	});
g.node.getNodePEndorsement( UUID ,function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeCountry(UUID , function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeCountryIso(UUID , function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeDataset( UUID ,function(error,body) {
	console.log(error,body);

	});
	
g.node.getNodeInstallation( UUID ,function(error,body) {
	console.log(error,body);

	});
	
	
//organisation(doubt about q,country)
/*var q = ?;
var country ="?"
g.organization.getOrg(q , country , function(res) {
	console.log(error,body);

	});
	
*/
/*var UUID = 6;
g.organization .getOrganisation(UUID, function(error,body) {
	console.log(error,body);

	});
	
g.organization.getOrgcontact(UUID, function(error,body) {
	console.log(error,body);

	});
	
g.organization.getOrgEndpoint(UUID, function(error,body) {
	console.log(error,body);

	});
	
g.organization.getOrgIdentifier(UUID, function(error,body) {
	console.log(error,body);

	});
	
g.organization .getOrgTag(UUID, function(error,body) {
	console.log(error,body);

	});
	
g.organization .getOrgMachineTag(UUID , function(error,body) {
	console.log(error,body);

	});
	
g.organization .getOrgComment(UUID , function(error,body) {
	console.log(error,body);

	});
	
g.organization .getOrgHostedDataset(UUID , function(error,body) {
	console.log(error,body);

	});	
	
g.organization .getOrgOwnedDataset(UUID , function(error,body) {
	console.log(error,body);

	});	
	
g.organization .getOrgInstallation(UUID , function(error,body) {
	console.log(error,body);

	});	
	
g.organization .getOrgPending(UUID , function(error,body) {
	console.log(error,body);

	});	
g.organization .getOrgPublishing(UUID , function(error,body) {
	console.log(error,body);

	});	

//network
/*var q = ?
g.network.getNetwork(q , function(error,body) {
	console.log(error,body);

	});
*/

/*var UUID =  6;
g.network.getGetNetwork( UUID ,function(error,body) {
	console.log(error,body);

	});
	
g.network.getNetworkContact(UUID, function(error,body) {
	console.log(error,body);

	});
g.network.getNetworkEndpoint(UUID, function(error,body) {
	console.log(error,body);

	});
	
g.network.getNetworkIdentifier( UUID, function(error,body) {
	console.log(error,body);

	});

g.network.getNetworkTag( UUID ,function(error,body) {
	console.log(error,body);

	});
g.network.getNetworkMachineTag(UUID, function(error,body) {
	console.log(error,body);

	});
g.network.getNetworkComment(UUID, function(error,body) {
	console.log(error,body);

	});


//dataset(doubt about q,type,country)
/*var q = 3;
var type = ?;
var country = ?;
g.dataset.getDataset(q , function(error,body) {
	console.log(error,body);

	});
*/
/*g.dataset.getGetDataSet( UUID ,function(error,body) {
	console.log(error,body);

	});
g.dataset.getDataSetContact(UUID, function(error,body) {
	console.log(error,body);

	});
g.dataset.getDataSetEndpoint(UUID, function(error,body) {
	console.log(error,body);

	});
g.dataset.getDataSetIdentifier(UUID, function(error,body) {
	console.log(error,body);

	});
g.dataset.getDataSetTag(UUID, function(error,body) {
	console.log(error,body);

	});
g.dataset.getDataSetMachineTag(UUID, function(error,body) {
	console.log(error,body);

	});
g.dataset.getDataSetComment(UUID, function(error,body) {
	console.log(error,body);

	});
	
g.dataset.getDataSetConstituents(UUID, function(error,body) {
	console.log(error,body);

	});
	
*/