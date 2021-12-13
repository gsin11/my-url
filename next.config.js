const mongodburl = process.env.MONGODB_URI;

module.exports = {
  env: {
    mongodburl,
  },
  reactStrictMode: true,
};
