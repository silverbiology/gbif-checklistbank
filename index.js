//==========================
// RESTful API Docs for GBIF Webservices can be found at: http://dev.gbif.org/wiki/display/POR/Webservice+API
//==========================
var gbif = function( ) {

	var needle = require('needle');
	var qs = require('querystring');
	var me = this;
	var routeNameUsage = "http://api.gbif.org/name_usage";
	var routeLookupNameUsage = "http://api.gbif.org/lookup/name_usage";

	this.name_usage = {

		//	Lists all name usages across all checklists
		//	Params: language (default=en), datasetKey, sourceId
		//	Response: NameUsage Object
		//	Paging: yes
		getAll: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
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
				if (callback) callback( error, body );
			});
		},
		
		//	Search all name usages implementing the complete set of parameters specified in Fulltext Search Services.
		search: function() {
		}

	}

	this.lookup = {

		getNameUsage: function (options, callback) {
			var req = routeLookupNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback( error, body );
			});
		}

	}
	
	//	TODO Not available on GBIF WS yet.
	this.name_list = {}
	
	//	Gets metrics for a single checklist
	this.dataset_metrics = function(uuid, callback) {
	}

	//	TODO this needs to be completed. For now ignore auth request since we do not have auth permission
	this.node = {}

	//	TODO these routes need to be added
	this.organization = {
	}
	
	this.dataset = {
	}
	
	//	TODO these routes need to be added
	this.network = {
	}
	this.setAuth = function(token) {
		this.authToken = token;
	}

}

module.exports = gbif;