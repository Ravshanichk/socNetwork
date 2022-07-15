import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "816a7f9a-75b2-4e2d-90b5-b0ea4240e63b",
  },
});

export const getUsers = (pageSize = 10, currentPage = 1) => {
  return instance
    .get(`users?count=${pageSize}&page=${currentPage}`)
    .then((response) => {
      return response.data;
    });
};

export const searchUsers = (inputText) => {
  return instance.get(`users?term=${inputText}`).then((response) => {
    return response.data;
  });
};

export const unFollowApi = (id) => {
  return instance.delete(`follow/${id}`).then((response) => {
    if (response.data.resultCode === 0) {
      return response.data;
    }
  });
};

export const followApi = (id) => {
  return instance.post(`follow/${id}`).then((response) => {
    if (response.data.resultCode === 0) {
      return response.data;
    }
  });
};

export const getProfile = (id) => {
  return instance.get(`profile/${id}`).then((response) => {
    return response.data;
  });
};

export const authApi = () => {
  return instance.get(`auth/me`)
};
