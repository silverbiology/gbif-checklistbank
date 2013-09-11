//==========================
// RESTful API Docs for GBIF Webservices can be found at: http://dev.gbif.org/wiki/display/POR/Webservice+API
//==========================
var gbif = function( ) {

	var needle = require('needle');
	var qs = require('querystring');
	var me = this;
	var routeNameUsage = "http://api.gbif.org/name_usage";
	var routeLookupNameUsage = "http://api.gbif.org/lookup/name_usage";
	var routeNameList = "http://api.gbif.org/name_list";
	var routeMetrics = "http://api.gbif.org/dataset_metrics/{uuid}";
	var routeNode = "http://api.gbif.org/node";
	var routeOrganisation = "http://api.gbif.org/organization";
	var routeNetwork = "http://api.gbif.org/network";
	var routeDataset = "http://api.gbif.org/dataset";
	
	
	
	this.name_usage = {

		//	Lists all name usages across all checklists
		//	Params: language (default=en), datasetKey, sourceId
		//	Response: NameUsage Object
		//	Paging: yes
		getAll: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			console.log("jjh",req);
			needle.get(req, function(error,response,body){
			
			
			console.log("response",response);
			console.log("err",error);
		
			
			if (callback) callback(body);
				
			});	
  
		},
		

		//	Gets the single name usage
		//	Params: language (default=en)
		//	Response: NameUsage Object
		//	Paging: no
		getByID: function(id, options, callback) {
			if (id == null || isNaN(id) ) {
				callback( true, { msg: 'Not a valid id' });
				return;
			}
			
			var req = routeNameUsage + '/' + id + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback( error, body );
			});
		},

		// ?? The route does not seem to be valid on GBIF I will report this.
		getVerbatim: function(id, callback) {
			var req = routeNameUsage + '/' + id + '/verbatim';
			needle.get(req, function(error, response, body){
				if (callback) callback( error, body );
			});
		},

		getName: function(id, callback) {
			var req = routeNameUsage + '/' + id + '/name';
//console.log(req);
			needle.get(req, function(error, response, body){
				//if (callback) callback( error, body );
			});
		},
		
		//	Search all name usages implementing the complete set of parameters specified in Fulltext Search Services.
		search: function() {
		}

	}

	this.lookup = {

		getNameList: function (options, callback) {
			var req = routeLookupNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback( error, body );
			});
		}

	}
	
	//	TODO Not available on GBIF WS yet.
	this.name_list = {
	
		getAllName: function (options, callback) {
			var req = routeNameList + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},

		
	}
	
	//some problem with dataset metrics........
	//	Gets metrics for a single checklist
	/*this.dataset_metrics = function(uuid, callback) {
	
		getMetrics: function(uuid, callback) {
			if (uuid == null || isNaN(uuid) ) {
				callback( true, { msg: 'Not a valid id' });
				return;
			}
			
			var req = routeMetrics + '/' + uuid;
			needle.get(req, function(error, response, body){
				if (callback) callback( error, body );
			});
		},

	}*/

	//	TODO this needs to be completed. For now ignore auth request since we do not have auth permission
	this.node = {
		getNode: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},

	}

	//	TODO these routes need to be added
	this.organization = {
		getOrg: function (options, callback) {
			var req = routeOrganisation + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},

	
	}
	
	this.dataset = {
		getDataset: function (options, callback) {
			var req = routeDataset + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},

	
	}
	
	//	TODO these routes need to be added
	this.network = {
		getNetwork: function (options, callback) {
			var req = routeNetwork + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},

	
	}
	
	//doubt?
	this.setAuth = function(token) {
		this.authToken = token;
	}

}

module.exports = gbif;