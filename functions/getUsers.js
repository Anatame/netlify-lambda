import fetch from "node-fetch";

exports.handler = async function (event, context) {

    const url = "https://fmovies.to/search?keyword=moon+knight&vrf=%2FmTFtmbuaDGqr4RtKYBwD%2BIV"

    // Make a request for a user with a given ID
    let response = await fetch(url)
    let body = await response.text(); 

    return {
      statusCode: 200,
      body: body,
    };
  }