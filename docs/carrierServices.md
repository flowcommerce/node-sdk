# [API](README.md).carrierServices - Flow Commerce API - Node SDK Documentation

Specific service rendered by the carrier (fedex ground saturday, ups overnight weekend, etc)

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const carrierServices = client().carrierServices;
```

## Operations

##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| q | string | Free text search on name. Case insensitive |

