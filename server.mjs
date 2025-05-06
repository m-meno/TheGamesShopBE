//Imports
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db/conn.mjs"
import cors from "cors";
import globalError from "./middleware/globalError.mjs";
import userRoutes from "./routes/userRoutes.mjs"


//Setup
connectDB();
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();


//Middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());


//Routes
app.use('/api/users', userRoutes);

//Error Handling Middleware
app.use(globalError);

//Listener
app.listen(PORT, ()=> {
    console.log(`Server Running on Port: ${PORT}.`)
});


