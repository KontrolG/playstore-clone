const express = require("express");
const usersRoutes = require("./routes/usersRoutes");
const rolesRoutes = require("./routes/rolesRoutes");

const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json({ type: "application/json" }));

const apiRootUrl = "/api";
app.use(apiRootUrl + "/users", usersRoutes);
app.use(apiRootUrl + "/roles", rolesRoutes);

app.use(globalErrorHandler);

module.exports = app;
