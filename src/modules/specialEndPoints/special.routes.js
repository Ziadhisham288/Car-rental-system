import { Router } from "express";
import { getAvailableCarsByModel, getAvailableCarsOrRentedCars, getEitherRentedOrSpecificModel, getModelsByQuery } from "./special.controller.js";

const specialRouter = Router()

specialRouter.get('/' , getModelsByQuery)
specialRouter.get('/availableByModel' , getAvailableCarsByModel)
specialRouter.get('/eitherRentedOrSpecificModel' , getEitherRentedOrSpecificModel)
specialRouter.get('/availableCarsOrRentedCars' , getAvailableCarsOrRentedCars)


export default specialRouter;