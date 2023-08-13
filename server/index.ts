import express from 'express';
import dotenv from 'dotenv';

// load variables from .env file
dotenv.config();

// server instance and port
const app = express();
const port = 4200;

// middleware
// parses incoming JSON
app.use(express.json());

// shows message until client side is built
app.get('/', (req, res) => {
  res.send('Hello Noelle!');
});

// start express server
app.listen(port, () => {
  console.log(`Https server listening on port ${port}`);
});