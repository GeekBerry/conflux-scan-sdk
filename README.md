# Conflux scan sdk

## Usage

```javascript
const { ScanSDK } = require('conflux-scan-sdk');

const sdk = new ScanSDK({
  url: 'http://127.0.0.1:8885',
});

async function main() {
  const matrix = await sdk.dag();

  console.log(matrix)
}

main()
```

# Document

* [api](https://github.com/GeekBerry/conflux-scan-sdk/blob/master/api.md)
