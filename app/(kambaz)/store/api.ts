import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export const http = axios.create({
  baseURL: HTTP_SERVER,
});
