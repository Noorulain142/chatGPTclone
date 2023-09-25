const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const colors = require('colors')
const dotenv = require('dotenv')

//dotenv
dotenv.config()

//rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use((bodyParser.urlencoded({extended:false})))
app.use(morgan('dev'))

//listen server
const PORT = 3000 || process.env.PORT
app.listen(3000,()=>{
  console.log(`server running in ${process.env.DEV_MODE} mode at port ${PORT}`.bgCyan.white)
})
