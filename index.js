const http = require('http');
const logger = require('pino')()

const server = http.createServer((request, response) => {
	logger.info(request)
	let body = '';
	request.on('data', chunk => {
		body += chunk.toString(); // convert Buffer to string
	});
	request.on('end', () => {
		logger.info(body);
	});
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
