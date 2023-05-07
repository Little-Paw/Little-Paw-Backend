import express from 'express';

const petsRouter = express.Router();

petsRouter.get('/list', (req, res) => {
  console.log('Client request received /stores/list');
  res.send(
    JSON.stringify([
      {
        id: 1,
        name: 'Buddy',
        age: 3,
        breed: 'Labrador Retriever',
        type: 'DOG',
        gender: 'MALE',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Golden_Retriever_standing_Tucker.jpg/220px-Golden_Retriever_standing_Tucker.jpg',
        distanceMeters: 500,
      },
      {
        id: 2,
        name: 'Luna',
        age: 5,
        breed: 'Maine Coon',
        type: 'CAT',
        gender: 'FEMALE',
        image:
          'https://www.bubblypet.com/wp-content/uploads/2022/07/Beautiful-gray-Maine-Coon-cat-standing-outdoors-in-the-garden-768x512.jpg',
        distanceMeters: 500,
      },
    ]),
  );
  // res.status(404).send('Simular un error de API');
});

export default petsRouter;
