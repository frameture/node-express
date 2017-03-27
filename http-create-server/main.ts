import * as http from 'http';

function requestHandler(req: http.ServerRequest, res: http.ServerResponse): void {
  res.end('some response' + req.statusCode + req.statusMessage);
}

const server = http.createServer(requestHandler);
server.listen(3000);