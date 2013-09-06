var gbif = function( ) {

	var needle = require('needle');
	var me = this;

		var routenameUsage = "http://api.gbif.org/name_usage"; // Name Usage Service (passing of id ,language, sourceid)
			this.name_usage =  {
			getAll: function (options,limit,offset, callback) {
	  
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

getVerbatim : function (limit,offset, callback) {	                      
		
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


//getName
getName: function(id,limit,offset, callback) {	                      

	var id = id || "";
	var limit = limit || "" ;
	var offset = offset ||  "" ;
	var req = routeName + id  + "?limit" + limit + "offset" +offset; ;
	needle.get(req, function(error,body){
		
		if (callback) callback( body);
				
	 });	
  
}
 }
var g = new gbif();
console.log(g.name_usage.getAll() );

   // taxonLookupNameusage Service
   
   var routelookNameUsage = " http://api.gbif.org/lookup/name_usage"; // LookupNameusage Service
     this.taxonLookUp =  {
       getname_usage : function (options, callback ) {
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
			needle.get(req, function (error, response, body){
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
	
	 var g = new gbif();
console.log(g.taxonLookUp.getAll() );
	
  module.exports = gbifchecklistBank;
	