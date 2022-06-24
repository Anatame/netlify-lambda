const axios = require('axios').default;

exports.handler = async function (event, context) {

    const url = "https://fmovies.to"

    // Make a request for a user with a given ID
    let response = await axios.get(url)


    return {
      statusCode: 200,
      body: response.data,
    };
  }