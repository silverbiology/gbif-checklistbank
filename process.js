var express = require('express'),
app = express();
var processManager = require('processmanager');
var argv = require('optimist').usage('node process.js --port 4009 --schema mcgill --host localhost').argv;


var schema = (argv.schema) ? argv.schema : 'mcgill';
var appPort = (argv.port) ? argv.port : 4009;
var host = (argv.host) ? argv.host : 'localhost';

var pm = new processManager({ dbHost: host, dbDatabase: schema });

console.log('Listening to port : ', appPort);

app.all('/catalognumber', function (request, response) {
	var filter = request.query["filter"] || '';
	var ocr = request.query["ocr"] || '';
	var callback = request.query["callback"] || '';
	var save = request.query["save"] || 0;
	var errFlag = 1;
	var errObj = '';
	try {
		filter = (filter != '') ? JSON.parse(filter) : {};
	} catch(err) {
		errObj = err;
		errFlag = 0;
	}
	if(errFlag == 0) {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
	} else{
		pm.processCatalogNumber(ocr,filter,save,function(results) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			if(callback != '') {
				response.end(callback + '(' + JSON.stringify({success: true,rows:results}) + ')');
			} else {
				response.end(JSON.stringify({success: true,rows:results}));
			}
		});
	}
});

app.all('/altitude', function (request, response) {
	var filter = request.query["filter"] || '';
	var ocr = request.query["ocr"] || '';
	var callback = request.query["callback"] || '';
	var save = request.query["save"] || 0;
	var errFlag = 1;
	var errObj = '';
	try {
		filter = (filter != '') ? JSON.parse(filter) : {};
	} catch(err) {
		errObj = err;
		errFlag = 0;
	}
	if(errFlag == 0) {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
	} else{
		pm.processAltitude(ocr,filter,save,function(results) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			if(callback != '') {
				response.end(callback + '(' + JSON.stringify({success: true,rows:results}) + ')');
			} else {
				response.end(JSON.stringify({success: true,rows:results}));
			}
		});
	}
});

app.all('/date', function (request, response) {
	var filter = request.query["filter"] || '';
	var ocr = request.query["ocr"] || '';
	var callback = request.query["callback"] || '';
	var save = request.query["save"] || 0;
	var errFlag = 1;
	var errObj = '';
	try {
		filter = (filter != '') ? JSON.parse(filter) : {};
	} catch(err) {
		errObj = err;
		errFlag = 0;
	}
	if(errFlag == 0) {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
	} else{
		pm.processDate(ocr,filter,save,function(results) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			if(callback != '') {
				response.end(callback + '(' + JSON.stringify({success: true,rows:results}) + ')');
			} else {
				response.end(JSON.stringify({success: true,rows:results}));
			}
		});
	}
});

app.all('/geo', function (request, response) {
	var filter = request.query["filter"] || '';
	var ocr = request.query["ocr"] || '';
	var callback = request.query["callback"] || '';
	var save = request.query["save"] || 0;
	var errFlag = 1;
	var errObj = '';
	try {
		filter = (filter != '') ? JSON.parse(filter) : {};
	} catch(err) {
		errObj = err;
		errFlag = 0;
	}
	if(errFlag == 0) {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
	} else{
		pm.processGeo(ocr,filter,save,function(results) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			if(callback != '') {
				response.end(callback + '(' + JSON.stringify({success: true,rows:results}) + ')');
			} else {
				response.end(JSON.stringify({success: true,rows:results}));
			}
		});
	}
});

app.all('/coordinates', function (request, response) {
	var filter = request.query["filter"] || '';
	var ocr = request.query["ocr"] || '';
	var callback = request.query["callback"] || '';
	var save = request.query["save"] || 0;
	var errFlag = 1;
	var errObj = '';
	try {
		filter = (filter != '') ? JSON.parse(filter) : {};
	} catch(err) {
		errObj = err;
		errFlag = 0;
	}
	if(errFlag == 0) {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
	} else{
		pm.processCoordinates(ocr,filter,save,function(results) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			if(callback != '') {
				response.end(callback + '(' + JSON.stringify({success: true,rows:results}) + ')');
			} else {
				response.end(JSON.stringify({success: true,rows:results}));
			}
		});
	}
});

app.all('/trs', function (request, response) {
	var filter = request.query["filter"] || '';
	var ocr = request.query["ocr"] || '';
	var callback = request.query["callback"] || '';
	var save = request.query["save"] || 0;
	var errFlag = 1;
	var errObj = '';
	try {
		filter = (filter != '') ? JSON.parse(filter) : {};
	} catch(err) {
		errObj = err;
		errFlag = 0;
	}
	if(errFlag == 0) {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
	} else{
		pm.processTrs(ocr,filter,save,function(results) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			if(callback != '') {
				response.end(callback + '(' + JSON.stringify({success: true,rows:results}) + ')');
			} else {
				response.end(JSON.stringify({success: true,rows:results}));
			}
		});
	}
});

