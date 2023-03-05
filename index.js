const express = require("express")
const cors = require("cors")
const dotevn = require("dotenv")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const authRoute = require('./routes/auth')
const userRoute = require("./routes/user")

const PORT = 8080
dotevn.config()
const app = express()


mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connected!");
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())

//ROUTE
app.use('/v1', authRoute)
app.use('/v1/user', userRoute)

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
})


//AUTHENTICATION

//AUTHORIZATION