# [API](README.md).subcatalogItems - Flow Commerce API - Node SDK Documentation

Represents information specific to an item in a given subcatalog

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const subcatalogItems = client().subcatalogItems;
```

## Operations

##`get(organization, subcatalogId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| subcatalog_id | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| number | [string] |  |
| status | [subcatalog_item_status] | Filter to items with a status as defined in https://docs.flow.io/types.html#type-subcatalog-item-status |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |
| expand | [string] |  |

##`getByNumber(organization, subcatalogId, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| subcatalog_id | string |  |
| number | string |  |


##`getVersions(organization, subcatalogId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| subcatalog_id | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| number | [string] | Filter to items with any one of these numbers. |
| status | [subcatalog_item_status] | Filter to items based on their status within this subcatalog |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

