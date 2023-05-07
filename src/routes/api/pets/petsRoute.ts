import express from 'express';
import {addPet, getPetList} from '../../../controller/petsController';

const petsRouter = express.Router();

petsRouter.get('/list', getPetList);

petsRouter.post('/add', addPet);

export default petsRouter;
