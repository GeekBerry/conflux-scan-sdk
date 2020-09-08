const fs = require('fs');
const lodash = require('lodash');
const jsdocToMd = require('@geekberry/jsdoc-to-md'); // eslint-disable-line import/no-extraneous-dependencies

const markdown = jsdocToMd(`${__dirname}/../src`, {
  filter: filename => {
    const suffixArray = [
      'ScanSDK.js',
    ];

    if (lodash.some(suffixArray, suffix => filename.endsWith(suffix))) {
      console.log(`File "${filename}" parsing...`); // eslint-disable-line no-console
      return true;
    }
    return false;
  },
});

fs.writeFileSync(`${__dirname}/../api.md`, `---
id: scan_sdk
title: Conflux Scan Backend SDK
custom_edit_url: https://github.com/GeekBerry/conflux-scan-sdk/blob/master/api.md
keywords:
  - conflux
  - scan
  - javascript
  - sdk
---

${markdown}
`);
