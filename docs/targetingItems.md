# [API](README.md).targetingItems - Flow Commerce API - Node SDK Documentation

Represents catalog items where a targeting query is applicable

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const targetingItems = client().targetingItems;
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
| key | [string] | Key of the targeting |
| item_number | [string] | Number of the item |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

