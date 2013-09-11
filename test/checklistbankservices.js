//var path = require( 'path' );

var gbif = require('../index');
var g = new gbif();
console.log("Test Name Usage Commands:");


g.name_usage.getAll({"language":"en","datasetKey":"d7dddbf4-2cf0-4f39-9b2a-bb099caae36c"}, function(res) {
	console.log("fhgfhg",res);

	});
	
	
var id = 1;

g.name_usage.getByID(id, null, function(err, res) {
	console.log(id, err, res);
});


g.name_usage.getVerbatim ({limit:20,offset:0} ,function( res ) {
	console.log("fhgfhg",res);
});


g.name_usage.getName(id, function(err, res) {
	console.log("Get Name:", id);
	console.log(err, res);
});

//taxon lookup

g.lookup.getNameList({"name":"Bromusinermis","rank":"SPECIES","kingdom ":"Plantae"}, function(res) {
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

g.name_list.getAllName({"user":"gm"}, function(res) {
	console.log("fhgfhg",res);

	});
	
//dataset_metrics(doubt about q)
//someproblem with dataset metrics
/*g.dataset_metrics.getMetrics ({limit:20,offset:0} ,function( res ) {
	console.log("fhgfhg",res);
});*/

//node(doubt about q)

var q = "Animalia";
g.node.getNode(q , function(res) {
	console.log("fhgfhg",res);

	});

	
//organisation(doubt about q,country)
/*var q = ?;
var country ="?"
g.organization.getOrg(q , country , function(res) {
	console.log("fhgfhg",res);

	});
	
*/

//dataset(doubt about q,type,country)
/*var q = 3;
var type = ?;
var country = ?;
g.node.getNode(q , function(res) {
	console.log("fhgfhg",res);

	});
*/

//network
/*var q = ?
g.network.getNetwork(q , function(res) {
	console.log("fhgfhg",res);

	});
*/
