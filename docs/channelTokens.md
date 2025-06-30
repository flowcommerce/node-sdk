# [API](README.md).channelTokens - Flow Commerce API - Node SDK Documentation



## Usage

```JavaScript
import client from '@flowio/node-sdk';

const channelTokens = client().channelTokens;
```

## Operations

##`get(channelId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel_id | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getById(channelId, id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel_id | string |  |
| id | string | Filter by one or more IDs of this resource |


##`putById(channelId, id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel_id | string |  |
| id | string | Filter by one or more IDs of this resource |


##`deleteById(channelId, id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel_id | string |  |
| id | string | Filter by one or more IDs of this resource |


