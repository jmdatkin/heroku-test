import express from 'express';
import { createServer } from 'http';

const app = express();

const server = createServer(app);

app.get('/', (req,res) => {
	res.write("Hello world!", 200);
});

server.listen(3000, () => {
	console.log("server is listening");
});
