# [API](README.md).creditMemos - Flow Commerce API - Node SDK Documentation

The credit memo represents the details of a refund and the reasons for the issuance of the refund.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const creditMemos = client().creditMemos;
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