app.all('/typestatus', function (request, response) {
	var filter = request.query["filter"] || '';
	var ocr = request.query["ocr"] || '';
	var callback = request.query["callback"] || '';
	var save = request.query["save"] || 0;
	var errFlag = 1;
	var errObj = '';
	try {
		filter = (filter != '') ? JSON.parse(filter) : {};
	} catch(err) {
		errObj = err;
		errFlag = 0;
	}
	if(errFlag == 0) {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
	} else{
		pm.processTypeStatus(ocr,filter,save,function(results) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			if(callback != '') {
				response.end(callback + '(' + JSON.stringify({success: true,rows:results}) + ')');
			} else {
				response.end(JSON.stringify({success: true,rows:results}));
			}
		});
	}
});

app.all('/name', function (request, response) {
	var filter = request.query["filter"] || '';
	var ocr = request.query["ocr"] || '';
	var callback = request.query["callback"] || '';
	var save = request.query["save"] || 0;
	var errFlag = 1;
	var errObj = '';
	try {
		filter = (filter != '') ? JSON.parse(filter) : {};
	} catch(err) {
		errObj = err;
		errFlag = 0;
	}
	if(errFlag == 0) {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
	} else{
		pm.processNames(ocr,filter,save,function(results) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			// response.end(JSON.stringify({success: true}));
			if(callback != '') {
				response.end(callback + '(' + JSON.stringify({success: true,rows:results}) + ')');
			} else {
				response.end(JSON.stringify({success: true,rows:results}));
			}
		});
	}
});

app.all('/names', function (request, response) {
	var filter = request.query["filter"] || '';
	var ocr = request.query["ocr"] || '';
	var callback = request.query["callback"] || '';
	var save = request.query["save"] || 0;
	var errFlag = 1;
	var errObj = '';
	try {
		filter = (filter != '') ? JSON.parse(filter) : {};
	} catch(err) {
		errObj = err;
		errFlag = 0;
	}
	if(errFlag == 0) {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
	} else{
		pm.processSciNames(ocr,filter,save,function(results) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			if(callback != '') {
				response.end(callback + '(' + JSON.stringify({success: true,rows:results}) + ')');
			} else {
				response.end(JSON.stringify({success: true,rows:results}));
			}
		});
	}
});


