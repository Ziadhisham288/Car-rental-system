import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri)

client.connect().then(() => {
  console.log("MongoDB connected succesfully")
}).catch(err => {
  console.log(err)
})

const database = client.db("car-rental")


export default database;