# [API](README.md).paymentMethods - Flow Commerce API - Node SDK Documentation

Represents a single payment method - e.g VISA or Paypal - and any associated metadata required for processing

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const paymentMethods = client().paymentMethods;
```

## Operations

##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| q | string | Free text search on name for a single matching payment method. Case insensitive |

