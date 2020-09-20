export default async function userAccess({ username, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === '12345678') {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }