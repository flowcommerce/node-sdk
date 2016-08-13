# [API](README.md).countryDefaults - Flow Commerce API - Node SDK Documentation

Provides country level defaults, incl language and currency. This resource allows you to provide geo info (e.g. IP, address, country) and will geolocate the request, returning the matching country level defaults. For example, if a user lands on your website and you do not have any stored preferences, you can use this API to retrieve the best default preferences based on the location of the user by providing their IP Address.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const countryDefaults = client().countryDefaults;
```

## Operations

##`get(options)`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| country | string | The ISO 3166 2 or 3 character code for the country. Case insensitive. See https://api.flow.io/reference/countries |
| address | string |  |
| ip | string |  |

##`getByCountry(country, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| country | string | The ISO 3166 2 or 3 character code for the country. Case insensitive. See https://api.flow.io/reference/countries |


