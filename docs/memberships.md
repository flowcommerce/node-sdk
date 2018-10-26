# [API](README.md).memberships - Flow Commerce API - Node SDK Documentation

Represents the users that are part of this organization. Primary purpose is to manage which users have access to the organization&#x27;s data and to provide a simple user interface to assign roles and permissions to each member of the organization

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const memberships = client().memberships;
```

## Operations

##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| user | string | Find memberships for this user id |
| organization | string | Find memberships for this organization id |
| role | [string] | Find memberships with ANY of these roles. |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |
| expand | [string] |  |

##`post(options = {})`



##`getVersions(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| membership | [string] | Filter membership changes with any one of these ids. |
| user | string | Filter membership changes for this user id |
| organization | string | Filter membership changes for this organization id |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getById(id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| expand | [string] |  |

##`putById(id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |


##`deleteById(id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |


