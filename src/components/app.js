import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { FetchCountries, FetchCountry, FetchInfected } from '../api';
import Card from './Card';
import SelectMenu from './SelectMenu';

const App = () => {
  const [data, setData] = useState({});
  const [countryList, setCountryList] = useState([]);

  function getGlobalData() {
    FetchInfected().then((data) => setData(data));
  }
  function getCountryList() {
    FetchCountries().then((data) => {
      data.countries.forEach((country) =>
        setCountryList((currList) => [...currList, country.name])
      );
    });
  }
  function getCountryData(country) {
    if (country !== '') FetchCountry(country).then((data) => setData(data));
    else getGlobalData();
  }

  useEffect(() => {
    getGlobalData();
    getCountryList();
  }, []);
  return (
    <div className='container'>
      <SelectMenu countryList={countryList} getCountryData={getCountryData} />
      <div className='country'>
        <Card color='orange' type='confirmed' number={data.confirmed} />
        <Card color='red' type='deaths' number={data.deaths} />
        <Card color='green' type='recovered' number={data.recovered} />
      </div>
    </div>
  );
};

export default App;
