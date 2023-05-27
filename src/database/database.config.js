import mongoose from "mongoose";

const dbURL = "mongodb://127.0.0.1:27017/OnlineShop";

export const connectDb = async () => {
      try {
        await mongoose.connect(dbURL);
        console.log('connected!')
      } catch (error) {
        console.log(error)
      }
}