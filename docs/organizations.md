# [API](README.md).organizations - Flow Commerce API - Node SDK Documentation

Represents a single organization in the system, and what environment it is currently operating in.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const organizations = client().organizations;
```

## Operations

##`getCountriesByOrganization(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| ip | string | If specified, we lookup the country associated with this IP address, and if found and there is an experience that is targeted to this country, we guarantee that this country is in the returned list of countries |
| country | string | If specified, we will guarantee that this country is included in the response. We recommend including the current country when querying for the list of countries to disable, thereby ensuring the current user&#x27;s selection will display (even if they are localized using the world experience). Value is a ISO 3166 3 currency code as defined in https://api.flow.io/reference/countries |
| status | [experience_status] | If specified, countries will be filtered from experiences with this status.  If not provided, defaults to active. |

##`getCountriesAndDestinationsByOrganization(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`getCountriesAndStatusesByOrganization(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`putCountriesAndStatusesByOrganizationAndCountry(organization, country, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| country | string |  |


##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| channel_id | string |  |
| name | string | Find organizations with this name. Case insensitive. Exact match. |
| environment | environment | Find organizations with this environment |
| parent | string | Find organizations that belong to this specified parent organization id. Case insensitive. Exact match. |
| in_channel | boolean | Filters organizations that are or are not channel organizations. |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(options = {})`



##`getVersions(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| organization | [string] | Filter to organizations with any one of these ids. |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getByOrganizationId(organizationId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization_id | string |  |


##`putByOrganizationId(organizationId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization_id | string |  |


##`deleteByOrganizationId(organizationId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization_id | string |  |


##`getSettingsAndCurrenciesByOrganizationId(organizationId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization_id | string |  |


##`getSettingsAndRegionsByOrganizationId(organizationId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization_id | string |  |


##`getSettingsAndRegionsAndCountriesAndAvailableByOrganizationId(organizationId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization_id | string |  |


##`putSettingsAndRegionsByOrganizationIdAndRegion(organizationId, region, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization_id | string |  |
| region | string |  |


##`deleteSettingsAndRegionsByOrganizationIdAndRegion(organizationId, region, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization_id | string |  |
| region | string |  |


