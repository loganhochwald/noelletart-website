import express from 'express';
import dotenv from 'dotenv';
import { AWS } from './routes/aws';
import setupMiddleware from './middleware';

// load variables from .env file
dotenv.config();

// server instance and port
const app = express();
const port = 4200;

app.use('/aws', AWS);

// Call the setupMiddleware function and pass the app instance
// setupMiddleware(app);

// start express server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
