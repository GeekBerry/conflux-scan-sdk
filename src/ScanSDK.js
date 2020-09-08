const providerFactory = require('./provider');

/**
 * conflux scan backend sdk
 */
class ScanSDK {
  constructor(options) {
    this.provider = providerFactory(options);
  }

  close() {
    return this.provider.close();
  }

  // --------------------------------- Block ----------------------------------
  /**
   * @param options {object}
   * @param options.hash {string}
   *
   * @return {Promise<object|null>}
   */
  getBlock(options) {
    return this.provider.call('getBlock', options);
  }

  /**
   * @param [options] {object}
   * @param [options.epochNumber] {number} - epoch number
   * @param [options.miner] {string} - block miner address
   * @param [options.referredBy] {string} - block hash of referred by
   * @param [options.minEpochNumber] {number}
   * @param [options.maxEpochNumber] {number}
   * @param [options.minTimestamp] {number} - min timestamp of epoch by pivot block
   * @param [options.maxTimestamp] {number} - max timestamp of epoch by pivot block
   * @param [options.reverse=true] {boolean}
   * @param [options.page=1] {number}
   * @param [options.pageSize=10] {number}
   *
   * @return {Promise<object>} object of block information
   * - total `number`: total of the list
   * - listLimit `number`: list limit by page and pageSize
   * - list `array`: array of block
   */
  listBlock(options) {
    return this.provider.call('listBlock', options);
  }

  // ------------------------------- Transaction ------------------------------
  /**
   * @param options {object}
   * @param options.hash {string}
   *
   * @return {Promise<object|null>}
   */
  getTransaction(options) {
    return this.provider.call('getTransaction', options);
  }

  /**
   * @param [options] {object}
   * @param [options.blockHash] {string}
   * @param [options.accountAddress] {string}
   * @param [options.txType] {string}
   * @param [options.status] {number|null}
   * @param [options.minEpochNumber] {number}
   * @param [options.maxEpochNumber] {number}
   * @param [options.minTimestamp] {number}
   * @param [options.maxTimestamp] {number}
   * @param [options.reverse=true] {boolean}
   * @param [options.page=1] {number}
   * @param [options.pageSize=10] {number}
   *
   * @return {Promise<object>} object of transaction information
   * - total `number`: total of the list
   * - listLimit `number`: list limit by page and pageSize
   * - list `object[]`: array of object
   */
  listTransaction(options) {
    return this.provider.call('listTransaction', options);
  }

  // -------------------------------- Contract --------------------------------
  /**
   * > scan backend send and pay for register transaction now. but user should sign and send transaction in the future
   *
   * @param options {object}
   * @param options.password {string} - password of scan backend
   * @param options.address {string} - address of contract
   * @param [options.name] {string} - name of contact to be register
   * @param [options.website] {string} - website url of contact to be register
   * @param [options.abi] {string} - contact abi json to be register
   * @param [options.sourceCode] {string} - contact solidity source code to be register
   * @param [options.icon] {string} - contact icon base64 to be register
   *
   * @return {Promise<object>}
   * - transactionHash `string`: hash of register transaction
   */
  registerContract(options) {
    return this.provider.call('registerContract', options);
  }

  /**
   * > scan backend send and pay for deregister transaction now. but user should sign and send transaction in the future
   *
   * @param options {object}
   * @param options.password {string} - password of scan backend
   * @param options.address {string} - address of contract
   *
   * @return {Promise<object>}
   * - transactionHash `string`: hash of register transaction
   */
  deregisterContract(options) {
    return this.provider.call('deregisterContract', options);
  }

  /**
   * @param options {object}
   * @param options.address {string} - address of contact
   * @param [options.fields=[]] {string[]} - array of field name, example ['name','website','abi','sourceCode','icon']
   *
   * @return {Promise<object|null>}
   * - address `string`: contract address
   * - from `string`: creator address of contract
   * - epochNumber `number`: epoch of contract to be create
   * - transactionHash `string`: transaction hash of contact to be create
   * - admin `string`: admin `address` of contact
   * - name `string`: registered name of contract
   * - website `string`: registered website of contract
   * - abi `string`: registered abi of contract
   * - sourceCode `string`: registered sourceCode of contract
   * - icon `string`: registered icon of contract
   */
  getContract(options) {
    return this.provider.call('getContract', options);
  }

