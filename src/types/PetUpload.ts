import {PetGender} from './PetGender';

export default interface PetUpload {
  name: string;
  birthday: string;
  breed: string;
  description: string;
  gender: PetGender;
  image: BinaryType;
}
