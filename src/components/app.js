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

  function getCountryData(country) {
    if (country !== '') FetchCountry(country).then((data) => setData(data));
    else getGlobalData();
  }

  function getCountryList() {
    FetchCountries().then((data) => {
      data.countries.forEach((country) =>
        setCountryList((currList) => [...currList, country.name])
      );
    });
  }

  useEffect(() => {
    getGlobalData();
    getCountryList();
  }, []);

  return (
    <div className='container main'>
      <h1 className='heading'>
        <span className='heading--grey'>COVID</span> TRACKER
      </h1>
      <div className='content'>
        <SelectMenu countryList={countryList} getCountryData={getCountryData} />
        <div className='card-list'>
          <Card color='orange' type='Confirmed' number={data.confirmed} />
          <Card color='red' type='Deaths' number={data.deaths} />
          <Card color='green' type='Recovered' number={data.recovered} />
        </div>
      </div>
    </div>
  );
};

export default App;
