const express = require('express');

const getReposByUsername = require('../helpers/github').getReposByUsername;

let app = express();

const parser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));

app.use(parser.json());

app.post('/repos', function (req, res) {

  var userName = req.body.name;
  getReposByUsername(userName)
   .then((result) => {
     console.log(result);
   })
   .catch((e) => {
     console.log(e);
   })
  
});

app.get('/repos', function (req, res) {
  console.log('I have reached the server ====================',req.body)
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send('hello')
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

