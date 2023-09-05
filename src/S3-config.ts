import {
  S3Client,
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

export const main = async (prefix: string) => {
  const command = new ListObjectsV2Command({
    Bucket: "noelletart",
    Prefix: prefix
    // The default and maximum number of keys returned is 1000. This limits it to
    // one for demonstration purposes.
    //   MaxKeys: 1,
  });

  try {
    let isTruncated = true;
    let contents: (string | undefined)[] = [];

    while (isTruncated) {
      const response: ListObjectsV2CommandOutput = await client.send(command);
      const { Contents, IsTruncated, NextContinuationToken } = response;

      // array of objects with title and last modified
      const contentsList = Contents?.map((c) => {
        if (c.Key?.charAt(c.Key?.length - 1) !== '/' && c.LastModified) {
          return {
            url: `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${c.Key}`,
            lastModified: new Date(c.LastModified), // Convert LastModified to a Date object
          };
        } // filter out any undefined or null
      }).filter((item) => item !== undefined && item !== null) as { url: string; lastModified: Date }[]; // Explicitly specify the type of contentsList
      
      // sort the array by Last Modified in descending order (most recent to least recent)
      contentsList.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime()); // Use getTime() to compare Date objects
      
      // getting the list of urls only from the sorted contentsList
      const sortedUrls = contentsList.map((item) => item.url);
            
      if (contentsList) {
        contents = sortedUrls;
      }

      isTruncated = IsTruncated!;
      command.input.ContinuationToken = NextContinuationToken;
    }

    return contents;
  } catch (err) {
    console.error(err);
  }
};

