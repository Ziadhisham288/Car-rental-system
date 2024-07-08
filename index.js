import express from 'express';
import customerRouter from './src/modules/customers/customers.routes.js';
import carsRouter from './src/modules/cars/cars.routes.js';
import rentalsRouter from './src/modules/rentals/rentals.routes.js';
import specialRouter from './src/modules/specialEndPoints/special.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json())
app.use('/customers', customerRouter)
app.use('/cars', carsRouter)
app.use('/rentals', rentalsRouter)
app.use('/special', specialRouter)


app.listen(PORT , () => {
  console.log(`App is running on port ${PORT}`)
})

