import fetchCountries from './fetchCountries';
import countriesTpl from './templates';

const refs = {
  input: document.getElementById('input-js'),
  countries: document.getElementById('countries-js'),
};

refs.input.addEventListener('input', fetchCountries);
