# [API](README.md).flowTransactions - Flow Commerce API - Node SDK Documentation

Provides internal access to all transactions

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const flowTransactions = client().flowTransactions;
```

## Operations

##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| source_type | string |  |
| source_id | string |  |
| order_organization_id | string |  |
| statement_id | string |  |
| order_number | string |  |
| since | date-time-iso8601 | If specified, we return all transactions where created_at &gt;&#x3D; the provided timestamp |
| updated_since | date-time-iso8601 | If specified, we return all transactions where updated_at &gt;&#x3D; the provided timestamp |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getById(id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |


