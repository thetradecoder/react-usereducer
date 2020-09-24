export default async function userAccess({ username, password }) {


  const userdata = 'admin';
  const userpassword = '12345678';
    
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === userdata && password === userpassword) {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }