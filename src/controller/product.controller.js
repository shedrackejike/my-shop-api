import { products } from "../data/products.js";

export const getAllProducts = (req, res, next) => {
    res.json(products)
}