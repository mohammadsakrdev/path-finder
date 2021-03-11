/* eslint-disable require-await */
/* eslint-disable no-unused-vars */
const { OK } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const { getDeals, findPath } = require('../services');

// @desc      Customer view path
// @route     POST /api/v0/deals
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const { departure, arrival } = req.body;
  const { deals } = getDeals();
  const paths = findPath(deals, departure, arrival);

  return res.status(OK).json({
    success: true,
    message: 'Done successfully.',
    data: paths
  });
});
