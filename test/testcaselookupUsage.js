
var path = require( 'path' );
//var needle = require('needle');

var gbifChecklistBank = require('../index');
var clb = new gbifChecklistBank();
console.log("chkng");
clb.lookupUsage({"name":"Bromusinermis","rank":"SPECIES","kingdom ":"Plantae"}, function( res ) {
	console.log(res);
});
