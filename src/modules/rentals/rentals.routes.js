import { Router } from "express";
import { createRental, deleteRental, getAllRentals, getSpecificRental, updateRental } from "./rentals.controlller.js";


const rentalsRouter = Router()

rentalsRouter.get('/', getAllRentals)
rentalsRouter.get('/:id', getSpecificRental)
rentalsRouter.post('/', createRental)
rentalsRouter.patch('/:id', updateRental)
rentalsRouter.delete('/:id', deleteRental)



export default rentalsRouter;