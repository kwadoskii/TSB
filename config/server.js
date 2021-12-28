const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:9000/api" : "https://tsb-backend.herokuapp.com/api";
