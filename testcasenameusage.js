var path = require( 'path' );
//var needle = require('needle');

var gbifChecklistBank = require('../index');
var clb = new gbifChecklistBank();
console.log("chkng");
clb.gbifName_usageAll({}, function( res ) {
	console.log(res);