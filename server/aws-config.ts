import {
    S3Client,
    // This command supersedes the ListObjectsCommand and is the recommended way to list objects.
    ListObjectsV2Command,
    ListObjectsV2CommandOutput
  } from "@aws-sdk/client-s3";

  import dotenv from 'dotenv';
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
    region: process.env.AWS_BUCKET_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_KEY!,
    },
} as ClientConfig);
  
  export const main = async () => {
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
    
            const contentsList = Contents?.map((c) => c.Key);

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
  
