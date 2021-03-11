const config = {
  app: {
    port: parseInt(process.env.PORT, 0) || 3000
  },
  baseUrl: process.env.BASE_API_URL || '/api/v0'
};

module.exports = config;
