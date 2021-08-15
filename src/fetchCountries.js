import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

import countriesTpl from './templates/countries.hbs';
import oneCountry from './templates/country.hbs';

export function fetchCountries(searchQuery) {
  const countryName = searchQuery.target.value;
  if (countryName) {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(countries => {
        return countries.json();
      })
      .then(countries => {
        if (countries.length > 10) {
          console.log(countries.length);
          alert({
            type: 'error',
            text: 'Too many matches found. Please enter a more specific query!',
          });
        }
        if (countries.length >= 2 && countries.length <= 10) {
          console.log(countries.length);
          document
            .getElementById('countries-js')
            .insertAdjacentHTML('afterbegin', countriesTpl(countries));
        }
        if (countries.length === 1) {
          console.log(countries.length);
          document
            .getElementById('countries-js')
            .insertAdjacentHTML('afterbegin', oneCountry(countries));
        }
      });
  }
}
