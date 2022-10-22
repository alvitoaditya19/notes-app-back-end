require('dotenv').config();
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

(async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Add the routes.
  server.route(routes);

  // Start the server.
  await server.start();
  console.log('Server running on %s', server.info.uri);
})();
