var path = require( 'path' );
//var needle = require('needle');

var gbifChecklistBank = require('../index');
var clb = new gbifChecklistBank();
console.log("chkng");
clb.gbifName_usageAll({"sourceId":"119459225","language":"en"}, function( res ) {
	console.log(res);
	});