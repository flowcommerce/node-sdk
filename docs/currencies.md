# [API](README.md).currencies - Flow Commerce API - Node SDK Documentation

ISO 4217 3-character currency code. See https://api.flow.io/reference/currencies

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const currencies = client().currencies;
```

## Operations

##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| q | string | Free text search for a single matching currency. Can be the code or the name of the currency. Case insensitive |

