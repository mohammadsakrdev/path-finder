const config = require('../config/config');
const healthCheck = require('../middleware/healthCheck');
const notFoundHandler = require('../middleware/notFoundHandler');
const errorHandler = require('../middleware/errorHandler');
// Route files
const dealsRoutes = require('../../modules/deals/deals.routes');

/**
 * @function
 * Registers all app routes
 *
 * @param {object} app - Express app.
 */
module.exports = (app) => {
  // Mount routers
  // eslint-disable-next-line no-unused-vars
  app.get(`${config.baseUrl}/health`, healthCheck);
  app.use(`${config.baseUrl}/deals`, dealsRoutes);

  // Handling Not Found
  app.use(notFoundHandler);

  // Central error handler
  app.use(errorHandler);
};
