import { useState, useEffect, useRef } from "react";
import { ISelector } from "../types/ISelector";
import Currency from "./Currency"

const selector:ISelector[] = [
    { text: "", disabled: true, selected: true },
    { text: "EUR" },
    { text: "UAH" },
    { text: "USD" }
];

const Main = (props:any) => {
    
    const [firstCurrencySelector, setfirstCurrency] = useState("");
    const [secondCurrencySelector, setSecondCurrencySelector] = useState("");
    const [moneyChanged, setMoneyChanged] = useState(null);
  
    const secondInputValue:any = !!moneyChanged ? moneyChanged[secondCurrencySelector] : "";
    const firstInputValue:any = !!moneyChanged ? moneyChanged[firstCurrencySelector] : "";

    const switchHandle = (num:number, value:string) => {
      switch (value) {
        case "usd":
          console.log(value, num)
          return {
            eur: +((num * props.usd) / props.eur).toFixed(3)+'',
            uah: +(num * props.usd).toFixed(3)+'',
            usd: num === 0 ? 0 : num+'',
          };
        case "uah":
          console.log(value, num)
          return {
            eur: +(num / props.eur).toFixed(3)+'',
            usd: +(num / props.usd).toFixed(3)+'',
            uah: num === 0 ? 0 : num+'',
          };
        case "eur":
          console.log(value, num)
          return {
            uah: +(num * props.eur).toFixed(3)+'',
            usd: +((num * props.usd) / props.eur).toFixed(3)+'',
            eur: num === 0 ? num : num+'',
          };
        default:
          return " ";
      }
    };
  
    const changer = (e:React.ChangeEvent<HTMLInputElement>, currency:string) => {
      const num = Number(e.target?.value);
      const result:any = switchHandle(num, currency);
      setMoneyChanged(result);
    };
    return(
        
        <main className='flex flex-col text-center justify-around align-middle mt-10 bg-blue-600 rounded-3xl h-80'>
            <Currency
                inputOnChange={(e: React.ChangeEvent<HTMLInputElement>) => changer(e, firstCurrencySelector)}
                disabledInput={!firstCurrencySelector}
                value={firstInputValue}
                firstCurrency={(e: React.ChangeEvent<HTMLInputElement>) => setfirstCurrency(() => e.target?.value.toLowerCase())}
                selector={selector}
                secondCurrency={secondCurrencySelector.toLowerCase()}            
            /> 
            <Currency 
                inputOnChange={(e: React.ChangeEvent<HTMLInputElement>) => changer(e, secondCurrencySelector)}
                disabledInput={!secondCurrencySelector}
                value={secondInputValue}
                firstCurrency={(e: React.ChangeEvent<HTMLInputElement>) => setSecondCurrencySelector(() => e.target?.value.toLowerCase())}
                selector={selector}
                secondCurrency={firstCurrencySelector.toLowerCase()}          
            /> 
        </main>
    )
}

export default Main