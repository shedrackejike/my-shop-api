import { Router } from 'express';
import productRouter from './product.route.js';

const router = Router();

router.use(productRouter);

export default router;