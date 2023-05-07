import express from 'express';
import petsRouter from './pets/petsRoute';

const apiRouter = express.Router();

apiRouter.use('/pets', [petsRouter]);

export default apiRouter;
