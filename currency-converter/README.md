# Currency Converter

## currency-convert.js
The main application. Functions for getting an exchange rate, a list of countries
that accept certain currencies, and a currency converting function are implemented
here. Axios is used to make http requests to two APIs (fixer.io and restcountries.eu).
Each function has two implementations, one that uses async/await and one that just
uses promises.

## app-promises.js
An example file showing when and where to use async/await.