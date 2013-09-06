var path = require( 'path' );
//var needle = require('needle');

var gbifChecklistBank = require('../index');
var clb = new gbifChecklistBank();
console.log("chkng");
clb.g.name_usage.getAll({"sourceId":"119459225","language":"en","datasetKey":"d7dddbf4-2cf0-4f39-9b2a-bb099caae36c"}, function( res ) {
	console.log(res);
	});