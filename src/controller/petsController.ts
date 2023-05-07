import {Request, Response} from 'express';
import PetCard from '../types/PetCard';
import {db} from '../services/firebase-admin';
import PetUpload from '../types/PetUpload';
import {uploadImageStorage, uploadPet} from '../services/petServices';

export const getPetList = async (req: Request, res: Response) => {
  const petsQuery = await db.collection('pets').get();
  const pets: PetCard[] = [];
  petsQuery.forEach(pet => {
    const petData = pet.data();
    pets.push({
      id: pet.id,
      name: petData.name,
      age: petData.age,
      breed: petData.breed,
      description: petData.description ?? '',
      type: petData.type,
      gender: petData.gender,
      image: petData.image,
      distanceMeter: petData.distanceMeter,
    });
  });
  res.json(pets);
};

export const addPet = async (req: Request, res: Response) => {
  const pet: PetUpload = req.body;

  uploadImageStorage(pet.image, pet.name)
    .then(url => {
      uploadPet(pet, url)
        .then(msg => {
          res.json({message: msg});
        })
        .catch(error => {
          res.json({message: error});
        });
    })
    .catch(error => {
      res.json({message: error});
    });
};
