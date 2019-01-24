const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://127.0.0.1/fetcher');
mongoose.connect('mongodb://127.0.0.1/fetcher', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

let repoSchema = new mongoose.Schema({
  name: String,
  html_url: String,
  description: String,
  forks_count: Number,
  watchers: Number,
  size: Number

});

repoSchema.index({"name": 1}, {unique: true});

let Repo = mongoose.model('Repo', repoSchema);


let save = (inputRepo) => {

  var container = [];

  for (let i = 0; i < inputRepo.length; i++) {
    var repo = new Repo({
      name: inputRepo[i].name,
      html_url: inputRepo[i].html_url,
      desciption: inputRepo[i].desciption,
      forks_count: inputRepo[i].forks_count,
      watchers: inputRepo[i].watchers,
      size: inputRepo[i].size,
    })

    container.push(repo);
    
  }

  return new Promise((resolve, reject) => {
    Repo.insertMany(container, function(err, docs) { 
      if (err) {
        reject(err)
      } else {
        resolve(docs)
      }
    })
  })
 
    
}

let getTopResults = () =>{
  
  return new Promise ((resolve, reject) => {
    Repo.find({}, null, {sort: {forks_count: -1}, limit:25}, (err, docs) => {
      if (err) {
        reject(err);
      }
      resolve(docs);
    })
  })
 

}

module.exports.save = save;
module.exports.getTopResults = getTopResults;