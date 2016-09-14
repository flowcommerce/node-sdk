# [API](README.md).invitations - Flow Commerce API - Node SDK Documentation

An invitation via email to a user to join this organization. The user will then walk through a user login/registration process and will immediately become a member of the organization.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const invitations = client().invitations;
```

## Operations

##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| organization | string | Find invitations for this organization |
| email | string | Find invitations for this email |
| token | string | Find invitation for this token |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |
| expand | [string] |  |

##`post(options = {})`



##`getById(id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |

##`deleteById(id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |


##`getTokensByToken(token, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| token | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |

##`putTokensByToken(token, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| token | string |  |


##`getVersions(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| invitation | [string] | Filter to versions for invitations with any one of these ids. |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

