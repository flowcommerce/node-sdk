# [API](README.md).timezones - Flow Commerce API - Node SDK Documentation

Time zone data is provided by the public IANA time zone database. See http://www.iana.org/time-zones

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const timezones = client().timezones;
```

## Operations

##`getGeolocationAndTimezones(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| ip | string |  |

##`getReferenceAndTimezones(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| q | string | Free text search on name for a single matching timezone. Case insensitive |

