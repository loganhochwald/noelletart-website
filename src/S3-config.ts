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

      const contentsList = Contents?.map((c) => {
        if (c.Key?.charAt(c.Key?.length - 1) !== '/') {
          return `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${c.Key}`;
        }
      }).filter((item) => item !== undefined && item !== null);
      

      if (contentsList) {
        contents = contentsList;
      }

      isTruncated = IsTruncated!;
      command.input.ContinuationToken = NextContinuationToken;
    }

    return contents;
  } catch (err) {
    console.error(err);
  }
};

