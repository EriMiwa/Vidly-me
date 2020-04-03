const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config();

const uri = process.env.ATLAS_URI;

module.exports = function() {
  // const db = config.get('db');
  // mongoose.connect(db)
  mongoose.connect(uri)
    .then(() => winston.info(`Connected to ${uri}...`));
}
