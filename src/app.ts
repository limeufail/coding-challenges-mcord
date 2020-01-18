import * as express from 'express';
import { Router } from 'express';
import { applyMiddleware } from "./utils";
import errorHandlers from "./middleware/errorHandlers";
import routes from './routes/news-routes';

class App {
  public express;
  
  constructor () {
    const router = Router();
    this.express = express();
    this.mountRoutes();
    this.handleErrors();
    applyMiddleware(errorHandlers, router);
  }

  private handleErrors() {
    process.on("uncaughtException", e => {
      console.log(e);
      process.exit(1);
    });
    process.on("unhandledRejection", e => {
      console.log(e);
      process.exit(1);
    });
  }
  private mountRoutes(): void {
    this.express.use('/', routes);
  }
}

export default new App().express;