const http = require('http');
const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://rovshen:wHZFt7bMDXCPM0sG@cluster0.3nspg5e.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(connectionString, {
    //useNewUrlParsel: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;
        //console.log(client);
        const app = require("./app");
        const server = http.createServer(app); //serverni http orqali qurdik
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });

    }
});


