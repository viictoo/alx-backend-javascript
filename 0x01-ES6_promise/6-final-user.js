import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(filename);
  const complete = Promise.allSettled([signUp, upload])
    .then((data) => {
      const arr = [];
      data.forEach((elem) => {
        if (elem.status === 'fulfilled') {
          arr.push(elem);
        } else {
          arr.push({
            status: elem.status,
            value: `Error: ${elem.reason.message}`,
          });
        }
      });
      return arr;
    });
  return complete;
}
