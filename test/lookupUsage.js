
var path = require( 'path' );
//var needle = require('needle');

var gbif = require('../index');
var g = new gbif();
console.log("chkng");
g.taxonLookUp.getname_usage({"name":"Bromusinermis","rank":"SPECIES","kingdom ":"Plantae"}, function( res ) {
	console.log(res);
});
