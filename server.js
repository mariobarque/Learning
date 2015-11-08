var http 		= require('http');
var url 		= require('url');
var querystring = require('querystring');
var fs 			= require('fs');

http.createServer(processRequest).listen(7000);

function processRequest(request, response){
	
	pathName = url.parse(request.url).pathname;
	fileLocation = __dirname + pathName;
	console.log(fileLocation);
	fs.readFile(fileLocation, function(err, data){
		if (err){
			response.writeHead(404, {'content-type':'text/plain'});
			response.write('Page was not found');
		}else{
			response.writeHead(200);
			response.write(data);
		}

		response.end();		
	});
}