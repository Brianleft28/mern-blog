import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

    // conexión a la base de datos
mongoose
    .connect(
       process.env.MONGO
    )
    .then( () => {
        console.log('The database is connected succesfully'
    )})
    
    // si logro autenticar en mongoDb, que se imprima este mensaje con un metodo .then)


const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!')
})

