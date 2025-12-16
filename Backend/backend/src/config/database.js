import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(`\n data base initiated✅
            ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`connection falied to MONGO DB mongoose is crying`, error);
    process.exit(1);
  }
};

export default connectDB;
