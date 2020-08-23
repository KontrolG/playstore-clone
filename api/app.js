const express = require("express");
const usersRoutes = require("./routes/usersRoutes");

const app = express();

app.use(express.json({ type: "application/json" }));

const apiRootUrl = "/api";
app.use(apiRootUrl + "/users", usersRoutes);

module.exports = app;
