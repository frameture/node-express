import * as http from 'http';

export default function start(): void {
  function requestHandler(req: http.ServerRequest, res: http.ServerResponse): void {
    res.end('node server response');
  }

  const server = http.createServer(requestHandler);
  server.listen(3000, () => console.log('node server listening on 3000'));
}