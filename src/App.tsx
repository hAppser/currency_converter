import { SetStateAction, useEffect, useState } from 'react';
import './App.css';
import Currency from './components/Currency';
import Header from './components/Header';
import getRate from './services/getRate';
import { IObj } from './types/IObj';
import { ChangeEvent } from 'react';

const App = () => {
  const [rateUSD, setRateUSD] = useState();
  const [rateEUR, setRateEUR] = useState();

  const [firstCurrency, setFirstCurrency] = useState();
  const [secondCurrency, setSecondCurrency] = useState();

  useEffect(() => {
    getRate('USD').then(response => {
      setRateUSD(response.data.map((obj:IObj) => obj.cc === 'USD' ? obj.rate : null))
    })
    getRate('EUR').then(response => {
      setRateEUR(response.data.map((obj:IObj) => obj.cc === 'EUR' ? obj.rate : null))
    })
  }, [])
  return (
    <div className="app mx-4 mt-14">
      <Header usd={rateUSD} eur = {rateEUR}/>
      <main className='flex flex-col text-center justify-around align-middle mt-10'>
        <Currency />
        <Currency />
      </main>
    </div>
  );
}

export default App;
