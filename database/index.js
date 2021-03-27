const mongoose = require('mongoose');
const env = require(`../environment/${process.env.NODE_ENV}`);

exports.clientPromise = mongoose
  .connect(env.dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));
