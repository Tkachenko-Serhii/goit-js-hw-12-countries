export default function fetchCountries(searchQuery) {
  const countryName = searchQuery.target.value;
  if (countryName) {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(country => {
        return country.json();
      })
      .then(countries => {
        const countriesMarkup = countries.map(country => `<h1>${country.name}</h1>`).join('');

        refs.countries.insertAdjacentHTML('afterbegin', countriesMarkup);
      });
  }
}
