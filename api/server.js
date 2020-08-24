require("dotenv").config({ path: "./config/my-config.env" });
const app = require("./app");
const connectDatabase = require("./database");

const port = process.env.PORT || 7777;

connectDatabase();

const server = app.listen(port);

const logSuccessListening = () => console.log(`App listening at port ${port}`);

server.on("listening", logSuccessListening);
