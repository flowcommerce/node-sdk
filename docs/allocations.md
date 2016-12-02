# [API](README.md).allocations - Flow Commerce API - Node SDK Documentation



## Usage

```JavaScript
import client from '@flowio/node-sdk';

const allocations = client().allocations;
```

## Operations

##`get(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| strategy | allocation_strategy | If specified, use this strategy to allocate order-level price details across units of the order. |

