import getRefs from './get-refs';
import manyCountriesTpl from './templates/countries.hbs';
import oneCountryTpl from './templates/country.hbs';
import { alert } from '@pnotify/core';

const refs = getRefs();
function oneCountryMarkup(countries) {
  refs.countries.innerHTML = oneCountryTpl(countries);
}

function manyCountriesMarkup(countries) {
  refs.countries.innerHTML = manyCountriesTpl(countries);
}

function ifVeryManyResults() {
  alert({
    type: 'error',
    text: 'Too many matches found. Please enter a more specific query!',
  });
}

export default { oneCountryMarkup, manyCountriesMarkup, ifVeryManyResults };
