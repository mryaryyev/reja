console.log("Web Serverni boshlash");
const express = require("express");
const app = express(); // expressning app Objectni yuboradi
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDB choqirish
const client = require("./server");
const db = client.db(); // DB qalom

const mongodb = require("mongodb");

// app objectida 4 ta bosgichga bolamiz

// 1: Kirish code
app.use(express.static("public")); // public folder ochik boladi clientlarga/koroladi
app.use(express.json()); //  REST API uchun hizmat qiladi, kirip kelyatgan json formatdaki datani Object holatiga bizga ogurip beradi
app.use(express.urlencoded({ extended: true })); // Traditional API uchun hizmat qiladoi, html'dan traditional request form shakli bor, formdan biror narsani post qilsak, bizning express serverimiz qabul qiloladi

// 2: Sesssion code

// 3: Views code
// bssr - yoli tanladik, backend'de view yasaymiz
// npm i ejs -> install qilamiz, EJS = Embedded Javascript, ejs orqali backend'da frontend'ni yosaymiz
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
/*
API request
 - TYPE > 
    * Traditional API -> res.send, res.end
    * Rest API -> res.json
    * GraphQL API
 - METHOD > GET / POST
 - STRUCTURE > header / body 
*/

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  console.log("STEP2: FRONTENDdan BACKENDga kirish");

  //console.log(req.body);
  const new_reja = req.body.reja;
  console.log(new_reja);
  console.log("STEP3: BACKENDdan DATABASEga jonash"); //FRONTENDdan kelgan new_reja molumot bilan DATABASEga jonash

  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log("STEP4: DATABASEdan BACKENDga qaytish"); //DATABASEga molumotni yozip qaytdi

    console.log(data.ops);
    res.json(data.ops[0]);
    // if(err) {
    //     console.log(err);
    //     res.end("something went wrong");
    // } else {
    console.log("STEP5: BACKENDdan FRONTENDga response berish");
    //     res.end("successfully added");
    // }
  });
  //console.log(req);
  //res.json({ test: "success" });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  console.log(id);
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    },
  );
  //res.end("done");
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  console.log("STEP2: FRONTENDdan BACKENDga kirish");

  console.log("STEP3: BACKENDdan DATABASEga jonash");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      //ARRAY kornishda DATAni beryapti
      // mongoDB bilan CRUD operatsiyani amalga oshiramiz
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log("STEP4: DATABASEdan BACKENDga qaytish");
        console.log(data); // DATABASEdan kelgan malumot

        console.log("STEP5: BACKENDdan FRONTENDga response berish");
        // 1.json formatta jonatip REACT orqali HTML kurish
        //res.json(data); //REST API orqali jonattik FRONTENDga

        // 2.BACKEND'da EJS orqali HTML kurish, keyin FRONTENDga jonatish
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
