import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "64d9b09b4ce571d8fa7ba623a410f58b",
    language: "ko-KR",
  },
});

export default instance;
