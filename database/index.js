const mongoose = require('mongoose');
const env = require(`../environment/${ process.env.NODE_ENV }`);

mongoose.connect(env.dbUrl, { 
  useNewUrlParser: true,
  useCreateIndex: true
}).then( () => console.log('connexion db ok !')).catch( err => console.log(err));