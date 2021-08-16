import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import getRefs from './js/get-refs';

const refs = getRefs();

const debounceFetchCountries = debounce(fetchCountries, 500);

refs.input.addEventListener('input', debounceFetchCountries);
