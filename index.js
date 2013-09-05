var gbifchecklistBank = function( ocrTxt ) {

	var needle = require('needle');
	var routeNameUsage = " http://api.gbif.org//lookup/name_usage"; // LookupNameusage Service
	
	var path = require( 'path' );
	var fs = require( 'fs' );

	
	var me = this;
	this.ocr = ocrTxt || null;
	this.lastResults = null;
	
	this.writeCache = true;
	this.useCache = true;
	this.cacheFolder = path.resolve(__dirname,'./cacheFolder/');
	

	this.setParams = function( params ) {
		if(params) {
			if('undefined' != typeof params.writeCache) {
				me.writeCache = params.writeCache;
			}
			if('undefined' != typeof params.useCache) {
				me.useCache = params.useCache;
			}
			if('undefined' != typeof params.cacheFolder) {
				if(params.cacheFolder != '') {
					if(fs.existsSync(path.resolve(params.cacheFolder))) {
						me.cacheFolder = params.cacheFolder;
					}
				}
			}
		}
	}
	
	this.getParams = function() {
		return {writeCache:me.writeCache, useCache:me.useCache, cacheFolder:me.cacheFolder};
	}
	
	this.setOcr = function( ocrTxt ) {
		me.ocr = ocrTxt;
	}

	this.getOcr = function( row ) {
		if ( row && me.ocr[row] ) return me.ocr.split("\n")[row];
		return me.ocr;
	}

	/*this.loadNameUsage = function( callback, type, name) {
		var name = name || "";
		var type = type || "unti";

		var req = routeNameUsage  + id + "?type=" + type;
		needle.get(req, function(error, response, body){
			if (response.statusCode == 200) {
				me.NameUsage = body.data;
				if (callback) callback( true );
			} else {
				// error
			}
		});	
		
	}
	
	/*this.lookupUsageByNAME = function( name, callback ) {
		var req = routeUsage + name;
		needle.get(req, function(error, response, body){
			if (response.statusCode == 200) {
				if (callback) callback( body.data );
			} else {
				// error
			}
		});	
	}*/

	this.writeToCache = function(name,data) {
		if(me.writeCache && me.cacheFolder && name) {
			var filename = name + '.json';
			var ar = name.split(' ');
			if(ar[0] && ar[1]) {
				filename = [ar[0],ar[1]].join('_') + '.json';
			}
			if(fs.existsSync(me.cacheFolder)) {
				if('object' == typeof data) {
					data = JSON.stringify(data);
					if(data != '[]') {
						fs.writeFileSync(path.join(me.cacheFolder,filename),data);
						return true;
					}
				}
			}
		}
		return false;
	}
	
	this.checkCache = function(options) {
		if(me.useCache && me.cacheFolder) {
			var options = options || {};
			if(options.q) {
				var filename = options.q + '.json';
				var ar = options.q.split(' ');
				if(ar[0] && ar[1]) {
					filename = [ar[0],ar[1]].join('_') + '.json';
				}
				if(fs.existsSync(path.join(me.cacheFolder,filename))) {
					var data = fs.readFileSync(path.join(me.cacheFolder,filename), 'utf8');
					return(JSON.parse(data));
				}
			}
		}
		return false;
	}
	
	// uses taxon finder service
	
	this.lookupUsage = function( options, callback ) {
		console.log("chkng");
		var options = options || {};
		if(false != (data = me.checkCache(options))) {
		console.log("chking");
			// console.log(data);
			if (callback) callback( data );
		} else {
			options.name= options.name || "";
			console.log("chkng");
			/*options.rank = options.rank || 1;
			options.kingdom = options.kingdom || "";
			options.strict = options.strict || "";
			options.verbose = options.verbose || "";*/
			
			var type = "text";
			var format = "json";
			var req = routeNameUsage + options.name + "?";
			if (options.name) {
				req += "name=" + encodeURIComponent(options.name);
			}
			//req += "&rank=" + options.rank + "&kingdom=" + options.kingdom + "&strict=" + options.strict  + "&verbose=" + options.verbose;
			
			console.log("chkng");
			needle.get(req, function(error, response, body){
			//console.log("chkng",body);
			console.log("chkng",response.statusCode);
				if (response.statusCode == 200) {
					//me.writeToCache(options.name,options.rank,body.data);
					if (callback) callback( body.data );
				} else {
					// error
				}
			});
		}
	}
	
/*	this.findName = function(callback ) {
		var input = encodeURIComponent(me.ocr);
		var type = "text";
		var format = "json";
		var req = routeNameFinder + "?" + "input=" + input + "&type=" + type + "&format=" + format;
		needle.get(req, function(error, response, body){
			if(body.names) {
				return callback(body.names);
			} else {
				return callback([]);
			}
		}
		, this);	
	}*/
	
	/*this.navigate = function( options, callback ) {
		var options = options || {};
		options.name = options.name|| '';
		options.rkey = options.rkey || 1;
		options.rank = options.rank || '';
		options.showRanks = options.showRanks || '';
		options.showVernaculars = options.showVernaculars || '';
		options.showIds = options.showIds || '';
		options.sort = options.sort || '';
		options.page = options.page || '';
		options.pageSize = options.pageSize || '';
		var type = "text";
		var format = "json";
		var req = routeNav + "?id=" + options.id + '&rkey=' + options.rkey + '&rank=' + options.rank + '&showRanks=' + options.showRanks + '&showVernaculars=' + options.showVernaculars + '&showIds=' + options.showIds + '&sort=' + options.sort + '&page=' + options.page + '&pageSize=' + options.pageSize;
		needle.get(req, function(error, response, body){
			if (response.statusCode == 200) {
				me.writeToCache(options.q,body.data);
				if (callback) callback( body.data );
			} else {
				// error
			}
		});
	}*/
};

module.exports = gbifchecklistBank;