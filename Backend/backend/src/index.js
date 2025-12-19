import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

dotenv.config({
  path: "./.env",
});

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));

  } catch (error) {
    console.log("MongoDb connection failed!!!...", error);
  }
};

startServer();
