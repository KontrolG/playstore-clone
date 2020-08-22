const app = require("./app");

const port = process.env.PORT || 7777;

const server = app.listen(port);

const logSuccessListening = () => console.log(`App listening at port ${port}`);

server.on("listening", logSuccessListening);
