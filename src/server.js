import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import {connectDb} from './database/database.config.js'
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());

connectDb()
.then(() => {
  const port = process.env.PORT || 8080
  app.listen(port, () => console.log('connected to db and server is running'))
})
.catch((error) => {
  console.log(error)
});

app.use('/my-shop', router);

  