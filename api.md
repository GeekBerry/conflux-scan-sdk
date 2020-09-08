---
id: scan_sdk
title: Conflux Scan Backend SDK
custom_edit_url: https://github.com/Conflux-Dev/conflux-scan-backend/tree/master/scan-sdk/api.md
keywords:
  - conflux
  - scan
  - javascript
  - sdk
---

- ScanSDK.js
    - ScanSDK
        - [getBlock](#ScanSDK.js/ScanSDK/getBlock)
        - [listBlock](#ScanSDK.js/ScanSDK/listBlock)
        - [getTransaction](#ScanSDK.js/ScanSDK/getTransaction)
        - [listTransaction](#ScanSDK.js/ScanSDK/listTransaction)
        - [registerContract](#ScanSDK.js/ScanSDK/registerContract)
        - [deregisterContract](#ScanSDK.js/ScanSDK/deregisterContract)
        - [getContract](#ScanSDK.js/ScanSDK/getContract)
        - [listContract](#ScanSDK.js/ScanSDK/listContract)
        - [registerToken](#ScanSDK.js/ScanSDK/registerToken)
        - [deregisterToken](#ScanSDK.js/ScanSDK/deregisterToken)
        - [getToken](#ScanSDK.js/ScanSDK/getToken)
        - [listToken](#ScanSDK.js/ScanSDK/listToken)
        - [listTransfer](#ScanSDK.js/ScanSDK/listTransfer)
        - [dag](#ScanSDK.js/ScanSDK/dag)
        - [trend](#ScanSDK.js/ScanSDK/trend)
        - [plot](#ScanSDK.js/ScanSDK/plot)

----------------------------------------

## ScanSDK <a id="ScanSDK.js/ScanSDK"></a>

conflux scan backend sdk

## ScanSDK.prototype.getBlock <a id="ScanSDK.js/ScanSDK/getBlock"></a>

* **Parameters**

Name         | Type     | Required | Default | Description
-------------|----------|----------|---------|------------
options      | `object` | true     |         |
options.hash | `string` | true     |         |

* **Returns**

`Promise.<(object|null)>` 

## ScanSDK.prototype.listBlock <a id="ScanSDK.js/ScanSDK/listBlock"></a>

* **Parameters**

Name                   | Type      | Required | Default | Description
-----------------------|-----------|----------|---------|--------------------------------------
options                | `object`  | false    |         |
options.epochNumber    | `number`  | false    |         | epoch number
options.miner          | `string`  | false    |         | block miner address
options.referredBy     | `string`  | false    |         | block hash of referred by
options.minEpochNumber | `number`  | false    |         |
options.maxEpochNumber | `number`  | false    |         |
options.minTimestamp   | `number`  | false    |         | min timestamp of epoch by pivot block
options.maxTimestamp   | `number`  | false    |         | max timestamp of epoch by pivot block
options.reverse        | `boolean` | false    | true    |
options.page           | `number`  | false    | 1       |
options.pageSize       | `number`  | false    | 10      |

* **Returns**

`Promise.<object>` object of block information
- total `number`: total of the list
- listLimit `number`: list limit by page and pageSize
- list `array`: array of block

## ScanSDK.prototype.getTransaction <a id="ScanSDK.js/ScanSDK/getTransaction"></a>

* **Parameters**

Name         | Type     | Required | Default | Description
-------------|----------|----------|---------|------------
options      | `object` | true     |         |
options.hash | `string` | true     |         |

* **Returns**

`Promise.<(object|null)>` 

## ScanSDK.prototype.listTransaction <a id="ScanSDK.js/ScanSDK/listTransaction"></a>

* **Parameters**

Name                   | Type          | Required | Default | Description
-----------------------|---------------|----------|---------|------------
options                | `object`      | false    |         |
options.blockHash      | `string`      | false    |         |
options.accountAddress | `string`      | false    |         |
options.txType         | `string`      | false    |         |
options.status         | `number,null` | false    |         |
options.minEpochNumber | `number`      | false    |         |
options.maxEpochNumber | `number`      | false    |         |
options.minTimestamp   | `number`      | false    |         |
options.maxTimestamp   | `number`      | false    |         |
options.reverse        | `boolean`     | false    | true    |
options.page           | `number`      | false    | 1       |
options.pageSize       | `number`      | false    | 10      |

* **Returns**

`Promise.<object>` object of transaction information
- total `number`: total of the list
- listLimit `number`: list limit by page and pageSize
- list `object[]`: array of object

## ScanSDK.prototype.registerContract <a id="ScanSDK.js/ScanSDK/registerContract"></a>

> scan backend send and pay for register transaction now. but user should sign and send transaction in the future

* **Parameters**

Name               | Type     | Required | Default | Description
-------------------|----------|----------|---------|--------------------------------------------
options            | `object` | true     |         |
options.password   | `string` | true     |         | password of scan backend
options.address    | `string` | true     |         | address of contract
options.name       | `string` | false    |         | name of contact to be register
options.website    | `string` | false    |         | website url of contact to be register
options.abi        | `string` | false    |         | contact abi json to be register
options.sourceCode | `string` | false    |         | contact solidity source code to be register
options.icon       | `string` | false    |         | contact icon base64 to be register

* **Returns**

`Promise.<object>` - transactionHash `string`: hash of register transaction

## ScanSDK.prototype.deregisterContract <a id="ScanSDK.js/ScanSDK/deregisterContract"></a>

> scan backend send and pay for deregister transaction now. but user should sign and send transaction in the future

* **Parameters**

Name             | Type     | Required | Default | Description
-----------------|----------|----------|---------|-------------------------
options          | `object` | true     |         |
options.password | `string` | true     |         | password of scan backend
options.address  | `string` | true     |         | address of contract

* **Returns**

`Promise.<object>` - transactionHash `string`: hash of register transaction

## ScanSDK.prototype.getContract <a id="ScanSDK.js/ScanSDK/getContract"></a>

* **Parameters**

Name            | Type             | Required | Default | Description
----------------|------------------|----------|---------|--------------------------------------------------------------------------
options         | `object`         | true     |         |
options.address | `string`         | true     |         | address of contact
options.fields  | `Array.<string>` | false    | []      | array of field name, example ['name','website','abi','sourceCode','icon']

* **Returns**

`Promise.<(object|null)>` - address `string`: contract address
- from `string`: creator address of contract
- epochNumber `number`: epoch of contract to be create
- transactionHash `string`: transaction hash of contact to be create
- admin `string`: admin `address` of contact
- name `string`: registered name of contract
- website `string`: registered website of contract
- abi `string`: registered abi of contract
- sourceCode `string`: registered sourceCode of contract
- icon `string`: registered icon of contract

## ScanSDK.prototype.listContract <a id="ScanSDK.js/ScanSDK/listContract"></a>

* **Parameters**

Name                   | Type             | Required | Default | Description
-----------------------|------------------|----------|---------|------------------------------
options                | `object`         | false    |         |
options.registerOnly   | `boolean`        | false    | true    | only list registered contract
options.from           | `string`         | false    |         | contract creator address
options.minEpochNumber | `number`         | false    |         |
options.maxEpochNumber | `number`         | false    |         |
options.minTimestamp   | `number`         | false    |         |
options.maxTimestamp   | `number`         | false    |         |
options.fields         | `Array.<string>` | false    | []      | array of field name
options.reverse        | `boolean`        | false    | false   |
options.page           | `number`         | false    | 1       |
options.pageSize       | `number`         | false    | 10      |

* **Returns**

`Promise.<object>` object of contract information
- total `number`: total of the list
- listLimit `number`: list limit by page and pageSize
- list `object[]`: array of object

## ScanSDK.prototype.registerToken <a id="ScanSDK.js/ScanSDK/registerToken"></a>

> scan backend send and pay for register transaction now. but user should sign and send transaction in the future

* **Parameters**

Name             | Type     | Required | Default | Description
-----------------|----------|----------|---------|-----------------------------------
options          | `object` | true     |         |
options.password | `string` | true     |         | password of scan backend
options.icon     | `string` | false    |         | contact icon base64 to be register

* **Returns**

`Promise.<object>` - transactionHash `string`: hash of register transaction

## ScanSDK.prototype.deregisterToken <a id="ScanSDK.js/ScanSDK/deregisterToken"></a>

> scan backend send and pay for register transaction now. but user should sign and send transaction in the future

* **Parameters**

Name             | Type     | Required | Default | Description
-----------------|----------|----------|---------|-------------------------
options          | `object` | true     |         |
options.password | `string` | true     |         | password of scan backend

* **Returns**

`Promise.<object>` - transactionHash `string`: hash of register transaction

## ScanSDK.prototype.getToken <a id="ScanSDK.js/ScanSDK/getToken"></a>

* **Parameters**

Name            | Type             | Required | Default | Description
----------------|------------------|----------|---------|--------------------------------------
options         | `object`         | true     |         |
options.address | `string`         | true     |         | address of contact
options.fields  | `Array.<string>` | false    | []      | array of field name, example ['icon']

* **Returns**

`Promise.<(object|null)>` 

## ScanSDK.prototype.listToken <a id="ScanSDK.js/ScanSDK/listToken"></a>

* **Parameters**

Name                   | Type             | Required | Default | Description
-----------------------|------------------|----------|---------|------------------------------
options                |                  | true     |         |
options.accountAddress | `string`         | false    |         | account address
options.registerOnly   | `boolean`        | false    | true    | only list registered contract
options.fields         | `Array.<string>` | false    | []      | array of field name
options.reverse        | `boolean`        | false    | false   |
options.page           | `number`         | false    | 1       |
options.pageSize       | `number`         | false    | 10      |

* **Returns**

`Promise.<object>` object of token information
- total `number`: total of the list
- listLimit `number`: list limit by page and pageSize
- list `object[]`: array of object

## ScanSDK.prototype.listTransfer <a id="ScanSDK.js/ScanSDK/listTransfer"></a>

* **Parameters**

Name                    | Type      | Required | Default | Description
------------------------|-----------|----------|---------|------------
options                 | `object`  | false    |         |
options.transactionHash | `string`  | false    |         |
options.address         | `string`  | false    |         |
options.accountAddress  | `string`  | false    |         |
options.minEpochNumber  | `number`  | false    |         |
options.maxEpochNumber  | `number`  | false    |         |
options.minTimestamp    | `number`  | false    |         |
options.maxTimestamp    | `number`  | false    |         |
options.reverse         | `boolean` | false    | true    |
options.page            | `number`  | false    | 1       |
options.pageSize        | `number`  | false    | 10      |

* **Returns**

`Promise.<object>` object of transfer information
- total `number`: total of the list
- listLimit `number`: list limit by page and pageSize
- list `object[]`: array of object

## ScanSDK.prototype.dag <a id="ScanSDK.js/ScanSDK/dag"></a>

* **Parameters**

Name          | Type     | Required | Default | Description
--------------|----------|----------|---------|------------
options       | `object` | false    |         |
options.limit | `number` | false    | 10      |

* **Returns**

`Promise.<Array.<array>>` matrix of dag graph
- matrix: (array of epoch block list)
  - array: (block list of epoch)
    - epochNumber `number`:
    - hash `string`: block hash
    - parentHash `string`: parent block hash
    - refereeHashes `string[]`: referee block hash array

## ScanSDK.prototype.trend <a id="ScanSDK.js/ScanSDK/trend"></a>

* **Returns**

`Promise.<object>` trend information
- tps `object`:
  - value `string`: number string of current value
  - trend `string`: number string of trend
- blockTime `object`:
- difficulty `object`:
- hashRate `object`:
- transactionGasPrice `object`:

## ScanSDK.prototype.plot <a id="ScanSDK.js/ScanSDK/plot"></a>

* **Parameters**

Name             | Type     | Required | Default | Description
-----------------|----------|----------|---------|-------------------------------------
options          | `object` | false    |         |
options.duration | `string` | false    | 'day'   | enum of ['hour','day','month','all']

* **Returns**

`Promise.<Array.<object>>` list of statistic
- array:
  - tps `string`: number string
  - blockTime `string`: number string
  - difficulty `string`: number string
  - hashRate `string`: number string
