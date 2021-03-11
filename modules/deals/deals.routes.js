const express = require('express');

// const requestValidator = require('../../common/middleware/requestValidator');
const { listDealsController, viewPathController } = require('./controllers');

const router = express.Router();

router.get(
  '/',
  // requestValidator(businessTokenizeCardSchema),
  listDealsController
);

router.post(
  '/',
  // requestValidator(businessTokenizeCardSchema),
  viewPathController
);

module.exports = router;
