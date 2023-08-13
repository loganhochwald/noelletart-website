import express from 'express';
import { Express } from 'express-serve-static-core';
import path from 'path';

const setupMiddleware = (app: Express) => {
  // parses incoming JSON
  app.use(express.json());

  // serving static client file
  const dist = path.resolve(__dirname, '..', 'client');
  app.use(express.static(dist));

  // if route is defined in react router, serve the static file, otherwise send an error
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(dist, 'index.html'), (error) => {
      if (error) {
        res.status(500).send(error);
      }
    });
  });
};

export default setupMiddleware;
