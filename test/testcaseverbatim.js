
var path = require( 'path' );
//var needle = require('needle');

var gbifChecklistBank = require('../index');
var clb = new gbifChecklistBank();
console.log("chkng");

clb.g.name_usage.getVerbatim({limit:20,offset:0} ,function( res ) {
	console.log(res);
});
