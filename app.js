require('dotenv').config();

var appRoot = require('app-root-path');
var express = require('express');
var db = require(appRoot + '/server/db');

var app = express();

require(appRoot + '/server/config/express')(app);

db.sequelize
  .sync()
  .then(function () {
    app.listen(process.env.PORT, function () {
      console.log('Express server listening on port ' + process.env.PORT);
    });
  }).catch(function (e) {
    throw new Error(e);
  });

