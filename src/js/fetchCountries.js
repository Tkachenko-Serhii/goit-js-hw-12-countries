import { defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

import getRefs from './get-refs';
import API from './api-service';
import murkup from './renderMurkup';

const refs = getRefs();

function fetchCountries(searchQuery) {
  const countryName = searchQuery.target.value;
  if (countryName === '' && countryName < 1) {
    refs.countries.innerHTML = '';
    return;
  } else {
    API.fetchCountry(countryName)
      .then(countries => {
        if (countries.length > 10) {
          murkup.ifVeryManyResults();
        }
        if (countries.length >= 2 && countries.length <= 10) {
          murkup.manyCountriesMarkup(countries);
        }
        if (countries.length === 1) {
          murkup.oneCountryMarkup(countries);
        }
      })
      .catch(error => console.log(error));
  }
}

export { fetchCountries };
