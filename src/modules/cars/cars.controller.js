import { ObjectId } from "mongodb";
import database from "../../../db/connectionDB.js";

export const addCar = async (req, res) => {
  const { name, model, isRented } = req.body;
  const data = await database.collection("cars").insertOne({
    name,
    model,
    isRented,
  });
  res.json({ message: "Car added succesfully", data });
};

export const getAllCars = async (req, res) => {
  const data = await database.collection("cars").find().toArray();
  res.json({ message: "All cars", cars: data });
};

export const getSpecificCar = async (req, res) => {
  const { id } = req.params;
  const data = await database.collection("cars").findOne({
    _id: new ObjectId(id),
  });
  res.json({ message: "Car details", car: data });
};

export const updateCar = async (req, res) => {
  const { id } = req.params;
  const { name, model } = req.body;
  const data = await database.collection("cars").updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        name,
        model
      },
    }
  );
  res.json({ message: "Updated car statues", data });
};

export const deleteCar = async (req, res) => {
  const { id } = req.params;
  const data = await database.collection("cars").deleteOne({
    _id: new ObjectId(id),
  });

  res.json({ message: "Deleted car", data });
};
