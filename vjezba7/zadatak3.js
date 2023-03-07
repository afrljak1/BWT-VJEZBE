const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.use(express.static("public"));
app.get("/zadatak3.html", function(req,res){
    res.sendFile(__dirname+"/public"+"zadatak3.html");
});

app.get("/", function(req,res){
    res.sendFile(__dirname+"public"+"zadatak3.html");
});

app.listen(8080);

