import mongoose from "mongoose";

const connectDB = async () => {
  const URI = process.env.NODE_ENV==='development'? process.env.MONGO_URI_ATLAS : process.env.MONGO_URI;;
  try {
    await mongoose.connect(URI);
    console.log("MongoDB is Connected Sucessfully");
  } catch (error) {
    console.log("ERROR", error);
    process.exit(1);
  }
};

export default connectDB;
