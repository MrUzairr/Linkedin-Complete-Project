var MongoClient = require('mongodb').MongoClient;
const mongo_url = require('./../constants/constants.js').MONGO_URI;
var _db;

const connectMongo = async function(){
    try{
        const db = await MongoClient.connect(mongo_url, {
        });
        _db = db;
        return Promise.resolve(db);
    }catch(error){
        console.error("Error connecting to MongoDB:", error);
        return Promise.reject("Could not connect to MongoDB Atlas in mongoconnectiondb.js");
    }
};

module.exports = {connectMongo};



// var MongoClient = require('mongodb').MongoClient;
// const mongo_url = require('./../constants/constants.js').MONGO_URI;
// var _db;

// const connectMongo = async function(){
//     try{
//         const db = await MongoClient.connect(mongo_url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         _db = db;
//         return Promise.resolve(db);
//     }catch(error){
//         console.error("Error connecting to MongoDB:", error);
//         return Promise.reject("Could not connect to MongoDB Atlas in mongoconnectiondb.js");
//     }
// };

// module.exports = {connectMongo};





// var MongoClient = require('mongodb').MongoClient;
// const mongo_url = require('./../constants/constants.js').MONGO_URI;
// var _db;

// const connectMongo = async function(){
//     try{
//         const db = await MongoClient.connect(mongo_url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         _db = db;
//         return Promise.resolve(db);
//     }catch(error){
//         return Promise.reject("Could not connect to MongoDB Atlas in mongoconnectiondb.js");
//     }
// };

// module.exports = {connectMongo};


// var MongoClient = require('mongodb').MongoClient;
// const mongo_url = require('./../constants/constants.js').MONGO_URI;
// var _db;

// const connectMongo = async function(){
//     try{
//         const db = await MongoClient.connect(mongo_url,{useNewUrlParser:true});
//         _db = db
//         return Promise.resolve(db);
//     }catch(error){
//         return Promise.reject("Could not connect to MLAB Mongo db in mongoconnectiondb.js");
//     }
// }



// module.exports = {connectMongo};