/*
app.all('/genus', function (request, response) {

	var where = request.query["where"] || '';
	var fields = request.query["fields"] || '';

		var errFlag = 1;
		var errObj = '';
		try {
			where = (where != '') ? JSON.parse(where) : {};
			fields = (fields != '') ? JSON.parse(fields) : {};
		} catch(err) {
			errObj = err;
			errFlag = 0;
		}
		if(errFlag == 0) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
		} else{
				pm.read(where,fields,  function(err, results)  {
					doProcess() {
						var arr = results.rows;
						var rec = arr.pop();
						var ocrText = rec.ocr;
							pm.getGenus(ocrText,function(err,results) {
								var setRec = results.genus;
									pm.update({filename:rec.filename},{genus:setRec},function(err,results){
									 doProcess();
									 if (err) {
											response.end(JSON.stringify({success: false, err:err }));
										} else {
											response.end(JSON.stringify({success: true,results:results}));
										} 
								
									});
							});	
					}
				});
			}
});
app.all('/location', function (request, response) {

	var where = request.query["where"] || '';
	var fields = request.query["fields"] || '';

	var errFlag = 1;
		var errObj = '';
		try {
			where = (where != '') ? JSON.parse(where) : {};
			fields = (fields != '') ? JSON.parse(fields) : {};
		} catch(err) {
			errObj = err;
			errFlag = 0;
		}
		if(errFlag == 0) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
		} else{
				pm.read(where,fields,  function(err, results)  {
					doProcess() {
						var arr = results.rows;
						var rec = arr.pop();
						var ocrText = rec.ocr;
							pm.getGenus(ocrText,function(err,results) {
								var setRec = results.genus;
									pm.update({filename:rec.filename},{genus:setRec},function(err,results){
									 doProcess();
									 if (err) {
											response.end(JSON.stringify({success: false, err:err }));
										} else {
											response.end(JSON.stringify({success: true,results:results}));
										} 
								
									});
							});	
					}
				});
			}
});
app.all('/habitat', function (request, response) {

	var where = request.query["where"] || '';
	var fields = request.query["fields"] || '';

	var errFlag = 1;
		var errObj = '';
		try {
			where = (where != '') ? JSON.parse(where) : {};
			fields = (fields != '') ? JSON.parse(fields) : {};
		} catch(err) {
			errObj = err;
			errFlag = 0;
		}
		if(errFlag == 0) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
		} else{
				pm.read(where,fields,  function(err, results)  {
					doProcess() {
						var arr = results.rows;
						var rec = arr.pop();
						var ocrText = rec.ocr;
							pm.getGenus(ocrText,function(err,results) {
								var setRec = results.genus;
									pm.update({filename:rec.filename},{genus:setRec},function(err,results){
									 doProcess();
									 if (err) {
											response.end(JSON.stringify({success: false, err:err }));
										} else {
											response.end(JSON.stringify({success: true,results:results}));
										} 
								
									});
							});	
					}
				});
			}
});
app.all('/collector', function (request, response) {

	var where = request.query["where"] || '';
	var fields = request.query["fields"] || '';

	var errFlag = 1;
		var errObj = '';
		try {
			where = (where != '') ? JSON.parse(where) : {};
			fields = (fields != '') ? JSON.parse(fields) : {};
		} catch(err) {
			errObj = err;
			errFlag = 0;
		}
		if(errFlag == 0) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
		} else{
				pm.read(where,fields,  function(err, results)  {
					doProcess() {
						var arr = results.rows;
						var rec = arr.pop();
						var ocrText = rec.ocr;
							pm.getGenus(ocrText,function(err,results) {
								var setRec = results.genus;
									pm.update({filename:rec.filename},{genus:setRec},function(err,results){
									 doProcess();
									 if (err) {
											response.end(JSON.stringify({success: false, err:err }));
										} else {
											response.end(JSON.stringify({success: true,results:results}));
										} 
								
									});
							});	
					}
				});
			}
});
app.all('/Datecollected', function (request, response) {

	var where = request.query["where"] || '';
	var fields = request.query["fields"] || '';

	var errFlag = 1;
		var errObj = '';
		try {
			where = (where != '') ? JSON.parse(where) : {};
			fields = (fields != '') ? JSON.parse(fields) : {};
		} catch(err) {
			errObj = err;
			errFlag = 0;
		}
		if(errFlag == 0) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
		} else{
				pm.read(where,fields,  function(err, results)  {
					doProcess() {
						var arr = results.rows;
						var rec = arr.pop();
						var ocrText = rec.ocr;
							pm.getGenus(ocrText,function(err,results) {
								var setRec = results.genus;
									pm.update({filename:rec.filename},{genus:setRec},function(err,results){
									 doProcess();
									 if (err) {
											response.end(JSON.stringify({success: false, err:err }));
										} else {
											response.end(JSON.stringify({success: true,results:results}));
										} 
								
									});
							});	
					}
				});
			}
});
app.all('/Identifiedby', function (request, response) {
var where = request.query["where"] || '';
	var fields = request.query["fields"] || '';

	var errFlag = 1;
		var errObj = '';
		try {
			where = (where != '') ? JSON.parse(where) : {};
			fields = (fields != '') ? JSON.parse(fields) : {};
		} catch(err) {
			errObj = err;
			errFlag = 0;
		}
		if(errFlag == 0) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
		} else{
				pm.read(where,fields,  function(err, results)  {
					doProcess() {
						var arr = results.rows;
						var rec = arr.pop();
						var ocrText = rec.ocr;
							pm.getGenus(ocrText,function(err,results) {
								var setRec = results.genus;
									pm.update({filename:rec.filename},{genus:setRec},function(err,results){
									 doProcess();
									 if (err) {
											response.end(JSON.stringify({success: false, err:err }));
										} else {
											response.end(JSON.stringify({success: true,results:results}));
										} 
								
									});
							});	
					}
				});
			}
});
app.all('/Identifiedby', function (request, response) {
var where = request.query["where"] || '';
	var fields = request.query["fields"] || '';

	var errFlag = 1;
		var errObj = '';
		try {
			where = (where != '') ? JSON.parse(where) : {};
			fields = (fields != '') ? JSON.parse(fields) : {};
		} catch(err) {
			errObj = err;
			errFlag = 0;
		}
		if(errFlag == 0) {
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify({success: false, err: "Wrong Parameter format. " + errObj}));		
		} else{
				pm.read(where,fields,  function(err, results)  {
					doProcess() {
						var arr = results.rows;
						var rec = arr.pop();
						var ocrText = rec.ocr;
							pm.getGenus(ocrText,function(err,results) {
								var setRec = results.genus;
									pm.update({filename:rec.filename},{genus:setRec},function(err,results){
									 doProcess();
									 if (err) {
											response.end(JSON.stringify({success: false, err:err }));
										} else {
											response.end(JSON.stringify({success: true,results:results}));
										} 
								
									});
							});	
					}
				});
			}
});
app.all('/CollectorNo', function (request, response) {
});
*/


app.listen(appPort);