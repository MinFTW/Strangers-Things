const BASE_URL = 'https://strangers-things.herokuapp.com';
const COHORT = '2202-FTB-ET-WEB-PT';

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`);
  const result = await response.json();

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

export const fetchProfile = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${BASE_URL}/api/${COHORT}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();

  return result;
};

export const createNewPost = async (title, description, price) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title,
        description,
        price,
      },
    }),
  });

  const result = await response.json();

  return result;
};
