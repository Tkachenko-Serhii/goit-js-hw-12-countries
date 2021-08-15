import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const refs = {
  input: document.getElementById('input-js'),
  countries: document.getElementById('countries-js'),
};

const debounceFetchCountries = debounce(fetchCountries, 500);

refs.input.addEventListener('input', debounceFetchCountries);
