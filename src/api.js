import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/messages";

export const fetchMessages = () => axios.get(API_BASE_URL);

export const sendMessage = (message) =>
  axios.post(API_BASE_URL, message);
