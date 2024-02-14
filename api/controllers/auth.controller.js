import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"

// funcion que controla el registro 
export const signup = async (req, res, next) =>{ 
    const { username, email, password } = req.body

        // valida que los datos ingresados existan y no sean empty strings
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'))
    }

    // encriptando la password
    const hashedPassword = bcryptjs.hashSync(password, 10)

    // creo el nuevo usuario
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });
    // intento guardarlo en la base de datos con un try catch para manejar los errores, 
    try {
        await newUser.save() 
        res.json('Sign up succesful')
    } catch (error) {
        next(error)
    }

}