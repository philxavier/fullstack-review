const request = require('request');
const config = require('../config.js');

let getReposByUsername = (userName) => {
  console.log("I am at getreposbyusername")
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${userName}`,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return new Promise((resolve, reject) => {
    request(options, (err, resp) => {
      if (err) { 
        reject(err); 
      }
      resolve(resp.body)
    });
  });

  

}

module.exports.getReposByUsername = getReposByUsername;