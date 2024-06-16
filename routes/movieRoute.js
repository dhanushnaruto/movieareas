import express from 'express'
import { movieIndex,movieCreate } from '../controllers/main.controller.js';

const router = express.Router();

router.get('/', movieIndex)

router.post('/', movieCreate)

export default router