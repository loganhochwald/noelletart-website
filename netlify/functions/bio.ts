const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const response = await axios.get(
      "https://noelletart.s3.amazonaws.com/bio/Bio.txt"
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error fetching bio" }),
    };
  }
};
