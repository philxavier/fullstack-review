const request = require('request');
const config = require('../config.js');

let getReposByUsername = (userName) => {
  
  let options = {
    url: `https://api.github.com/users/${userName}/repos`,
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
      var result = JSON.parse(resp.body);
      resolve(result);
    });
  });

  

}

module.exports.getReposByUsername = getReposByUsername;