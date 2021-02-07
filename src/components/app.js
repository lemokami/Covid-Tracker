import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { FetchInfected } from '../api';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    FetchInfected().then((data) => setData(data));
  }, []);

  return <pre>{JSON.stringify(data.confirmed)}</pre>;
};

export default App;
