const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Define the proxy table here
  app.use(
    '/api', // This is the URL path that will trigger the proxy
    createProxyMiddleware({
      target: 'https://ai-therapist-api.vercel.app', // Replace with the correct URL of your API
      changeOrigin: true, // Change the origin of the request to match the target URL
      secure: false, // Disable SSL verification if necessary (only for development)
    })
  );
};
