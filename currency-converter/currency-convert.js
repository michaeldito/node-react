const axios = require('axios');

// Not using async/await
const getExchangeRate = (from, to) => {
  return axios.get(`http://api.fixer.io/latest?base=${from}`).then((response) => {
    return response.data.rates[to];
  });
}

const getCountries = (currencyCode) => {
  return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => {
    return response.data.map((country) => country.name);
  });
}

const convertCurrency = (from, to, amount) => {
  let countries;
  return getCountries(to).then((tempCountries) => {
    countries = tempCountries;
    return getExchangeRate(from, to);
  }).then((rate) => {
      const exchangedAmount = amount * rate;
      return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
  });
}

// Using async/await
const getExchangeRateAsync = async (from, to) => {
  try {
    const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);
    const rate =  response.data.rates[to];

    if (rate) {
      return rate;
    }
    else {
      throw new Error();
    }
  }
  catch (e) {
    throw new Error(`Unable to get exchange rate for ${from} and ${to}.`);
  }
}

const getCountriesAsync = async (currencyCode) => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map((country) => country.name);
  }
  catch (e) {
    throw new Error(`Unable to get countries that use ${currencyCode}`);
  }
}

const convertCurrencyAsync = async (from, to, amount) => {
  const countries = await getCountriesAsync(to);
  const rate = await getExchangeRateAsync(from, to);
  const exchangedAmount = amount * rate;
  return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
}

// Tests
// convertCurrency('USD', 'CAD', 100).then((status) => {
//   console.log('Not async:');
//   console.log(status);
// });

convertCurrencyAsync('USD', 'EUR', 100).then((status) => {
  console.log('Async:');
  console.log(status);
}).catch((e) => {
  console.log(e);
});