import axios from "axios";

export const api = axios.create({
  baseURL: "https://0c53-179-178-79-152.ngrok-free.app",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

api.interceptors.request.use((request) => {
  // console.log("Starting Request", JSON.stringify(request, null, 2));
  return request;
});

axios.interceptors.response.use((response) => {
  //console.log("Response:", JSON.stringify(response, null, 2));
  return response;
});
