import axios from "axios";

const apiClient = axios.create({
  // base URL for all calls to use
  baseURL: "http://localhost:3000",
  withCredentials: false,
  // for authentication & config
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
