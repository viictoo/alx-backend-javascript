import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const a = uploadPhoto();
  const b = createUser();
  const complete = await Promise.all([a, b])
  // return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      const str = `${data[0].body} ${data[1].firstName} ${data[1].lastName}`;
      console.log(str);
    },
    () => console.log('Signup system offline'));

  return complete;
}
