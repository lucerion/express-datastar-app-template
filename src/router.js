import { ApplicationController } from './controllers/index.js';
import { Router } from 'express';

const router = Router();

router.get('/', ApplicationController.index);

export default router;
