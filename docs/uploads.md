# [API](README.md).uploads - Flow Commerce API - Node SDK Documentation

Provides the ability to upload a file to a URL (an expiring s3 url, usually valid for 1 week)

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const uploads = client().uploads;
```

## Operations

##`postByName(organization, name, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| name | string | The name of the file you are uploading. Note that the name will be part of the generated URL - but the URL itself will contain a unique randomized string. |


