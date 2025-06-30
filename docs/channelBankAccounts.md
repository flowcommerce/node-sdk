# [API](README.md).channelBankAccounts - Flow Commerce API - Node SDK Documentation



## Usage

```JavaScript
import client from '@flowio/node-sdk';

const channelBankAccounts = client().channelBankAccounts;
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
| key | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getByKey(channel, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel | string |  |
| key | string |  |


##`putByKey(channel, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel | string |  |
| key | string |  |


##`deleteByKey(channel, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel | string |  |
| key | string |  |


