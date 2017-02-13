var app = angular.module('MyApp',[]);

app.controller('AppCT', function ($scope, $http) {
		var link =  "http://partners.api.skyscanner.net/apiservices/pricing/v1.0"
		var reqParameters = {
			country: "JO",
			currency: "JOD",
			locale: "en-JO",
			locationSchema: "iata",
			originplace: "AMM",
			destinationplace: "AUH",
			outbounddate: "2017-02-13",
			inbounddate: "2017-05-23",
			adults: "1",
			apikey: "rb173749651227199331959727984155"
		}
		$http({
    		method: 'POST',
    		url: link,
    		data: reqParameters,
    		headers: {
    			'Content-Type': 'application/x-www-form-urlencoded',
    			'Access-Control-Allow-Origin': '*'
    		}
		}).then(function (res) {
			$scope.data = res;
		})
	})
	