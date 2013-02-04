
var path = require( 'path' );
var fs = require( 'fs' );

var gbifChecklistBank = require('../index');
var clb = new gbifChecklistBank();

var name1 = 'Arthopyrenia cinchonae';
var name2 = 'Quercus';

/*
clb.lookupUsageByID( 111989970, function( res ) {
	console.log(res);
});
*/

clb.setParams({writeCache:true, useCache:true});

// console.log(clb.getParams());

clb.lookupUsage({
	q: name1
}, function( res ) {
	console.log(res);
});

// clb.lookupUsage({
	// q: name2
// }, function( res ) {
	// console.log(res);
// });

/*
clb.loadChecklists(function( res ) {
	if (res) {
		clb.checklists.forEach(function( rec ) {
	//		console.log(rec);
			console.log(rec.datasetID, rec.title);
		});
	}
}, "t");
*/