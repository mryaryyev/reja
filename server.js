console.log('Web Serverni boshlash');
const express = require("express");
const app = express(); // expressning app Objectni yuboradi
const http = require('http');
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:" ,err);
    } else {
        user = JSON.parse(data)
    }
});

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

app.post('/create-item', (req, res) => {
    //console.log(req.body);
    //console.log(req);
    //res.json({ test: "success" });
});

app.get('/author', (req, res) => {
    res.render('author', {user: user});
});

app.get("/", function (req, res) {
    res.render("reja");
});


const server = http.createServer(app); //serverni http orqali qurdik
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});