  /**
   * @param [options] {object}
   * @param [options.registerOnly=true] {boolean} - only list registered contract
   * @param [options.from] {string} - contract creator address
   * @param [options.minEpochNumber] {number}
   * @param [options.maxEpochNumber] {number}
   * @param [options.minTimestamp] {number}
   * @param [options.maxTimestamp] {number}
   * @param [options.fields=[]] {string[]} - array of field name
   * @param [options.reverse=false] {boolean}
   * @param [options.page=1] {number}
   * @param [options.pageSize=10] {number}
   *
   * @return {Promise<object>} object of contract information
   * - total `number`: total of the list
   * - listLimit `number`: list limit by page and pageSize
   * - list `object[]`: array of object
   */
  listContract(options) {
    return this.provider.call('listContract', options);
  }

  // ---------------------------------- Token ---------------------------------
  /**
   * > scan backend send and pay for register transaction now. but user should sign and send transaction in the future
   *
   * @param options {object}
   * @param options.password {string} - password of scan backend
   * @param [options.icon] {string} - contact icon base64 to be register
   *
   * @return {Promise<object>}
   * - transactionHash `string`: hash of register transaction
   */
  registerToken(options) {
    return this.provider.call('registerToken', options);
  }

  /**
   * > scan backend send and pay for register transaction now. but user should sign and send transaction in the future
   *
   * @param options {object}
   * @param options.password {string} - password of scan backend
   *
   * @return {Promise<object>}
   * - transactionHash `string`: hash of register transaction
   */
  deregisterToken(options) {
    return this.provider.call('deregisterToken', options);
  }

  /**
   * @param options {object}
   * @param options.address {string} - address of contact
   * @param [options.fields=[]] {string[]} - array of field name, example ['icon']
   *
   * @return {Promise<object|null>}
   */
  getToken(options) {
    return this.provider.call('getToken', options);
  }

  /**
   *
   * @param options
   * @param [options.accountAddress] {string} - account address
   * @param [options.registerOnly=true] {boolean} - only list registered contract
   * @param [options.fields=[]] {string[]} - array of field name
   * @param [options.reverse=false] {boolean}
   * @param [options.page=1] {number}
   * @param [options.pageSize=10] {number}
   *
   * @return {Promise<object>} object of token information
   * - total `number`: total of the list
   * - listLimit `number`: list limit by page and pageSize
   * - list `object[]`: array of object
   */
  listToken(options) {
    return this.provider.call('listToken', options);
  }

  // ------------------------------- Transfer ---------------------------------
  /**
   * @param [options] {object}
   * @param [options.transactionHash] {string}
   * @param [options.address] {string}
   * @param [options.accountAddress] {string}
   * @param [options.minEpochNumber] {number}
   * @param [options.maxEpochNumber] {number}
   * @param [options.minTimestamp] {number}
   * @param [options.maxTimestamp] {number}
   * @param [options.reverse=true] {boolean}
   * @param [options.page=1] {number}
   * @param [options.pageSize=10] {number}
   *
   * @return {Promise<object>} object of transfer information
   * - total `number`: total of the list
   * - listLimit `number`: list limit by page and pageSize
   * - list `object[]`: array of object
   */
  listTransfer(options) {
    return this.provider.call('listTransfer', options);
  }

  // ------------------------------- Dashboard --------------------------------
  /**
   * @param [options] {object}
   * @param [options.limit=10] {number}
   *
   * @return {Promise<object>} dag information object
   * - list `array`: (array of epoch block list)
   *   - `array`: (block list of epoch)
   *     - epochNumber `number`:
   *     - hash `string`: block hash
   *     - parentHash `string`: parent block hash
   *     - refereeHashes `string[]`: referee block hash array
   */
  dag(options) {
    return this.provider.call('dag', options);
  }

  /**
   * @return {Promise<object>} trend information
   * - tps `object`:
   *   - value `string`: number string of current value
   *   - trend `string`: number string of trend
   * - blockTime `object`:
   * - difficulty `object`:
   * - hashRate `object`:
   * - transactionGasPrice `object`:
   */
  trend() {
    return this.provider.call('trend');
  }

  /**
   * @param [options] {object}
   * @param [options.duration='day'] {string} - enum of ['hour','day','month','all']
   * @return {Promise<object>} list of statistic
   * - list `array`:
   *   - tps `string`: number string
   *   - blockTime `string`: number string
   *   - difficulty `string`: number string
   *   - hashRate `string`: number string
   */
  plot(options) {
    return this.provider.call('plot', options);
  }
}

module.exports = ScanSDK;
