import React, {useState} from 'react';

import './App.css';
import Countires from './pages/Countires';

export type CountiresType = {
  name: {
      common: string;
      official: string;
  }
  region: string;
  capital: [string];
  borders: string[];
  maps: {
      googleMaps:string;
  }
  flags: {
      png: string;
  }
}



function App() {

  //use Hook
  const [countriesData, setCountriesData] = useState<CountiresType[]>([]);

  return (
    <div className="App">
      <Countires setCountriesData={setCountriesData} countriesData={countriesData}/>
    </div>
  );
}

export default App;
