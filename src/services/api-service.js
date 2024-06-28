import axios from "axios";

const API_KEY = "3vnuTL0pVT-17LoUEVSEHRwxOv4X1fCpG9MKzgY-vyA";

axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (query, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      orientation: "landscape",
      per_page: 12,
      page: currentPage
    },
  });
  return response.data;
};