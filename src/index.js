import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import getRefs from './get-refs';

const refs = getRefs();

const debounceFetchCountries = debounce(fetchCountries, 500);

refs.input.addEventListener('input', debounceFetchCountries);
