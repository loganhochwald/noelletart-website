const axios = require("axios");

exports.handler = async () => {
  try {
    const response = await axios.get(
      "https://noelletart.s3.amazonaws.com/about.txt"
    );

    const modifiedData = response.data.replace(/\$/g, '\n');

    return {
      statusCode: 200,
      body: JSON.stringify(modifiedData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error fetching about" }),
    };
  }
};
