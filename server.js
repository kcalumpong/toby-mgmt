require("dotenv").config();
const express = require("express");
const db = require("./models");
const routes = require("./routes");
const app = express();
const fileUpload = require("express-fileupload");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

let syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Start the API server
db.sequelize.sync(syncOptions).then( () => {
    app.listen(PORT, function() {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});

module.exports = app;
