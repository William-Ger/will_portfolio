const fetch = require('node-fetch');

module.exports = {
    '/api': {
      target: 'https://ai-therapist-api.vercel.app', // Replace with your API URL
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove the /api prefix when forwarding the request
      },
    },
  };