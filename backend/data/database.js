const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let mongodbUrl = 'mongodb://127.0.0.1:27017'

if(process.env.MONGODB_URI){
  mongodbUrl = process.env.MONGODB_URI;
}

let database;

async function initDb() {
  const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
  database = client.db('second-api');
}

function getDb() {
  if (!database) {
    throw new Error('Database not connected!');
  }

  return database;
}

module.exports = {
  initDb: initDb,
  getDb: getDb
};