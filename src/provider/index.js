const HttpAPIProvider = require('./HttpAPIProvider');

function providerFactory({ url }) {
  return new HttpAPIProvider({ url });
}

module.exports = providerFactory;
