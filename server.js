console.log('Web Serverni boshlash');
const express = require("express");
const app = express(); // expressning app Objectni yuboradi
const http = require('http');

// app objectida 4 ta bosgichga bolamiz

// 1: Kirish code
app.use(express.static("public")); // public folder ochik boladi clientlarga/koroladi
app.use(express.json()); // kirip kelyatgan json formatdaki datani Object holatiga bizga ogurip beradi
app.use(express.urlencoded({extended: true})); // html'dan traditional request form shakli bor, formdan biror narsani post qilsak, bizning express serverimiz qabul qiloladi

// 2: Sesssion code

// 3: Views code
// bssr - yoli tanladik, backend'de view yasaymiz
// npm i ejs -> install qilamiz, EJS = Embedded Javascript, ejs orqali backend'da frontend'ni yosaymiz
app.set("views", "views");
app.set("view engine", "ejs");


// 4: Routing code
app.get("/", function(req, res) {
    res.end(`<h1>HELLO WORLD by Ryan</h1>`);
});
app.get("/greeting", function(req, res) {
    res.end(`<h1>I am web developer</h1>`);
});
app.get("/gift", function(req, res) {
    res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app); //serverni http orqali qurdik
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});