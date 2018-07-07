# [API](README.md).taxRegistrations - Flow Commerce API - Node SDK Documentation

Result of looking up a specific tax registration number. Indicates validity of a number for a specific country and (if valid) the associated person/company.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const taxRegistrations = client().taxRegistrations;
```

## Operations

##`post(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`putByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


