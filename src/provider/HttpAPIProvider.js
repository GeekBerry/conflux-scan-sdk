const superagent = require('superagent');

class HttpAPIProvider {
  constructor({ url }) {
    this.url = url;
  }

  close() {
    // pass
  }

  async _get(path, query = {}) {
    const url = `${this.url}${path}`;
    const { body: { code, message, result } = {} } = await superagent.get(url).query(query);
    if (code !== 0) {
      throw new Error(message);
    }
    return result;
  }

  async _post(path, body) {
    const url = `${this.url}${path}`;
    const { body: { code, message, result } = {} } = await superagent.post(url).send(body);
    if (code !== 0) {
      throw new Error(message);
    }
    return result;
  }

  async call(method, ...params) {
    switch (method) {
      case 'getBlock':
        return this._get('/api/block/query', ...params).catch(() => null);
      case 'listBlock':
        return this._get('/api/block/list', ...params);

      case 'getTransaction':
        return this._get('/api/transaction/query', ...params).catch(() => null);
      case 'listTransaction':
        return this._get('/api/transaction/list', ...params);

      case 'registerContract':
        return this._post('/api/contract/register', ...params);
      case 'deregisterContract':
        return this._post('/api/contract/deregister', ...params);
      case 'getContract':
        return this._get('/api/contract/query', ...params);
      case 'listContract':
        return this._get('/api/contract/list', ...params);

      case 'registerToken':
        return this._post('/api/token/register', ...params);
      case 'deregisterToken':
        return this._post('/api/token/deregister', ...params);
      case 'getToken':
        return this._get('/api/token/query', ...params);
      case 'listToken':
        return this._get('/api/token/list', ...params);

      case 'listTransfer':
        return this._get('/api/transfer/list', ...params);

      case 'dag':
        // TODO just return matrix
        const { list: matrix } = await this._get('/api/dashboard/dag', ...params);
        return matrix;
      case 'plot':
        // TODO just return list
        const { list } = await this._get('/api/dashboard/plot', ...params);
        return list;
      case 'trend':
        return this._get('/api/dashboard/trend', ...params);

      default:
        throw new Error('Method not found');
    }
  }
}

module.exports = HttpAPIProvider;
