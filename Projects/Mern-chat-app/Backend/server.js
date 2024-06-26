const express = require('express');
const { chats } = require('./Data/data');
const dotenv = require('dotenv');
const cors = require('cors');


let app = express();

app.use(cors());
dotenv.config();

app.get('/', (req, res) => {
    res.send("api is running");
})

app.get("/api/chats", (req, res) => {
    res.send(chats)
})

app.get("/api/chats/:id", (req, res) => {
    console.log(req.params.id);
    let reqId = req.params.id;
    let chat = chats.find(c => c._id == reqId);
    res.send(chat)
})

let PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started at ${PORT}`));