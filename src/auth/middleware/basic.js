'use strict';

const base64 = require('base-64');
const { user } = require('../models/index.js');

module.exports = async (req, res, next) => {
  console.log('username:', req.headers.authorization);
  if (!req.headers.authorization) { 
    return _authError(); 
  }

  let basic = req.headers.authorization;
  let authStr = basic.split(' ')[1];
  let [username, password] = base64.decode(authStr).split(':');
  console.log('username:', username);
  console.log('password:', password);

  try {
    req.user = await user.authenticateBasic(username, password);
    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }

};

