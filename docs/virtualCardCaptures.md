# [API](README.md).virtualCardCaptures - Flow Commerce API - Node SDK Documentation

Payment has been captured for the virtual credit card

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const virtualCardCaptures = client().virtualCardCaptures;
```

## Operations

##`get(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getByVirtualCardId(organization, virtualCardId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| virtual_card_id | string | The unique identifier for the virtual card. |


