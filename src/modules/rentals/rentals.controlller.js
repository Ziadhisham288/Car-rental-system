import { ObjectId } from "mongodb";
import database from "../../../db/connectionDB.js";

export const createRental = async (req, res) => {
  const { carID, customerID, rentalStart, rentalEnd } = req.body;

  const car = await database.collection("cars").findOne({
    _id: new ObjectId(carID),
  });

  if (car.isRented == true) {
    return res.json({ message: "Car is already rented" });
  }

  const rental = await database.collection("rentals").insertOne({
    carID: new ObjectId(carID),
    customerID: new ObjectId(customerID),
    rentalStart,
    rentalEnd,
  });

  await database.collection("cars").updateOne(
    {
      _id: new ObjectId(carID),
    },
    {
      $set: {
        isRented: true,
      },
    }
  );

  res.json({ message: "Rental made successfuly", rental: rental });
};

export const updateRental = async (req, res) => {
  const { id } = req.params;
  const { rentalStart, rentalEnd } = req.body;

  const rental = await database.collection("rentals").updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        rentalStart,
        rentalEnd,
      },
    }
  );

  res.json({ message: "Rental update done", update: rental });
};

export const deleteRental = async (req, res) => {
  const { id } = req.params;

  const rental = await database.collection("rentals").findOne({
    _id: new ObjectId(id),
  });

  const carID = rental.carID;

  const car = await database.collection("cars").updateOne(
    {
      _id: new ObjectId(carID),
    },
    {
      $set: {
        isRented: false,
      },
    }
  );

  await database.collection("rentals").deleteOne({
    _id: new ObjectId(id),
  });

  res.json({ message: "Rental deleted successfuly" });
};

export const getAllRentals = async (req, res) => {
  const rentals = await database.collection("rentals").find().toArray();

  res.json({ message: "All rentals info", rentals: rentals });
};

export const getSpecificRental = async (req, res) => {
  const { id } = req.params;
  const rental = await database.collection("rentals").findOne({
    _id: new ObjectId(id),
  });

  res.json({ message: "All rentals info", rental: rental });
};
