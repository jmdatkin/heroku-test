//.import express from 'express';
const express = require('express');

const app = express();

app.use(express.static('/public'));

app.set('view-engine', 'ejs');

app.get('/', (req,res) => {
//	res.send("Hello world!", 200);
	res.render('index');
});

app.get("/dogs", (req,res) => {

	res.send("Dogs",200);
});

app.listen(3000, () => {
	console.log("server is listening");
});
