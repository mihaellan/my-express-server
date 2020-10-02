const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
})

app.get("/contact", function(req, res){
    res.send("Contact me at mihaela.nikolova@abv.bg");
})

app.get("/about", function(req,res){
    res.send("Hello, my name is Mihaela and I am a Web Developer.")
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});