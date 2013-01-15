var gbifchecklistBank = function( ocrTxt ) {

	var needle = require('needle');
	var routeChecklist = "http://ecat-dev.gbif.org/ws/checklist/"; // Checklist Service
	var routeResolve = "http://ecat-dev.gbif.org/ws/usage/"; // Name URI Resolver
	var routeUsage = "http://ecat-dev.gbif.org/ws/usage/"; // Name Usage Service
	var routeNav = "http://ecat-dev.gbif.org/ws/nav/"; // Navigation Service
	var routeName = "http://ecat-dev.gbif.org/ws/name/"; // Name String Service
	var routeImage = "http://ecat-dev.gbif.org/ws/image/"; // Image Service
	
	var me = this;
	this.ocr = ocrTxt || null;
	this.lastResults = null;

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
	
	// uses taxon finder service
	this.lookupUsage = function( options, callback ) {
		var options = options || {};
		options.id = options.id || "";
//		var input = encodeURIComponent( this.ocr );
		var type = "text";
		var format = "json";
		var req = routeUsage + options.id + "?";
		if (options.q) {
			req += "q=" + encodeURIComponent(options.q);
		}
		console.log(req);
		needle.get(req, function(error, response, body){
			if (response.statusCode == 200) {
				if (callback) callback( body.data );
				
			} else {
				// error
			}
		});	
	}

};

module.exports = gbifchecklistBank;