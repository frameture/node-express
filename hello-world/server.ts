import * as express from 'express';
import { Express, Response, Request } from "express";

export default class Server {

  private readonly PORT: number;
  private app: Express;

  constructor(port: number) {
    this.app = express();
    this.PORT = port;
  }

  run(): void {
    this.app.get('/', (req, res) => this.respond(req, res));
    this.app.listen(this.PORT, () => this.success());
  }

  private respond(request: Request, response: Response): void {
    response.send('Hello World!')
  }

  private success(): void {
    console.log(`Express - Hello world app started at port ${ this.PORT }`);
  }
}