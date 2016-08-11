# [API](README.md).spotRates - Flow Commerce API - Node SDK Documentation



## Usage

```JavaScript
import client from '@flowio/node-sdk';

const spotRates = client().spotRates;
```

## Operations

##`get(options)`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| base | string | Filter by the (case-insensitive) base currency&#x27;s ISO 4217 3-character code as defined in https://api.flow.io/reference/currencies |
| target | string | Filter by the (case-insensitive) target currency&#x27;s ISO 4217 3-character code as defined in https://api.flow.io/reference/currencies |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getVersions(options)`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

