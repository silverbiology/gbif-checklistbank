//var path = require( 'path' );

var gbif = require('../index');
var g = new gbif();
console.log("Test Name Usage Commands:");

/*
g.name_usage.getAll({
	limit: 1
//	offset: 1
}, function(err, res) {
	console.log("getAll:");
	console.log(res);
});
*/

var id = 1;
/*
g.name_usage.getByID(id, null, function(err, res) {
	console.log(id, err, res);
});

g.name_usage.getVerbatim(id, function(err, res) {
	console.log(id, err, res);
});
*/

g.name_usage.getName(id, function(err, res) {
	console.log("Get Name:", id);
	console.log(err, res);
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