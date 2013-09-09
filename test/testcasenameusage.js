var path = require( 'path' );
//var needle = require('needle');

var gbif = require('../index');
var g = new gbif();
console.log("chkng");
g.name_usage.getAll({"sourceId":"119459225","language":"en","datasetKey":"d7dddbf4-2cf0-4f39-9b2a-bb099caae36c"}, function( res ) {
	console.log(res);
	});