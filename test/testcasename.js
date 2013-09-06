
var path = require( 'path' );
//var needle = require('needle');

var gbifChecklistBank = require('../index');
var clb = new gbifChecklistBank();
console.log("chkng");
clb.g.name_usage.getName({id}, function( res ) {
	console.log(res);
});
