import * as express from 'express';
import { Express } from "express";

export default class App {

  private readonly app: Express = express();
  private readonly PORT = 3000;

  start(): void {
    this.setApp();
    this.startApp();
  }

  private setApp(): void {
    this.app.get('/', (req, res) => res.send('GET request'));
    this.app.post('/', (req, res) => res.send('POST request'));
    this.app.put('/', (req, res) => res.send('PUT request'));
    this.app.delete('/', (req, res) => res.send('DELETE request'));
  }

  private startApp(): void {
    this.app.listen(this.PORT);
  }

}