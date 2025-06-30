# [API](README.md).channelOrganizations - Flow Commerce API - Node SDK Documentation



## Usage

```JavaScript
import client from '@flowio/node-sdk';

const channelOrganizations = client().channelOrganizations;
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
| key | [string] |  |
| organization_id | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(channelId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel_id | string |  |


##`getByKey(channelId, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel_id | string |  |
| key | string |  |


##`putByKey(channelId, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel_id | string |  |
| key | string |  |


##`deleteByKey(channelId, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel_id | string |  |
| key | string |  |


