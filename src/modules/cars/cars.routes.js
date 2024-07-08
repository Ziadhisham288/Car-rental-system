import { Router } from "express";
import { addCar, deleteCar, getAllCars, getSpecificCar, updateCar } from "./cars.controller.js";

const carsRouter = Router()

carsRouter.post('/', addCar)
carsRouter.get('/', getAllCars)
carsRouter.get('/:id', getSpecificCar)
carsRouter.patch('/:id', updateCar)
carsRouter.delete('/:id', deleteCar)

export default carsRouter;