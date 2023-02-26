const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb://127.0.0.1:27017/";
const DATABASE_NAME = "Players";

async function mongodb() {
  let client = await MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error) => {
    if(error) {
      throw error;
    }
  });

  database = client.db(DATABASE_NAME);
  collection = database.collection("personnel");

  return collection
};

module.exports = {
  mongodb
}
