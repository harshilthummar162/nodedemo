const app = require("express")();

app.get("/", (req, res) => res.send("Welcome to cg_patel APIs!"));
app.use("/user", require("./user.routes.js"));
// app.use("/status", require("./status.routes"))

module.exports = app;