# [API](README.md).b2bCreditMemos - Flow Commerce API - Node SDK Documentation

The b2b credit memo represents a refund transaction between Flow and one of our clients

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const b2bCreditMemos = client().b2bCreditMemos;
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
| key | string |  |
| order_number | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

