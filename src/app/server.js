"use strict";
const express = require("express");
const compression = require("compression");

const _app_folder = 'dist/application';

const app = express();
app.use(compression());

// ---- START UP THE NODE SERVER  ----
app.listen(process.env.PORT || 4200, function(){
  console.log("Node app is running at localhost:" + app.get('port'));
});
