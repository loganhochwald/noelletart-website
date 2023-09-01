import { main } from "../../server/aws-config";

export const handler = async () => {
    try {
      const answer = await main();
      return {
        statusCode: 200,
        body: JSON.stringify(answer),
      };
    } catch (err) {
      console.error(err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'There was an error getting the image URLs' }),
      };
    }
  };
