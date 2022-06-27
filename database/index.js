const mongoose = require('mongoose');
const env = require(`../environment/${process.env.NODE_ENV}`);

exports.clientPromise = mongoose
  .connect(env.dbUrl)
  .catch((err) => console.log(err));
