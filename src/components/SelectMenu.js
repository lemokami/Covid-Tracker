import { h } from 'preact';
import { useState } from 'preact/hooks';

const SelectMenu = ({ countryList, getCountryData }) => {
  const [location, setLocation] = useState('');

  function changeLoc(e) {
    setLocation(e.target.value);
    getCountryData(e.target.value);
  }
  return (
    <div className='menu'>
      <label htmlFor='location'>Location: </label>
      <select
        value={location}
        onChange={changeLoc}
        id='location'
        className='menu__select'
      >
        <option value=''>Global</option>
        {countryList.map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenu;
