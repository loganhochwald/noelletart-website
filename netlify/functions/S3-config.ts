import {
  S3Client,
  // This command supersedes the ListObjectsCommand and is the recommended way to list objects.
  ListObjectsV2Command,
  ListObjectsV2CommandOutput,
} from "@aws-sdk/client-s3";

import dotenv from "dotenv";
dotenv.config();

type Credentials = {
  accessKeyId: string;
  secretAccessKey: string;
};

type ClientConfig = {
  region: string;
  credentials: Credentials;
};

// Annotate the client variable
const client = new S3Client({
  region: process.env.S3_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_KEY!,
  },
} as ClientConfig);

const main = async () => {
  const command = new ListObjectsV2Command({
    Bucket: "noelletart",
    // The default and maximum number of keys returned is 1000. This limits it to
    // one for demonstration purposes.
    //   MaxKeys: 1,
  });

  try {
    let isTruncated = true;
    // let contents = "";
    let contentsArray: (string | undefined)[] = [];

    while (isTruncated) {
      const response: ListObjectsV2CommandOutput = await client.send(command);
      const { Contents, IsTruncated, NextContinuationToken } = response;

      const contentsList = Contents?.map(
        (c) =>
          `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${c.Key}`
      );

      if (contentsList) {
        // contents += contentsList + "\n";
        contentsArray = contentsList;
      }

      isTruncated = IsTruncated!;
      command.input.ContinuationToken = NextContinuationToken;
    }

    // return(contents);
    return contentsArray;
  } catch (err) {
    console.error(err);
  }
};


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