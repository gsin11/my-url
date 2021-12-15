const mongodburl = process.env.MONGODB_URI;
const baseUrl = process.env.BASE_URL;

module.exports = {
  env: {
    mongodburl,
    baseUrl,
    API_SECRET_KEY: process.env.API_SECRET_KEY,
  },
  reactStrictMode: true,
};
