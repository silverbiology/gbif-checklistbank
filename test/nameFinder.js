var gbifChecklistBank = require('../index');
var clb = new gbifChecklistBank();

var name1 = 'Arthopyrenia cinchonae (Ach.) Mull. Arg.';
var name2 = 'Quercus';

var ocrTxt1 = 'LICHENS OF FLORIDA, U.S.A.\n\nArthopyrenia cinchonae (Ach.) Mull. Arg. \non Quercus\n\nLevy County: Cedar Key Scrub State Preserve, \n along Co. Rd. 347 ca. 1.5 mi N of jct of \n Fla. Hwy 24, 29°12\'N, 83°01\'W; dry oak-\n ericad scrub with low swampy areas.\n\n30 November 1992\n\nRichard C. Williams 29352\n';


clb.setOcr(ocrTxt1);

clb.findName(function( res ) {
	console.log(res);
});
