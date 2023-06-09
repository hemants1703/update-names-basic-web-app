const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

//  global variable
var newName = "Enter a name below and push POST!";

app.get("/", (req, res) => {
    res.render("index", { postName: newName });
});

app.post("/", (req, res) => {
    console.log(req.body);
    newName = req.body.name;
    res.redirect("/");
});

app.listen(port, () => console.log(`Express server listening at http://localhost:${port}/`));