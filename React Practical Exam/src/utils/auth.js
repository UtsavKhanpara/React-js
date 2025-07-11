// utils/auth.js

// Dummy credentials (hardcoded)
const dummyUser = {
  username: 'admin',
  password: '1234'
};

// Check if entered credentials match dummy user
export const authenticate = (username, password) => {
  if (username === dummyUser.username && password === dummyUser.password) {
    return true;
  }
  return false;
};
