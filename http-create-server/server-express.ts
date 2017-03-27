import * as express from 'express';
import * as http from 'http';
import * as logger from 'morgan';

export default function start(): void {
  const app = express();

  app.use(logger('short'));
  app.use(authenticate);
  app.use((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>express server response</h1>');
  });

  http.createServer(app)
    .listen(3001, () => console.log('express server listening on 3001'));

  function authenticate(req, res, next): void {
    const minute = new Date().getMinutes();
    if ((minute % 2)) {
      res.statusCode = 403;
      res.end('Not authorized');
      return;
    }
    next();
  }

}
