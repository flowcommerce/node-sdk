# [API](README.md).hs6Codes - Flow Commerce API - Node SDK Documentation

Associated item information for an HS6 code

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const hs6Codes = client().hs6Codes;
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
| number | [string] |  |
| scope | harmonization_scope |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

