import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'

import connectDB from './config/db.js'

const __dirname = path.resolve()

//////////////////////////////////////////////////
// Utilize environment variables

dotenv.config()

//////////////////////////////////////////////////
// Connect to database

connectDB()

//////////////////////////////////////////////////
// Initialize server

const app = express()

// Use morgan
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

// Middleware for using json in a request body
app.use(express.json())

app.get('/', (req, res) => {
	res.send('API is running....')
})

//////////////////////////////////////////////////
// Start listening at port 5000
const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow
			.bold
	),
	console.log('Niki du geile Sau')
)
