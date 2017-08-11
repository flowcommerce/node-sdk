# [API](README.md).partnerTokens - Flow Commerce API - Node SDK Documentation

All of the metadata associated with a given token.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const partnerTokens = client().partnerTokens;
```

## Operations

##`get(partner, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| partner | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| mine | boolean | Filter to tokens created by the requesting user |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(partner, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| partner | string |  |


