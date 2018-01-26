//Create mock datas and write them to the database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/heroes";
var mock = require('./data.mock.js');

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("heroes");

    dbo.collection("heros").count(function (err, count) {
        if (!err && count === 0) {
            dbo.collection("heros").insertOne(mock.Richard, function (err, res) {
                if (err) throw err;
                console.log("Richard Stallman added in the hero db");

            });
            dbo.collection("heros").insertOne(mock.Linus, function (err, res) {
                if (err) throw err;
                console.log("Linus Torvald added in the hero db");
            });
        }
    });
});