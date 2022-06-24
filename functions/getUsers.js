const axios = require('axios').default;
const fetch = require("node-fetch")

exports.handler = async function (event, context) {

    const url = "https://google.com"

    // Make a request for a user with a given ID
    let response = fetch(url)

    return {
      statusCode: 200,
      body: response.body,
    };
  }