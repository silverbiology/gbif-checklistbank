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
	var routeMetrics = "http://api.gbif.org/dataset_metrics/{uuUUID}";
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
				
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
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
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},

		// ?? The route does not seem to be valid on GBIF I will report this.
		getVerbatim: function(id, callback) {
			var req = routeNameUsage + '/' + id + '/verbatim';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},

		getName: function(id, callback) {
			var req = routeNameUsage + '/' + id + '/name';
            //console.log(req);
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		getParents: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){
			
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});	
  
		},
		
		getChildren: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){

				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});	
  
		},
		
		getDescendants: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){
			
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});	
  
		},
		
		getRelated: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){
			
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});	
  
		},
		
		getSynonyms: function (options, callback) {
			var req = routeNameUsage + '?' + qs.stringify(options);
			needle.get(req, function(error,response,body){
			
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});	
  
		},
		
		getDescriptions: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/descriptions';
			needle.get(req, function(error,response,body){
			
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
				
			});	
  
		},
		
		getDistributions: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/distributions';;
			needle.get(req, function(error,response,body){
				
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
				
			});	
  
		},
		
		getImages: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/images';
			needle.get(req, function(error,response,body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});	
  
		},
		
		
		getReferences: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/references';;
			needle.get(req, function(error,response,body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});	
  
		},
		
		getSpecies: function (id, callback) {
			var req = routeNameUsage+ '/' + id + '/species';
			needle.get(req, function(error,response,body){
			
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
				
			});	
  
		},
		
		getVernacular: function (id, callback) {
			var req = routeNameUsage + '/' + id + '/vernacular';
			needle.get(req, function(error,response,body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
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
	this.node = {
	
		getNode: function (options, callback) {
			var req = routeNode + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
			getGetsNode: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/node';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		getNodeOrg: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/org';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		getNodeContact: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Contact';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		getNodeEndPoint: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/EndPoint';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		getNodeIdentifier: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Identifier';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		
		getNodeTag: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/tag';
			needle.get(req, function(error, response, body){
			if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		getNodeMachineTag: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/MachineTag';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
	
		getNodeComment: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Comment';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
	   getNodeEndorsement: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Endorsement';
			needle.get(req, function(error, response, body){
			if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getNodePEndorsement: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/PEndorsement';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
	
	
		getNodeCountry: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Country';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		getNodeCountryIso: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/CountryIso';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
	
		getNodeDataset: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Dataset';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		
		getNodeInstallation: function (UUID, callback) {
			var req = routeNode + '/' + UUID + '/Installation';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
	
	}

	//	TODO these routes need to be added
	this.organization = {
		getOrg: function (options, callback) {
			var req = routeOrganisation + '?' + qs.stringify(options);
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},

		getOrganisation: function (UUID, callback) {
			var req = routeOrganisation  + '/' + UUID + '/Organisation';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},

		getOrgcontact: function (UUID, callback) {
			var req = routeOrganisation  + '/' + UUID + '/Orgcontact';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getOrgEndpoint: function (UUID, callback) {
			var req = routeOrganisation  + '/' + UUID + '/OrgEndpoint';
			needle.get(req, function(error, response, body){
			if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getOrgIdentifier: function (UUID, callback) {
			var req = routeOrganisation  + '/' + UUID + '/OrgIdentifier';
			needle.get(req, function(error, response, body){
			if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getOrgTag: function (UUID, callback) {
			var req = routeOrganisation  + '/' + UUID + '/OrgTag';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		
		getOrgMachineTag: function (UUID ,callback) {
			var req = routeOrganisation  + '/' + UUID + '/OrgMachineTag';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		
		getOrgComment: function (UUID ,callback) {
            var req = routeOrganisation  + '/' + UUID + '/OrgComment';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getOrgHostedDataset: function ( UUID ,callback) {
            var req = routeOrganisation  + '/' + UUID + '/HostedDataset';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getOrgOwnedDataset: function (UUID , callback) {
			var req = routeOrganisation  + '/' + UUID + '/OwnedDataset';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		getOrgInstallation: function (UUID , callback) {
			var req = routeOrganisation  + '/' + UUID + '/Installation';
			needle.get(req, function(error, response, body){
			if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getOrgDeleted: function ( UUID , callback) {
		var req = routeOrganisation  + '/' + UUID + '/Deleted';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		getOrgPending: function (UUID , callback) {
		var req = routeOrganisation  + '/' + UUID + '/Pending';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getOrgPublishing: function (UUID , callback) {
			var req = routeOrganisation  + '/' + UUID + '/Publishing';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
	}

	
	this.network = {
		getNetwork: function (UUID, callback) {
			var req = routeNetwork  + '/' + UUID + '/Network';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},

	   getGetNetwork: function (UUID, callback) {
				var req = routeNetwork  + '/' + UUID + '/GetNetwork';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},

		 getNetworkContact: function (UUID, callback) {
				var req = routeNetwork + '/' + UUID + '/NetworkContact';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		getNetworkEndpoint: function (UUID, callback) {
				var req = routeNetwork + '/' + UUID + '/NetworkEndpoint';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getNetworkIdentifier: function (UUID, callback) {
				var req = routeNetwork + '/' + UUID + '/NetworkIdentifier';
			needle.get(req, function(error, response, body){
			if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		getNetworkTag: function (UUID, callback) {
				var req = routeNetwork + '/' + UUID + '/NetworkTag';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getNetworkMachineTag: function (UUID, callback) {
				var req = routeNetwork + '/' + UUID + '/NetworkMachineTag';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getNetworkComment: function (UUID, callback) {
				var req = routeNetwork + '/' + UUID + '/NetworkComment';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
	}
	//dataset
	this.dataset = {
		getDataset: function (UUID, callback) {
			var req = routeDataset+ '/' + UUID + '/Dataset';
			needle.get(req, function(error, response, body){
			if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},

		getGetDataSet: function (UUID, callback) {
					var req = routeDataset+ '/' + UUID + '/getDataset';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getDataSetContact: function (UUID, callback) {
					var req = routeDataset+ '/' + UUID + '/DatasetContact';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getDataSetEndpoint: function (UUID, callback) {
					var req = routeDataset+ '/' + UUID + '/DatasetEndpoint';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getDataSetIdentifier: function (UUID, callback) {
					var req = routeDataset+ '/' + UUID + '/DatasetIdentifier';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getDataSetTag: function (UUID, callback) {
					var req = routeDataset+ '/' + UUID + '/DatasetTag';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getDataSetMachineTag: function (UUID, callback) {
					var req = routeDataset+ '/' + UUID + '/DatasetMachineTag';
			needle.get(req, function(error, response, body){
			if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		getDataSetComment: function (UUID, callback) {
					var req = routeDataset+ '/' + UUID + '/DatasetComment';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		getDataSetConstituents: function (UUID, callback) {
					var req = routeDataset+ '/' + UUID + '/DatasetConstituents';
			needle.get(req, function(error, response, body){
				if(error) {
					if (callback) callback( {success:false,error:error} );
				}else {
					if (callback) callback( {success:true,results:body,totalCount: body.length} );
				}
			});
		},
		
		
	}
	
	//doubt?
	this.setAuth = function(token) {
		this.authToken = token;
	}

}

module.exports = gbif;