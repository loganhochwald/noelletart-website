import { Router } from "express";
import { main } from "../aws-config";
export const AWS = Router();

AWS.get('/images', async (req, res) => {
    try {
      const answer = await main();
      res.status(200).send(answer);
    } catch (err) {
      console.error(err);
      res.status(500).send('There was an error getting the image URLs');
    }
  });
