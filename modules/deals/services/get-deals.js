const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../data/deals.json');

const getDeals = () => {
  return JSON.parse(fs.readFileSync(dirPath));
};

module.exports = getDeals;
