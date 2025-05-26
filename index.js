const http = require("http");
require("dotenv").config();
const fs = require("fs");

const server = http.createServer((req, res) => {
    if ((req.url == "/")) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./index.html", (err, data) => {
            if (err) throw new Error();
            res.write(data);
            res.end();
        });
    } else if ((req.url == "/about")) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./about.html", (err, data) => {
            if (err) throw new Error();
            res.write(data);
            res.end();
        });
    } else if ((req.url == "/contact")) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./contactme.html", (err, data) => {
            if (err) throw new Error();
            res.write(data);
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./404.html", (err, data) => {
            if (err) throw new Error();
            res.write(data);
            res.end();
        });
    }
});

server.listen(process.env.PORT, function () {
    console.log("Server Started bayy!!");
});
