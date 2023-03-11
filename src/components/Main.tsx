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
  
    const secondInputValue = !!moneyChanged ? moneyChanged[secondCurrencySelector] : "";
    const firstInputValue = !!moneyChanged ? moneyChanged[firstCurrencySelector] : "";

    const switchHandle = (num:number, value:string) => {
      switch (value) {
        case "usd":
          console.log(value);
          return {
            eur: (num * props.usd) / props.eur,
            uah: num * props.usd,
            usd: num > 0 ? num+'' : 0,
          };
        case "uah":
          console.log(value);
          return {
            eur: num / props.eur,
            usd: num / props.usd,
            uah: num > 0 ? num+'' : 0,
          };
        case "eur":
          console.log(value);
          return {
            uah: num * props.eur,
            usd: (num * props.usd) / props.eur,
            eur: num > 0 ? num+'' : 0,
          };
        default:
          return " ";
      }
    };
  
    const changer = (e:React.ChangeEvent<HTMLInputElement>, currency:string) => {
      const num = Math.abs(Number(e.target?.value));
  
      const result:any = switchHandle(num, currency);
  
      setMoneyChanged(result);
    };
    return(
        
        <main className='flex flex-col text-center justify-around align-middle mt-10 bg-blue-600 rounded-3xl h-72'>
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