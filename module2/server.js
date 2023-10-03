const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");


app.use(cors());

app.use("/",(req, res, next)=>{
    res.send("hello world");
});

const PORT =
app.set("PORT",8000 || process.env.PORT );
http.createServer(app).listen(app.get("PORT"),"129.0.0.7");