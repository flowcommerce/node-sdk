# [API](README.md).events - Flow Commerce API - Node SDK Documentation

## Operations

`get(options)`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| organization | string | Refers to your organization&#x27;s account identifier |
| tracking_id | [string] |  |
| label_id | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |
| expand | [string] |  |

`getById(id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |

`getVersions(options)`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| event_id | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

