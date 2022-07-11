 export const getCountry = async ()=> {

    const url = `https://restcountries.com/v3.1/all`;
    const resp = await fetch( url );
    const data = await resp.json()


  const countries = data.map(({flags, name, population, region, capital, subregion, currencies, languages, borders, tld, fifa  }) => (
    {
    flag: flags.svg,
    name: name.common,
    Nativename: name.nativeName,
    population,
    region,
    capital,
    subregion,
    currencies,
    languages,
    borders,
    tld,
    fifa,

  }));


 return countries;
}