'use strict';

// Start up DB Server
const { db } = require('./src/auth/models/index.js');
require('dotenv').config();

const PORT = process.env.PORT || 3002;

db.sync()
  .then(() => {

    // Start the web server
    require('./src/server.js').start(process.env.PORT);
  });

