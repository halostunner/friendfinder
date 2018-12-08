// Dependencies
let express = require("express");
let path = require("path");
let bodyParser = require('body-parser')
 

//Express App

let app = express();
let PORT = process.env.PORT || 8080;

//Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);



// Listener: start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });