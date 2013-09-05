
var path = require( 'path' );
//var needle = require('needle');

var gbifChecklistBank = require('../index');
var clb = new gbifChecklistBank();
console.log("chkng");
clb.lookupUsage({name:"Bromusinermis"}, function( res ) {
console.log("fhgfhgfhgf",res);
	console.log(res);
});