# [API](README.md).customerAddressBookContacts - Flow Commerce API - Node SDK Documentation

Preferences may indicate a contact is preferred for billing, invoicing, and/or shipping.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const customerAddressBookContacts = client().customerAddressBookContacts;
```

## Operations

##`get(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| email | [string] | Find contacts by email |
| phone | [string] | Find contacts by phone |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


##`getById(organization, number, id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |
| id | string | Filter by one or more IDs of this resource |


##`putById(organization, number, id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |
| id | string | Filter by one or more IDs of this resource |


##`deleteById(organization, number, id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |
| id | string | Filter by one or more IDs of this resource |


