import {useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import getRate from './services/getRate';
import { IObj } from './types/IObj';

const App = () => {
  const [rateUSD, setRateUSD] = useState<number>(1);
  const [rateEUR, setRateEUR] = useState<number>(1);

  useEffect(() => {
    getRate('USD').then(response => {
      const resultArray = response.data.map((obj:IObj) => obj.cc === 'USD' ? obj.rate : null);
      setRateUSD(resultArray)
    })
    getRate('EUR').then(response => {
      const resultArray = response.data.map((obj:IObj) => obj.cc === 'EUR' ? obj.rate : null);
      setRateEUR(resultArray)
    })
    
  },[])
  return (
    <div className="app mx-4 mt-14">
      <Header usd={rateUSD} eur = {rateEUR}/>
      <Main usd={rateUSD as number} eur = {rateEUR as number}/>
    </div>
  );
}

export default App;
