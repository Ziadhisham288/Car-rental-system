import { Router } from "express";
import {deleteCustomer, getAllCustomers, getSpecificCustomer, login, signup, updateCustomerInfo } from "./customers.controller.js";

const customerRouter = Router()

customerRouter.get('/', getAllCustomers)
customerRouter.get('/:id', getSpecificCustomer)
customerRouter.patch('/:id', updateCustomerInfo)
customerRouter.delete('/:id', deleteCustomer)
customerRouter.post('/signup', signup)
customerRouter.post('/login', login)

export default customerRouter;