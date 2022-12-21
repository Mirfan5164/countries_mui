
import React, { useEffect } from 'react';
import './countries.css'
import CountriesShow from '../components/CountriesShow';
import {CountiresType} from '../App';


type Country = { 
    countriesData: CountiresType[];
    setCountriesData: React.Dispatch<React.SetStateAction<CountiresType[]>>;
}


export default function Countires({countriesData, setCountriesData}:Country) {

     //url
     const url="https://restcountries.com/v3.1/all";

     //fetchData
     useEffect(() => {
         const fetchData = () =>{
             fetch(url)
             .then(response => response.json())
             .then(data => setCountriesData(data))
             .catch(error => console.log(error));
         }
         fetchData();
     }, [url])
 
     console.log(countriesData);

  return (
   <>
    <div className='countries-list'>
       {
         countriesData.map((value, index) => {
          return <CountriesShow key={index} countryProp={value}/>
          })
        }
    </div>
   </>
  );
}
