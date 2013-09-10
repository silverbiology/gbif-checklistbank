var path = require( 'path' );

var gbifChecklistBank = require('../index');
var clb = new gbifChecklistBank();



clb.navigate({pageSize:3}, function( res ) {
	console.log(res);
});
