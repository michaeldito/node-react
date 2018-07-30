# Weather App

This command line application retreives current weather information for a 
specific location. The location can be an address, zip code, city, or even
an establishment.

## Fetch Weather Information
`node app-promise.js -a="170 Apollo Ct"`
`node app-promise.js -a="Stafford Lake"`
`node app-promise.js -a="Rowland Movie Theater"`

## Geocode API
The maps.googleapis.com API is used to retreive the latitude and longitude for
an address. We can then use the latitude and longitude to retreive the weather data.

## Weather API
The darksky.net API is used to retreive the temperature and apparent temperature
when given the latitude and longitude of a location.

## Request
To make the requests to these APIs, we can use the npm module 'request'.

## Axios
To make promise based requests, we can use the npm module 'axios'.