import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import FetchInfected from '../api/FetchInfected';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    let fetchData = FetchInfected();
    setData(fetchData);
  }, []);

  return <div>dffs</div>;
};

export default App;
