const express = require('express');

var db = require('../database/index')

const getReposByUsername = require('../helpers/github').getReposByUsername;

let app = express();

const parser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));

app.use(parser.json());

app.post('/repos', function (req, res) {

  var userName = req.body.name;
  getReposByUsername(userName)
   .then((result) => {
    db.save(result)
    .then(() => {
      res.end()
    })
    
   })
   .catch((e) => {
     console.log(e);
   })
  
});

//-----------------------------------------------------------------------

app.get('/top', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  //create function that get top 25 results within db module, bring it here and send back to user;
  console.log("I'm getting now")
  db.getTopResults()
  .then((topResults) => {
    res.send(topResults);
  })
  .catch((err) => {
    console.log(err);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

