const express = require("express");
const bodyParser = require("body-parser");

const { port } = require("./config/config");

let app = express();

const routes = require("./routes/router");
app.use("/", routes);

app.listen(port, function() {
  console.log(`App listening on port ${port}`);
});
