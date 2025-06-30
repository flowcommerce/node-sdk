# [API](README.md).channelStatements - Flow Commerce API - Node SDK Documentation



## Usage

```JavaScript
import client from '@flowio/node-sdk';

const channelStatements = client().channelStatements;
```

## Operations

##`get(channel, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| since | date-time-iso8601 | If specified, we return all statements where created_at &gt;&#x3D; the provided timestamp |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getById(channel, id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel | string |  |
| id | string | Filter by one or more IDs of this resource |


