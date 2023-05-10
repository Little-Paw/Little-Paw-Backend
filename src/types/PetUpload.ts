import {PetGender} from './PetGender';
import {PetType} from './PetType';

export default interface PetUpload {
  name: string;
  age: number;
  breed: string;
  description: string;
  gender: PetGender;
  type: PetType;
  image: BinaryType;
  location: string;
}
