# [API](README.md).inventorySnapshots - Flow Commerce API - Node SDK Documentation

Inventory snapshot reflects the current quantity and available number of units for a given center / item

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const inventorySnapshots = client().inventorySnapshots;
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
| center | [string] |  |
| item_number | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getById(organization, id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| id | string | Filter by one or more IDs of this resource |


##`getVersions(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| inventory_snapshot | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

