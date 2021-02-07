const apiUrl = 'https://covid19.mathdro.id/api';

export const FetchInfected = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  return {
    confirmed: data.confirmed,
    deaths: data.deaths,
    recovered: data.recovered,
  };
};

export const FetchCountries = async () => {
  const response = await fetch(`${apiUrl}/countries`);
  const data = await response.json();
  return data;
};

export const FetchCountry = async (country) => {
  const response = await fetch(`${apiUrl}/countries/${country}`);
  const data = await response.json();
  return data;
};
