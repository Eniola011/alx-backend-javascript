// await and async
import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  let picture;
  let user;

  try {
    picture = await uploadPhoto();
    user = await createUser();
  } catch (e) {
    picture = null;
    user = null;
  }
  return ({ picture, user });
};

export default asyncUploadUser;
