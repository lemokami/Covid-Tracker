import { h } from 'preact';
import { useState } from 'preact/hooks';

const SelectMenu = ({ countryList, getCountryData }) => {
  const [location, setLocation] = useState('');

  function changeLoc(e) {
    setLocation(e.target.value);
    getCountryData(e.target.value);
  }
  return (
    <>
      <select value={location} onChange={changeLoc}>
        <option value=''>Global</option>
        {countryList.map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectMenu;
