const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const routes = require('./routes')

require("./db.js");

const server = express();

server.name = "API";
server.use(cors())
server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use("/", routes);


// Error catching endware.
// server.use((err, req, res ) => {
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

module.exports = server;