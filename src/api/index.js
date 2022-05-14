const BASE_URL = 'https://strangers-things.herokuapp.com';
const COHORT = '2202-FTB-ET-WEB-PT';

export const fetchPosts = async () => {
  let response = await fetch(`${BASE_URL}/api/${COHORT}/posts`);
  let result = await response.json();

  return result.data.posts;
};

export const registerUser = async (username, password) => {
  const response = await fetch(`${BASE_URL}/api/${COHORT}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const result = await response.json();

  return result;
};

export const loginUser = async (username, password) => {
  const response = await fetch(`${BASE_URL}/api/${COHORT}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const result = await response.json();

  return result;
};

export const fetchProfile = async (localToken) => {
  const response = await fetch(`${BASE_URL}/api/${COHORT}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localToken}`,
    },
  });
  const result = await response.json();

  return result;
};
