import {PetGender} from './PetGender';
import {PetType} from './PetType';

export default interface PetCard {
  id: string | undefined;
  name: string;
  age: number;
  breed: string;
  description: string;
  type: PetType;
  gender: PetGender;
  image: string;
  distanceMeter: number;
}
