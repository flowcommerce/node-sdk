# [API](README.md).permissionChecks - Flow Commerce API - Node SDK Documentation

Used to test an integration&#x27;s permissions, including identifying the authentication technique that will be used for similar requests.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const permissionChecks = client().permissionChecks;
```

## Operations

##`getPermissionAndChecksAndAllByOrganization(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| permitted_method | permitted_http_method | If provided, only routes matching this method will be returned. |
| path | string | If provided, only routes matching theis regular expression will be retunerd. |

