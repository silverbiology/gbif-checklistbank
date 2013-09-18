//==========================
// RESTful API Docs for GBIF Webservices can be found at: http://dev.gbif.org/wiki/display/POR/Webservice+API
//==========================
var gbif = function( ) {

	var needle = require('needle');
	var qs = require('querystring');
	var me = this;
	var routeNameUsage = "http://api.gbif.org/species";
	var routeLookupNameUsage = "http://api.gbif.org/lookup/name_usage";
	var routeSearchService = "http://api.gbif.org/name_usage/search";
	var routeNameList = "http://api.gbif.org/name_list";
	var routeMetrics = "http://api.gbif.org/dataset_metrics/{uuid}";
	var routeNode = "http://api.gbif.org/node";
	var routeOrganisation = "http://api.gbif.org/organization";
	var routeNetwork = "http://api.gbif.org/network";
	var routeDataset = "http://api.gbif.org/dataset";
	
	
	
	this.species = {

		//	Lists all name usages across all checklists
		//	Params: language (default=en), datasetKey, sourceId
		//	Response: NameUsage Object
		//	Paging: yes
		getAll: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){
				
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
		
		getParents: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){
			
				if (callback) callback(body);
				
			});	
  
		},
		
		getChildren: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){

				if (callback) callback(body);
				
			});	
  
		},
		
		getDescendants: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){
			
				if (callback) callback(body);
				
			});	
  
		},
		
		getRelated: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){
			
				if (callback) callback(body);
				
			});	
  
		},
		
		getSynonyms: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){
			
				if (callback) callback(body);
				
			});	
  
		},
		
		getDescriptions: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/descriptions';
			needle.get(req, function(error,response,body){
			
				if (callback) callback(body);
				
			});	
  
		},
		
		getDistributions: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/distributions';;
			needle.get(req, function(error,response,body){
				if (callback) callback(body);
				
			});	
  
		},
		
		getImages: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/images';
			needle.get(req, function(error,response,body){
				if (callback) callback(body);
				
			});	
  
		},
		
		
		getReferences: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/references';;
			needle.get(req, function(error,response,body){
				if (callback) callback(body);
				
			});	
  
		},
		
		getSpecies: function (id, callback) {
			var req = routeNameUsage+ '/' + id + '/species';
			needle.get(req, function(error,response,body){
			
				if (callback) callback(body);
				
			});	
  
		},
		
		getVernacular: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/vernacular';
			needle.get(req, function(error,response,body){
				if (callback) callback(body);
				
			});	
  
		},
		
		getTypeSpecimens: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/typespecimens';
			needle.get(req, function(error,response,body){
			
				if (callback) callback(body);
				
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
	/*
	//search sevice
	this.searchservice = {

		getSearch: function (options, callback) {
			var req = routeSearchService + '?' + qs.stringify(options);
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
		
		
		/*getIntList: function (callback) {
			var req = routeNameList+ '/' 1 ;
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
			}
		},
		*/
	
	
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

	}
	}

	//	TODO this needs to be completed. For now ignore auth request since we do not have auth permission
	this.node = {
		getNode: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getGetsNode: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/node';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNodeOrg: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNodeContact: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNodeEndPoint: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNodeIdentifier: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		
		getNodeTag: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNodeMachineTag: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
	
		getNodeComment: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
	   getNodeEndorsement: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getNodePEndorsement: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
	
	
		getNodeCountry: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNodeCountryIso: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
	
		getNodeDataset: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		
		getNodeInstallation: function (options, callback) {
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

		getOrganisation: function (options, callback) {
			var req = routeOrganisation + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},

		getOrgcontact: function (options, callback) {
			var req = routeOrganisation + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgEndpoint: function (options, callback) {
			var req = routeOrganisation + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgIdentifier: function (options, callback) {
			var req = routeOrganisation + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgTag: function (options, callback) {
			var req = routeOrganisation + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		
		getOrgTag: function (callback) {
			var req = routeOrganisation + '?' + qs.stringify();
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		
		getOrgMachineTag: function (callback) {
			var req = routeOrganisation + '?' + qs.stringify();
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		
		
		getOrgComment: function (callback) {
			var req = routeOrganisation + '?' + qs.stringify();
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgHostedDataset: function (callback) {
			var req = routeOrganisation + '?' + qs.stringify();
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgOwnedDataset: function (callback) {
			var req = routeOrganisation + '?' + qs.stringify();
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		
		getOrgInstallation: function (callback) {
			var req = routeOrganisation + '?' + qs.stringify();
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgDeleted: function (callback) {
			var req = routeOrganisation + '?' + qs.stringify();
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		
		getOrgPending: function (callback) {
			var req = routeOrganisation + '?' + qs.stringify();
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgPublishing: function (callback) {
			var req = routeOrganisation + '?' + qs.stringify();
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
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

	   getGetNetwork: function (options, callback) {
			var req = routeNetwork + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},

		 getNetworkContact: function (options, callback) {
			var req = routeNetwork + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNetworkEndpoint: function (options, callback) {
			var req = routeNetwork + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getNetworkIdentifier: function (options, callback) {
			var req = routeNetwork + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNetworkTag: function (options, callback) {
			var req = routeNetwork + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getNetworkMachineTag: function (options, callback) {
			var req = routeNetwork + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getNetworkComment: function (options, callback) {
			var req = routeNetwork + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
	}
	//dataset
	this.dataset = {
		getDataset: function (options, callback) {
			var req = routeDataset + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},

		getGetDataSet: function (options, callback) {
			var req = routeDataset + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getDataSetContact: function (options, callback) {
			var req = routeDataset + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getDataSetEndpoint: function (options, callback) {
			var req = routeDataset + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getDataSetIdentifier: function (options, callback) {
			var req = routeDataset + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getDataSetTag: function (options, callback) {
			var req = routeDataset + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getDataSetMachineTag: function (options, callback) {
			var req = routeDataset + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getDataSetComment: function (options, callback) {
			var req = routeDataset + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getDataSetConstituents: function (options, callback) {
			var req = routeDataset + '?' + qs.stringify(options);
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
*/
}
module.exports = gbif;