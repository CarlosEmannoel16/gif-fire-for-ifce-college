import axios from "axios";
const apiKey = "?api_key=HQSPuqC1cZHGiVciAy3zYJFqOsWSzstf";
const path = "https://api.giphy.com/v1/gifs";
const services = {
  search: async ({ param, offset = 0, limit = 60 }) => {
    return axios.get(
      `${path}/search${apiKey}&q=${param}&limit=${limit}&offset=${offset}&rating=g&lang=en`
    );
  },
  getTrending: async () => {
    return await axios.get(`${path}/trending${apiKey}&limit=60&rating=g`);
  },

  getById: async (id) => {
    return await axios.get(`${path}/${id}${apiKey}`);
  },
  getByIds: async (ids) => {
    return await axios.get(`${path}${apiKey}&ids=${ids.join(",")}`);
  },
};

export default services;
