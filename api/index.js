import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'

dotenv.config();
    // conexión a la base de datos
mongoose
    .connect(
       process.env.MONGO
    )
    .then( () => {
        console.log('MongoDB is connected succesfully'
    )})
    .catch((err)=>{
        console.error(err)
    });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!')
})


app.use('/api/user', userRoutes)


