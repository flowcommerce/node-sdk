# [API](README.md).hs6 - Flow Commerce API - Node SDK Documentation

API to fetch HS-6 codes assigned to your items. Note that if your item has been classified multiple times or its classification has changed, this API will provide you with the most recent harmonization code for that item.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const hs6 = client().hs6;
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
| item_number | [string] |  |
| code | string | Filter to records matching this HS-6 code |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getVersions(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| hs6_id | [string] | Filter to HS-6s with any one of these ids. |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

