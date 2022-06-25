import fetch from "node-fetch";
const CloudflareBypasser = require('cloudflare-bypasser');

exports.handler = async function (event, context) {

    const url = "https://fmovies.to/search?keyword=moon+knight&vrf=%2FmTFtmbuaDGqr4RtKYBwD%2BIV"

    let cf = new CloudflareBypasser();
    let response = await cf.request(url)
    let body = response.body // <!DOCTYPE html><html lang="en">...

    return {
      statusCode: 200,
      body: body,
    };
  }