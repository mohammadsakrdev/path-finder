/* eslint-disable require-await */
/* eslint-disable no-unused-vars */
const { OK } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const { getDeals } = require('../services');

// @desc      Customer list deals
// @route     GET /api/v0/deals
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const { deals } = getDeals();

  return res.status(OK).json({
    success: true,
    message: 'Done successfully.',
    data: deals
  });
});
