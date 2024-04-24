// reduces the subset of countries depending on whether the user specified a white/blacklist, and lists priority
// countries first

export interface Region {
  name: string;
  shortCode: string;
}

export interface CountryRegion {
  countryName: string;
  countryShortCode: string;
  regions: Region[];
}

export const filterCountries = (
  countries: CountryRegion[],
  priorityCountries: string[],
  whitelist: string[],
  blacklist: string[],
): CountryRegion[] => {
  let countriesListedFirst: any[] = [];
  let filteredCountries = countries;

  if (whitelist.length > 0) {
    filteredCountries = countries.filter(
      ({ countryShortCode }) => whitelist.indexOf(countryShortCode) > -1,
    );
  } else if (blacklist.length > 0) {
    filteredCountries = countries.filter(
      ({ countryShortCode }) => blacklist.indexOf(countryShortCode) === -1,
    );
  }

  if (priorityCountries.length > 0) {
    // ensure the countries are added in the order in which they are specified by the user
    priorityCountries.forEach((slug) => {
      const result = filteredCountries.find(
        ({ countryShortCode }) => countryShortCode === slug,
      );
      if (result) {
        countriesListedFirst.push(result);
      }
    });

    filteredCountries = filteredCountries.filter(
      ({ countryShortCode }) =>
        priorityCountries.indexOf(countryShortCode) === -1,
    );
  }

  return countriesListedFirst.length
    ? [...countriesListedFirst, ...filteredCountries]
    : filteredCountries;
};

export const filterRegions = (
  regions: Region[],
  priorityRegions: string[],
  whitelist: string[],
  blacklist: string[],
) => {
  let regionsListedFirst: any[] = [];
  let filteredRegions = regions;

  if (whitelist.length > 0) {
    filteredRegions = regions.filter(
      ({ shortCode }) => whitelist.indexOf(shortCode) > -1,
    );
  } else if (blacklist.length > 0) {
    filteredRegions = regions.filter(
      ({ shortCode }) => blacklist.indexOf(shortCode) === -1,
    );
  }

  if (priorityRegions.length > 0) {
    // ensure the Regions are added in the order in which they are specified by the user
    priorityRegions.forEach((slug) => {
      const result = filteredRegions.find(
        ({ shortCode }) => shortCode === slug,
      );
      if (result) {
        regionsListedFirst.push(result);
      }
    });

    filteredRegions = filteredRegions.filter(
      ({ shortCode }) => priorityRegions.indexOf(shortCode) === -1,
    );
  }

  return regionsListedFirst.length
    ? [...regionsListedFirst, ...filteredRegions]
    : filteredRegions;
};
