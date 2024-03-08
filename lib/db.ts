import mongoose from "mongoose";

const connectDb = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Please add your Mongo URI to .env.local");
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

export default connectDb;
