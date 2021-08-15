import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

import manyCountriesTpl from './templates/countries.hbs';
import oneCountryTpl from './templates/country.hbs';

const refs = {
  countries: document.getElementById('countries-js'),
};

export function fetchCountries(searchQuery) {
  const countryName = searchQuery.target.value;
  if (countryName === '') {
    refs.countries.innerHTML = '';
    return;
  } else {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(countries => {
        return countries.json();
      })
      .then(countries => {
        if (countries.length > 10) {
          alert({
            type: 'error',
            text: 'Too many matches found. Please enter a more specific query!',
          });
        }
        if (countries.length >= 2 && countries.length <= 10) {
          manyCountriesMarkup(countries);
        }
        if (countries.length === 1) {
          oneCountryMarkup(countries);
        }
      })
      .catch(error => console.log(error));
  }
}

function oneCountryMarkup(countries) {
  refs.countries.innerHTML = oneCountryTpl(countries);
}

function manyCountriesMarkup(countries) {
  refs.countries.innerHTML = manyCountriesTpl(countries);
}
