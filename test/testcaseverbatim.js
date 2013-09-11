
var path = require( 'path' );
//var needle = require('needle');

var gbif = require('../index');
var g = new gbif();
console.log("chkng");

g.name_usage.getVerbatim ({limit:20,offset:0} ,function( res ) {
	console.log(body);
});
