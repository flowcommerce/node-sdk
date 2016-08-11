# [API](README.md).rates - Flow Commerce API - Node SDK Documentation

Represents an organization-specific currency conversion rate at a point in time.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const rates = client().rates;
```

## Operations

##`get(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| base | string | Filter by the (case-insensitive) base currency&#x27;s ISO 4217 3-character code as defined in https://api.flow.io/reference/currencies |
| target | string | Filter by the (case-insensitive) target currency&#x27;s ISO 4217 3-character code as defined in https://api.flow.io/reference/currencies |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`put(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`getVersions(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| base | string | Filter by the (case-insensitive) base currency&#x27;s ISO 4217 3-character code as defined in https://api.flow.io/reference/currencies |
| target | string | Filter by the (case-insensitive) target currency&#x27;s ISO 4217 3-character code as defined in https://api.flow.io/reference/currencies |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

