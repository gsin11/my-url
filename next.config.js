const mongodburl = process.env.MONGODB_URI;
const baseUrl = process.env.BASE_URL;

module.exports = {
  env: {
    mongodburl,
    baseUrl,
  },
  reactStrictMode: true,
};
