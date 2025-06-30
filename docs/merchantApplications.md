# [API](README.md).merchantApplications - Flow Commerce API - Node SDK Documentation

Submit merchant application form for an organization

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const merchantApplications = client().merchantApplications;
```

## Operations

##`getChannelAndMerchantAndApplicationsByChannelId(channelId, options = {})`

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

##`getChannelAndMerchantAndApplicationsAndSummaryByChannelId(channelId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel_id | string |  |


##`getMerchantAndApplicationsByOrganization(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`postMerchantAndApplicationsByOrganization(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`getMerchantAndApplicationsAndLatestByOrganization(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`getMerchantAndApplicationsAndSummaryByOrganization(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`getMerchantAndApplicationsByOrganizationAndId(organization, id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| id | string | Filter by one or more IDs of this resource |


##`putMerchantAndApplicationsByOrganizationAndId(organization, id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| id | string | Filter by one or more IDs of this resource |


