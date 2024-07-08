import { ObjectId } from "mongodb"
import database from "../../../db/connectionDB.js"


export const signup = async (req, res) => {
  const {name , password , email , phone} = req.body
  const data = await database.collection("customers").insertOne({name, password, email, phone})
  res.json({message : "done", addedCustomer : data})
}

export const login = async (req, res) => {
  const { password , email } = req.body
  const data = await database.collection("customers").findOne({ password, email})
  res.json({message : "done", customer: data})
}

export const getAllCustomers = async (req, res) => {
  const data = await database.collection("customers").find().toArray()
  res.json({message : "All Customers" , Customers : data})
}

export const getSpecificCustomer = async (req, res) => {
  const {id} = req.params;
  const data = await database.collection("customers").findOne({
    _id : new ObjectId(id)
  })
  res.json({message : "Customer Data" , Customer : data})
}


export const updateCustomerInfo = async (req, res) => {
  const {id} = req.params;
  const {name} = req.body;
  const data = await database.collection("customers").updateOne({
    _id : new ObjectId(id)
  }, {
    $set: {
      name
    }
  })
  res.json({message : "Succesfully updated data", data})
}

export const deleteCustomer  = async (req, res) => {
  const {id} = req.params;
  const data = await database.collection("customers").deleteOne({
    _id : new ObjectId(id)
  })
  res.json({message : "Succesfully deleted user", data})
}