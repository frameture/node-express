import * as express from 'express';
import * as http from 'http';

export default function start(): void {
  const app = express();

  app.use((req, res) => res.end('express server response'));
  http.createServer(app)
    .listen(3001, () => console.log('express server listening on 3001'));
}


