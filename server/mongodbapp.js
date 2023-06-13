const { log, error } = require("console");
const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'
const dbName = "fruitDB";
// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("Connected succesfuly to server");
  const db = client.db(dbName);
  const collection = ddb.collection("fruits");
  const insertResult = await collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "So Heathly",
    },
    {
      name: "Orange",
      score: 7,
      review: "Good for Heath",
    },
    {
      name: "Banana",
      score: 10,
      review: "Awesome Taste",
    },
  ]);
  console.log("Inserted Document =>", insertResult);
  const findResult = await collection.find().toArray();
  console.log("Found Document =>", findResult);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    client.close();
  });
