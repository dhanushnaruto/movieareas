import express from 'express'
import { movieIndex,movieCreate,movieUpdate,deletemovie } from '../controllers/main.controller.js';

const router = express.Router();

router.get('/', movieIndex)

router.post('/', movieCreate)

router.put('/:id',movieUpdate)

router.delete('/:id',deletemovie)

export default router