# [API](README.md).tariffCodes - Flow Commerce API - Node SDK Documentation

API to fetch current tariff codes.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const tariffCodes = client().tariffCodes;
```

## Operations

##`get(destination, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| destination | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getByCode(destination, code, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| destination | string |  |
| code | string |  |


