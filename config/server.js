const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://t.d:9000/api" : "https://tsb-backend.herokuapp.com/api";
