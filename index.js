var gbifchecklistBank = function( ocrTxt ) {

	var needle = require('needle');
	var routeChecklist = "http://ecat-dev.gbif.org/ws/checklist/"; // Checklist Service
	var routeResolve = "http://ecat-dev.gbif.org/ws/usage/"; // Name URI Resolver
	var routeUsage = "http://ecat-dev.gbif.org/ws/usage/"; // Name Usage Service
	var routeNav = "http://ecat-dev.gbif.org/ws/nav/"; // Navigation Service
	var routeName = "http://ecat-dev.gbif.org/ws/name/"; // Name String Service
	var routeImage = "http://ecat-dev.gbif.org/ws/image/"; // Image Service
	var routeNameFinder = "http://ecat-dev.gbif.org/ws/indexer"; // Name Finder Service
	
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

	this.loadChecklists = function( callback, type, id ) {
		var id = id || "";
		var type = type || "unti";

		var req = routeChecklist + id + "?type=" + type;
		needle.get(req, function(error, response, body){
			if (response.statusCode == 200) {
				me.checklists = body.data;
				if (callback) callback( true );
			} else {
				// error
			}
		});	
		
	}
	
	this.lookupUsageByID = function( id, callback ) {
		var req = routeUsage + id;
		needle.get(req, function(error, response, body){
			if (response.statusCode == 200) {
				if (callback) callback( body.data );
			} else {
				// error
			}
		});	
	}

	this.writeToCache = function(name,data) {
		if(me.writeCache && me.cacheFolder && name) {
			var filename = name + '.json';
			var ar = name.split(' ');
			if(ar[0] && ar[1]) {
				filename = [ar[0],ar[1]].join('_') + '.json';
			}
			if(fs.existsSync(me.cacheFolder)) {
				if('object' == typeof data) {
					// console.log('Test');
					data = JSON.stringify(data);
					fs.writeFileSync(path.join(me.cacheFolder,filename),data);
					return true;
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
		var options = options || {};
		if(false != (data = me.checkCache(options))) {
			// console.log(data);
			if (callback) callback( data );
		} else {
			options.id = options.id || "";
			options.rkey = options.rkey || 1;
			options.showRanks = options.showRanks || 'kpcofgs';
			var type = "text";
			var format = "json";
			var req = routeUsage + options.id + "?";
			if (options.q) {
				req += "q=" + encodeURIComponent(options.q);
			}
			req += "&rkey=" + options.rkey + "&showRanks=" + options.showRanks;
			needle.get(req, function(error, response, body){
				if (response.statusCode == 200) {
					me.writeToCache(options.q,body.data);
					if (callback) callback( body.data );
				} else {
					// error
				}
			});
		}
	}
	
	this.findName = function(callback ) {
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
	}
	
};

module.exports = gbifchecklistBank;