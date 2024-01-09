import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const databaseData = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // const databaseData = await mongoose.connect(
    //   `mongodb+srv://ravi08371:ravi08371@cluster0.agh6ejr.mongodb.net/${DB_NAME}`
    // );
    console.log("database data", databaseData.connection.host);
  } catch (error) {
    console.log("Error connecting to the database: ", error);
    process.exit(1);
  }
};

export default connectDB;
