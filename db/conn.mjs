import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectionStr = process.env.mongoURI || '';

async function connectDB(){
    try {
        await mongoose.connect(connectionStr);
        console.log(`MongoDB connected...`);
    }   catch(err) {
        console.error(err)
        process.exit();
    }
};

export default connectDB;