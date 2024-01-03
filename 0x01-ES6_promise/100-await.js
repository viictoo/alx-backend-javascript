import { createUser, uploadPhoto } from './utils';

export default async function () {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return Promise.resolve({ photo, user });
  } catch (err) {
    return Promise.resolve({ photo: null, user: null });
  }
}
