import { Router } from 'express';
import { getAllProducts } from '../controller/index.js';

const productRouter = Router();

productRouter.get('/products', getAllProducts);
export default productRouter;