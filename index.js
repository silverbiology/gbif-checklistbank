//==========================
// RESTful API Docs for GBIF Webservices can be found at: http://dev.gbif.org/wiki/display/POR/Webservice+API
//==========================
var gbif = function( ) {

	var needle = require('needle');
	var qs = require('querystring');
	var me = this;
	var routeNameUsage = "http://api.gbif.org/name_usage";
	var routeLookupNameUsage = "http://api.gbif.org/lookup/name_usage";
	var routeSearchService = "http://api.gbif.org/name_usage/search";
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
			needle.get(req, function(error,response,body){
				
				if (callback) callback(error,body);
				
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
			
				if (callback) callback( error,body);
				
			});	
  
		},
		
		getChildren: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){

				if (callback) callback( error,body);
				
			});	
  
		},
		
		getDescendants: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){
			
				if (callback) callback( error,body);
				
			});	
  
		},
		
		getRelated: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){
			
				if (callback) callback(error,body);
				
			});	
  
		},
		
		getSynonyms: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){
			
				if (callback) callback(error,body);
				
			});	
  
		},
		
		getDescriptions: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/descriptions';
			needle.get(req, function(error,response,body){
			
				if (callback) callback( error,body);
				
			});	
  
		},
		
		getDistributions: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/distributions';;
			needle.get(req, function(error,response,body){
				if (callback) callback( error,body);
				
			});	
  
		},
		
		getImages: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/images';
			needle.get(req, function(error,response,body){
				if (callback) callback( error,body);
				
			});	
  
		},
		
		
		getReferences: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/references';;
			needle.get(req, function(error,response,body){
				if (callback) callback( error,body);
				
			});	
  
		},
		
		getSpecies: function (id, callback) {
			var req = routeNameUsage+ '/' + id + '/species';
			needle.get(req, function(error,response,body){
			
				if (callback) callback( error,body);
				
			});	
  
		},
		
		getVernacular: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/vernacular';
			needle.get(req, function(error,response,body){
				if (callback) callback( error,body);
				
			});	
  
		},
		
		getTypeSpecimens: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/typespecimens';
			needle.get(req, function(error,response,body){
			
				if (callback) callback( error,body);
				
			});	
  
		},
		
		
		
		//	Search all name usages implementing the complete set of parameters specified in Fulltext Search Services.
		search: function() {
		}

	}

	this.lookup = {

		getNameList: function (options, callback) {
			var req = routeLookupNameUsage + '?' + qs.stringify(options);
			console.log("isfggggggggggggggggggggggggggggggg",req);
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
*/
	//	TODO this needs to be completed. For now ignore auth request since we do not have auth permission
	/*this.node = {
	
		getNode: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		//var UUID = 1;  Dnt knw the value of UUID & passing of "UUID" as a parameter causes error so instead of UUID im giving the id..
		getGetsNode: function (id, callback) {
			var req = routeNode + '/' + id + '/node';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNodeOrg: function (id, callback) {
			var req = routeNode + '/' + id + '/org';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNodeContact: function (id, callback) {
			var req = routeNode + '/' + id + '/Contact';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNodeEndPoint: function (id, callback) {
			var req = routeNode + '/' + id + '/EndPoint';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNodeIdentifier: function (id, callback) {
			var req = routeNode + '/' + id + '/Identifier';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		
		getNodeTag: function (id, callback) {
			var req = routeNode + '/' + id + '/tag';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNodeMachineTag: function (id, callback) {
			var req = routeNode + '/' + id + '/MachineTag';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
	
		getNodeComment: function (id, callback) {
			var req = routeNode + '/' + id + '/Comment';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
	   getNodeEndorsement: function (id, callback) {
			var req = routeNode + '/' + id + '/Endorsement';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getNodePEndorsement: function (id, callback) {
			var req = routeNode + '/' + id + '/PEndorsement';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
	
	
		getNodeCountry: function (id, callback) {
			var req = routeNode + '/' + id + '/Country';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNodeCountryIso: function (id, callback) {
			var req = routeNode + '/' + id + '/CountryIso';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
	
		getNodeDataset: function (id, callback) {
			var req = routeNode + '/' + id + '/Dataset';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		
		getNodeInstallation: function (id, callback) {
			var req = routeNode + '/' + id + '/Installation';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
	
	}
/*
	//	TODO these routes need to be added
	this.organization = {
		getOrg: function (options, callback) {
			var req = routeOrganisation + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},

		getOrganisation: function (id, callback) {
			var req = routeOrganisation  + '/' + id + '/Organisation';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},

		getOrgcontact: function (id, callback) {
			var req = routeOrganisation  + '/' + id + '/Orgcontact';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgEndpoint: function (id, callback) {
			var req = routeOrganisation  + '/' + id + '/OrgEndpoint';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgIdentifier: function (id, callback) {
			var req = routeOrganisation  + '/' + id + '/OrgIdentifier';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgTag: function (id, callback) {
			var req = routeOrganisation  + '/' + id + '/OrgTag';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		
		
		getOrgMachineTag: function (id ,callback) {
			var req = routeOrganisation  + '/' + id + '/OrgMachineTag';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		
		
		getOrgComment: function (id ,callback) {
            var req = routeOrganisation  + '/' + id + '/OrgComment';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgHostedDataset: function ( id ,callback) {
            var req = routeOrganisation  + '/' + id + '/HostedDataset';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgOwnedDataset: function (id , callback) {
			var req = routeOrganisation  + '/' + id + '/OwnedDataset';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		
		getOrgInstallation: function (id , callback) {
			var req = routeOrganisation  + '/' + id + '/Installation';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgDeleted: function ( id , callback) {
		var req = routeOrganisation  + '/' + id + '/Deleted';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		
		getOrgPending: function (id , callback) {
		var req = routeOrganisation  + '/' + id + '/Pending';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		getOrgPublishing: function (id , callback) {
		var req = routeOrganisation  + '/' + id + '/Publishing';
			needle.get(req, function(error, response, body){
				//if (callback) callback(error, body.results);
			});
		},
		
	}
	
	//	TODO these routes need to be added
	this.network = {
		getNetwork: function (id, callback) {
			var req = routeNetwork + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},

	   getGetNetwork: function (id, callback) {
			var req = routeNetwork + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},

		 getNetworkContact: function (id, callback) {
			var req = routeNetwork + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNetworkEndpoint: function (id, callback) {
			var req = routeNetwork + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getNetworkIdentifier: function (id, callback) {
			var req = routeNetwork + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getNetworkTag: function (id, callback) {
			var req = routeNetwork + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getNetworkMachineTag: function (id, callback) {
			var req = routeNetwork + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getNetworkComment: function (id, callback) {
			var req = routeNetwork + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
	}
	//dataset
	this.dataset = {
		getDataset: function (id, callback) {
			var req = routeDataset + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},

		getGetDataSet: function (id, callback) {
			var req = routeDataset + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getDataSetContact: function (id, callback) {
			var req = routeDataset + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getDataSetEndpoint: function (id, callback) {
			var req = routeDataset + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getDataSetIdentifier: function (id, callback) {
			var req = routeDataset + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getDataSetTag: function (id, callback) {
			var req = routeDataset + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getDataSetMachineTag: function (id, callback) {
			var req = routeDataset + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		getDataSetComment: function (id, callback) {
			var req = routeDataset + '?' + qs.stringify(id);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body.results);
			});
		},
		
		getDataSetConstituents: function (id, callback) {
			var req = routeDataset + '?' + qs.stringify(id);
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