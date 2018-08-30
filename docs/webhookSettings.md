# [API](README.md).webhookSettings - Flow Commerce API - Node SDK Documentation

Sets organization level settings to determine things like how many retries on delivery, how long we wait, etc. By default, we will attempt delivery up to 6 times, using exponential backoff with a see of 1 minute (60k ms) - which means that we will retry over the course of approximately an hour before giving up.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const webhookSettings = client().webhookSettings;
```

## Operations

##`get(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`put(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


