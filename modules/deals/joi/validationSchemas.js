const Joi = require('@hapi/joi');

module.exports = {
  /**
   * View path schema
   */
  viewPathSchema: {
    body: Joi.object()
      .required()
      .keys({
        departure: Joi.string().required(),
        arrival: Joi.string().required(),
        type: Joi.string()
          .required()
          .valid(['cheapest', 'fastest'])
      })
  }
};
