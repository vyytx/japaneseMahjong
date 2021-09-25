const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send(__dirname + 'index.html');
});

app.post("/newGame", (req, res) => {
	
});

app.post("/joinGame", (req, res) => {

});

app.listen(3000, () => {
	console.log("run at *:3000");
});