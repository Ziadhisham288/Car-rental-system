import database from "../../../db/connectionDB.js";

export const getModelsByQuery = async (req, res) => {
  const { models } = req.query;
  const modelsArray = models.split(",");

  const cars = await database
    .collection("cars")
    .find({
      model: {
        $in: modelsArray,
      },
    })
    .toArray();

  res.json({ message: "Models from query", cars: cars });
};

export const getAvailableCarsByModel = async (req, res) => {
  const { model } = req.body;

  const cars = await database
    .collection("cars")
    .find({
      model,
      isRented: false,
    })
    .toArray();

  res.json({ message: `Available cars of ${model}`, cars: cars });
};

export const getEitherRentedOrSpecificModel = async (req, res) => {
  const { model } = req.query;

  let cars = await database
    .collection("cars")
    .find({
      model,
    })
    .toArray();

  if (cars.length == 0) {
    cars = await database
      .collection("cars")
      .find({
        isRented: true,
      })
      .toArray();
  }

  res.json({ message: `Rented cars`, cars: cars });
};

export const getAvailableCarsOrRentedCars = async (req, res) => {
  const { models } = req.query;
  const modelsArray = models.split(",");
  let word;

  let cars = await database
    .collection("cars")
    .find({
      model: {
        $in: modelsArray,
      },
      isRented: false,
    })
    .toArray();
  
    word = "Available";

  if (cars.length == 0) {
    cars = await database.collection("cars").find({
      model: {
        $in: modelsArray,
      },
      isRented: true,
    }).toArray()
    word = "Rented"
  }

  res.json({ message: `${word} cars`, cars: cars });

};
