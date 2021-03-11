const routesLoader = require('./routes-loader');

/**
 * @function
 * Initializes app components
 *
 * @param {object} app - Express app.
 */
module.exports = (app) => {
  routesLoader(app);
};
