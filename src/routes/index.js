import { Router } from 'express';
import productRouter from './product.route.js';

const router = Router();

router.get('/health-check', (req, res) => res.send('OK'));
router.use(productRouter);

export default router;