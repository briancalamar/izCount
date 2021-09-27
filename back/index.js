const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const api = process.env.API || "http://localhost:3001";
const front = process.env.FRONT || "http://localhost:3000";
require("dotenv").config();
/**
 * ****************************************************************
 * Agregar un process.env.PORT y agregarlo en el .env PORT = 3001 *
 * ************************************************************** */

conn.sync({ force: false }).then(() => {

    server.listen(process.env.PORT, async () => {
        console.log(`listening at PORT ${process.env.PORT}`);

    });
});