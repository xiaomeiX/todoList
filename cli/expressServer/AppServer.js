"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var server = new App_1.App().express;
server.listen(8080);
console.log("Server running in port 8080");
