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
				
				if(error) {
					if (callback) callback( {success:false,error:error} );
				} else {
					if (callback) callback( {success:true,results:body} );
				}
				
			});	
  
		},
		
		getSpecies: function (id, callback) {
			var req = routeNameUsage+ '/' + id + '/species';
			needle.get(req, function(error,response,body){
			
				if(error) {
					if (callback) callback( {success:false,error:error} );
				} else {
					if (callback) callback( {success:true,results:body} );
				}
				
			});	
  
		},
		
		getVernacular: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/vernacular';
			needle.get(req, function(error,response,body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				} else {
					if (callback) callback( {success:true,results:body} );
				}
				
			});	
  
		},
		
		getTypeSpecimens: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/typespecimens';
			needle.get(req, function(error,response,body){
			
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
				
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
			//console.log(body);
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
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
				if (callback) callback(error, body);
			});
		},
		
		
		/*getIntList: function (callback) {
			var req = routeNameList+ '/' 1 ;
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
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
				if (callback) callback(error, body);
			});
		},
		
		//var UUID = 1;  Dnt knw the value of UUID & passing of "UUID" as a parameter causes error so instead of UUID im giving the id..
		
		getGetsNode: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/node';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		getNodeOrg: function (UUID, organisation, callback) {
			var req = routeNode + '/' + UUID + '/org';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		getNodeContact: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Contact';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		getNodeEndPoint: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/EndPoint';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		getNodeIdentifier: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/identifier';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		
		getNodeTag: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/tag';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		getNodeMachineTag: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/MachineTag';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
	
		getNodeComment: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Comment';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
	   getNodeEndorsement: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Endorsement';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getNodePEndorsement: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/PEndorsement';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
	
	
		getNodeCountry: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Country';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		getNodeCountryIso: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/CountryIso';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
	
		getNodeDataset: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Dataset';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		
		getNodeInstallation: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Installation';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
	
	}

	//	TODO these routes need to be added
	this.organization = {
		getOrg: function (options, callback) {
			var req = routeOrganisation + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},

		getOrganisation: function (UUID, callback) {
			var req = routeOrganisation  + '/' + UUID + '/Organisation';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},

		getOrgcontact: function (UUID, callback) {
			var req = routeOrganisation  + '/' + UUID + '/Orgcontact';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getOrgEndpoint: function (UUID, callback) {
			var req = routeOrganisation  + '/' + UUID + '/OrgEndpoint';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getOrgIdentifier: function (UUID, callback) {
			var req = routeOrganisation  + '/' + UUID + '/OrgUUIDentifier';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getOrgTag: function (UUID, callback) {
			var req = routeOrganisation  + '/' + UUID + '/OrgTag';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		
		getOrgMachineTag: function (UUID ,callback) {
			var req = routeOrganisation  + '/' + UUID + '/OrgMachineTag';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		
		getOrgComment: function (UUID ,callback) {
            var req = routeOrganisation  + '/' + UUID + '/OrgComment';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getOrgHostedDataset: function ( UUID ,callback) {
            var req = routeOrganisation  + '/' + UUID + '/HostedDataset';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getOrgOwnedDataset: function (UUID , callback) {
			var req = routeOrganisation  + '/' + UUID + '/OwnedDataset';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		getOrgInstallation: function (UUID , callback) {
			var req = routeOrganisation  + '/' + UUID + '/Installation';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getOrgDeleted: function ( UUID , callback) {
		var req = routeOrganisation  + '/' + UUID + '/Deleted';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		getOrgPending: function (UUID , callback) {
		var req = routeOrganisation  + '/' + UUID + '/Pending';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getOrgPublishing: function (UUID , callback) {
		var req = routeOrganisation  + '/' + UUID + '/Publishing';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
	}


	//	TODO these routes need to be added
	this.network = {
		getNetwork: function (UUID, callback) {
			var req = routeNetwork + '/' + UUID + '/network';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},

	   getGetNetwork: function (UUID, callback) {
			var req = routeNetwork + '/' + UUID + '/getnetwork';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},

		 getNetworkContact: function (UUID, callback) {
				var req = routeNetwork + '/' + UUID + '/networkcontact';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		getNetworkEndpoint: function (UUID, callback) {
				var req = routeNetwork + '/' + UUID + '/networkendpoint';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getNetworkIdentifier: function (UUID, callback) {
				var req = routeNetwork + '/' + UUID + '/networkidentifier';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		getNetworkTag: function (UUID, callback) {
				var req = routeNetwork + '/' + UUID + '/networktag';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getNetworkMachineTag: function (UUID, callback) {
				var req = routeNetwork + '/' + UUID + '/networkmachinetag';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getNetworkComment: function (UUID, callback) {
			var req = routeNetwork + '/' + UUID + '/networkcomment';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
	}
	//dataset
	this.dataset = {
		getDataset: function (UUID, callback) {
		var req = routeNetwork + '/' + UUID + '/Dataset';	
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},																												

		getGetDataSet: function (UUID, callback) {								
			var req = routeNetwork + '/' + UUID + '/getDataset';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);			
			});
		},
		getDataSetContact: function (UUID, callback) {
			var req = routeNetwork + '/' + UUID + '/Datasetcontact';
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getDataSetEndpoint: function (UUID, callback) {
			var req = routeNetwork + '/' + UUID + '/Datasetendpoint';	
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getDataSetIdentifier: function (UUID, callback) {
			var req = routeNetwork + '/' + UUID + '/Datasetidentifier';	
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getDataSetTag: function (UUID, callback) {
			var req = routeNetwork + '/' + UUID + '/Datasettag';	
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getDataSetMachineTag: function (UUID, callback) {
			var req = routeNetwork + '/' + UUID + '/Datasetmachinetag';	
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		getDataSetComment: function (UUID, callback) {
			var req = routeNetwork + '/' + UUID + '/Datasetcomment';	
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		getDataSetConstituents: function (UUID, callback) {
			var req = routeNetwork + '/' + UUID + '/Datasetconstituents';	
			needle.get(req, function(error, response, body){
				if (callback) callback(error, body);
			});
		},
		
		
	}
	
	//doubt?		
	this.setAuth = function(token) {
		this.authToken = token;
	}


*/
}
module.exports = gbif;