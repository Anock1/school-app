import { configDotenv } from "dotenv";
import mongoose from 'mongoose';

const connectDB = async () => {
try {  
    // Use env var if available; fallback to local test DB  
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test-db';  
    await mongoose.connect(mongoURI);  
    console.log('Connected to cloud ');  
  } catch (err) {  
    console.error('MongoDB connection error:', err.message);  
    process.exit(1); // Exit on failure  
  }  

};

export default connectDB;