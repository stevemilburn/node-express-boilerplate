require('dotenv').config();

var appRoot = require('app-root-path');
var express = require('express');
var logger = require(appRoot + '/server/config/logger');

var app = express();

require(appRoot + '/server/config/express')(app);

app.listen(process.env.PORT, function() {
  logger.info('Express server listening on port ' + process.env.PORT);
});

