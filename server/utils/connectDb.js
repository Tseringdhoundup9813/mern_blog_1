import mongoose from "mongoose";

export default async function connectDb() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("successfully connected to database");
  } catch (err) {
    console.log(err.name, err.message);
  }
}
