import PetCard from '../types/PetCard';
import {PetType} from '../types/PetType';
import PetUpload from '../types/PetUpload';
import {db, storage} from './firebase-admin';
import type {File} from '@google-cloud/storage/build/src/file';

export const uploadImageStorage = async (
  image: BinaryType,
  name: string,
): Promise<string> => {
  const currentDateTimestamp = new Date();

  const storageRef = storage
    .bucket('gs://little-paw-f999b.appspot.com/')
    .file(
      `pets/${name}-${currentDateTimestamp
        .toLocaleString('es-ES')
        .replace(/\//g, '-')}.jpg`,
    );

  return new Promise((resolve, reject) => {
    storageRef
      .save(Buffer.from(image, 'base64'), {
        metadata: {contentType: 'image/jpeg'},
      })
      .then(() => {
        getImageUrl(storageRef)
          .then(url => {
            resolve(url);
          })
          .catch(error => {
            reject(error);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getImageUrl = async (storageRef: File): Promise<string> => {
  const currentDateTimestamp = new Date();
  const tomorrowDate = new Date(
    currentDateTimestamp.setDate(currentDateTimestamp.getDate() + 1),
  ).toLocaleDateString('es-ES');

  return new Promise((resolve, reject) => {
    storageRef.getSignedUrl(
      {
        action: 'read',
        expires: tomorrowDate,
      },
      (err: Error | null, url: string | undefined) => {
        if (err) {
          console.error('Error getting signed URL:', err);
          reject(err);
        }
        resolve(url as string);
      },
    );
  });
};

export const uploadPet = async (
  pet: PetUpload,
  url: string,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      const petRef = db.collection('pets').doc();

      const petToSave: PetCard = {
        id: undefined,
        name: pet.name,
        age: 10,
        breed: pet.breed,
        description: pet.description,
        type: PetType.OTHER,
        gender: pet.gender,
        image: url,
        distanceMeter: 100,
      };

      petRef
        .set(petToSave)
        .then(() => {
          resolve('Pet added successfully');
        })
        .catch(error => {
          console.error(error);
          reject('Error adding pet');
        });
    } catch (error) {
      console.error(error);
      reject('Error adding pet');
    }
  });
};
