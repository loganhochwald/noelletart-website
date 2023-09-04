import { main } from "../../src/S3-config";
  
  export const handler = async () => {
      try {
        const answer = await main('recent');
        return {
          statusCode: 200,
          body: JSON.stringify(answer),
        };
      } catch (err) {
        console.error(err);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'There was an error getting the recent painting URLs' }),
        };
      }
    };
