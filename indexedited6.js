var gbifchecklistBank = function( ocrTxt ) {

	var needle = require('needle');
	
		
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
	
	
	this.writeToCache = function(name,data) {                             
		if(me.writeCache && me.cacheFolder && name) {
			var filename = name + '.json';
			var	 ar = name.split(' ');
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
		
	
	// uses taxon finder service
	
var gbif = function() {
	var routeNameUsage = " http://api.gbif.org/lookup/name_usage"; // LookupNameusage Service
	
	this.lookupUsage = {
	getAll: function( options, callback ) {
	console.log("chkng");
	var options = options || {};
		if(false != (data = me.checkCache(options))) {
		console.log("chking");
			// console.log(data);
			if (callback) callback( data );
		} else {
			options.name= options.name || "";
			console.log("chkng");
			options.rank = options.rank || 1;
			options.kingdom = options.kingdom || "";
			options.strict = options.strict || "";
			options.verbose = options.verbose || "";
			
			var type = "text";
			var format = "json";
			var req = routeNameUsage + options.name + "?";
			 var paramArray = [];  //here we add new paramarray
   var req = routeNameUsage + "?";
   if (options.name != "") {
    paramArray.push("name=" + encodeURIComponent(options.name));
   }
   //req += "&rank=" + options.rank + "&kingdom=" + options.kingdom + "&strict=" + options.strict  + "&verbose=" + options.verbose;
   
   if(paramArray.length) {
    req = req + paramArray.join('&');
 
			console.log("chkng");
			needle.get(req, function(error, response, body){
			console.log("chkng",body);
			//console.log("chkng",response.statusCode);
				if (response.statusCode == 200) {
					//me.writeToCache(options.name,options.rank,body.data);
					if (callback) callback( body);
				} else {
					// error
				}
			});
		}
	}
}
}	
	};
	//checklist bank services :Name usage1 ie,, passing of id, language ,datasetKey,,,,
	
	
 var gbif = function() {

	var routeUsageService = "http://api.gbif.org/name_usage"; // Name Usage Service (passing of id ,language, sourceid)
    this.gbif.name_usage.all = {
        getNameUsage: function(options,limit,offset, callback) {	
			var options = options || {};
			if(false != (data = me.checkCache(options))) {
				console.log("chking");
				// console.log(data);
				if (callback) callback( data );
			} else {
				options.language= options.language || "";
				console.log("chkng");
				options.sourceId = options.sourceId || 1;
				options.datasetKey = options.datasetKey || "";
 
				var limit = limit || "" ;
				var offset = offset ||  "" ;
 
				var paramArray = [];  //here we add new paramarray
				var req = routeUsageService + "?";
				if (options.sourceId != "") {
					paramArray.push(" sourceId = " + encodeURIComponent(options.sourceId ));
				} 
				if(options.language != "") {
					paramArray.push(" language = " + encodeURIComponent(options.language));
				}
				if(options.datasetkey != ""){
				
					paramArray.push(" datasetKey=" + encodeURIComponent(options.datasetKey));
				}
				if(limit != "") {
					paramArray.push(" limit=" + encodeURIComponent(limit));
				}
				if(offset != "") {
					paramArray.push(" offset=" + encodeURIComponent(offset));
				}
 
		if(paramArray.length) {
			req = req + paramArray.join('&');
 

 //var req = routeUsageService + id + "?language=" + language + "?limit" + limit + "offset" +offset;
			needle.get(req, function(error,response,body){
			console.log("gjh",response.body);
			console.log("err",error);
		 
			if (callback) callback( body );
  
			}); 
		}
		}
	}
	}
}
}


// checklist service :name usage service verbatim/ passing of id     


var gbif = function() {
var routeVerbatim = "http://api.gbif.org/name_usage/1/verbatim"; // Name Usage Verbatim (passing of id)
	
    this.gbifName_usageGetVerbatim = {
        getAll: function(options,limit,offset, callback) {	                      

		
	//var id = id || "";
	var limit = limit || "" ;
	var offset = offset ||  "" ;
	var paramArray = []; 
	
	var req = routeVerbatim + "?";
	/* if ( id != "") {
    paramArray.push(" id=" + encodeURIComponent(id));
	}*/
	if(limit != "") {
	paramArray.push(" limit=" + encodeURIComponent(limit));
	}
	if(offset != "") {
	paramArray.push(" offset=" + encodeURIComponent(offset));
	}
 
   if(paramArray.length) {
    req = req + paramArray.join('&');
 console.log(req);
	needle.get(req, function(error,response,body){
		console.log("results",response.body);
		console.log("err",error);
		if (callback) callback( body);
				
	});
}
}
}
}

// checklist bank: name usage service usage.getname

var gbif = function() {
   
   var routeName= "http://api.gbif.org/name_usage/1/name"; // Name Usage services getname(passing of id)
    
		 this. gbifName_usageGetName= {
        getAll: function(id,limit,offset, callback) {	                      

	var id = id || "";
	var limit = limit || "" ;
	var offset = offset ||  "" ;
	var req = routeName + id  + "?limit" + limit + "offset" +offset; ;
	needle.get(req, function(error,body){
		
		if (callback) callback( body);
				
	 });	
   }
     }
   }
   };

//checklist bank services: nameusage_parents


module.exports = gbifchecklistBank;
	