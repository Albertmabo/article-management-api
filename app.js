const express = require("express");
const app = express();
const articlesRouter = require("./src/Routes/articles");

app.use("/api/v1/articles", articlesRouter);
module.exports = app;
