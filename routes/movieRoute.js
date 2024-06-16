import express from 'express'
import { movieIndex,movieCreate,movieUpdate} from '../controllers/main.controller.js';

const router = express.Router();

router.get('/', movieIndex)

router.post('/', movieCreate)

router.put('/:id',movieUpdate)

export default router