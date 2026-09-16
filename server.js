require("dotenv").config();
const http = require("http");
const mongodb = require("mongodb"); // bizi database bilan connect qiladi

let db;
const connectionString = process.env.MONGODB_URI;

  // TCP - Transmission Control Protocol (backend vc database doimi boglanish)
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client; //boglanish
      //console.log(client);
      const app = require("./app");
      const server = http.createServer(app); //serverni http orqali qurdik
      let PORT = 3006;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
