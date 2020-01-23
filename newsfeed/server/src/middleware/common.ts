import { Router } from "express";
import * as compression from "compression";
const cors = require('cors')

const whitelist = ['http://localhost:4200']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

export const handleCors = (router: Router) =>
  router.use(cors(corsOptions));

export const handleCompression = (router: Router) => {
  router.use(compression());
};