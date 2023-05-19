import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import mongoose from "mongoose"
import { products } from "./data/products.js";

const app = express();
app.use(express.json());
app.use(cors());



app.use('/my-shop', router);


app.get("/", (req, res) =>{
    res.send("Welcome to our online shop ApI...")
})

app.get("/products", (req, res) =>{
    res.send(products)
})

const dbURL = "mongodb://127.0.0.1:27017/OnlineShop";
mongoose.connect(dbURL).then((result) => {

  console.log("connected to db");

})
.catch((err) => {
  console.log(err);
})

app.listen(8080, () => console.log('server is up and runing'))