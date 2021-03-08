import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import middlewares from './app/middlewares';
import routers from './app/routers';
import './database';

class App {
  constructor() {
    this.server = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  config() {
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(express.json());

    dotenv.config({
      path: './../.env',
    });
  }

  middlewares() {
    this.server.use(middlewares);
  }

  routes() {
    this.server.use(routers);
  }
}

export default new App().server;
