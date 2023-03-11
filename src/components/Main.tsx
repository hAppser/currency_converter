import { useState, } from "react";
import useDebounce from "../hooks/useDebounce";
import { IRates } from "../types/IRates";
import { ISelector } from "../types/ISelector";
import Currency from "./Currency"

const selector:ISelector[] = [
    { text: "", disabled: true, selected: true },
    { text: "EUR" },
    { text: "UAH" },
    { text: "USD" }
];

const Main = (props:any) => {
    
    const [mainInput, setMainInput] = useState("");
    const [secondInput, setSecondInput] = useState("");
    const [moneyChanged, setMoneyChanged] = useState(null);
  
    const secondInputValue = !!moneyChanged ? moneyChanged[secondInput] : "";
    const firstInputValue = !!moneyChanged ? moneyChanged[mainInput] : "";

    const switchHandle = (num:number, value:string) => {
      switch (value) {
        case "usd":
          return {
            eur: (num * props.usd) / props.eur,
            uah: num * props.usd,
            usd: num === 0 ? '' : num,
          };
        case "uah":
          return {
            eur: num / props.eur,
            usd: num / props.usd,
            uah: num === 0 ? '' : num,
          };
        case "eur":
          return {
            uah: num * props.eur,
            usd: (num * props.usd) / props.eur,
            eur: num === 0 ? '' : num,
          };
        default:
          return " ";
      }
    };
  
    const changer = (e:any, currency:string) => {
      const num = Number(e.target?.value);
  
      const result:any  = switchHandle(num, currency);
  
      setMoneyChanged(result);
    };
    return(
        
        <main className='flex flex-col text-center justify-around align-middle mt-10 bg-blue-600 rounded-3xl h-72'>
            <Currency 
                inputOnChange={(e: React.ChangeEvent<HTMLInputElement>) => changer(e, mainInput)}
                disabledInput={!mainInput}
                value={firstInputValue}
                firstCurrency={(e: React.ChangeEvent<HTMLInputElement>) => setMainInput(e.target?.value.toLowerCase())}
                selector={selector}
                secondCurrency={secondInput.toUpperCase()} defaultValue={undefined}           
            /> 
            <Currency 
                inputOnChange={(e: Event) => changer(e, secondInput)}
                disabledInput={!secondInput}
                value={secondInputValue}
                firstCurrency={(e: React.ChangeEvent<HTMLInputElement>) => setSecondInput(e.target?.value.toLowerCase())}
                selector={selector}
                secondCurrency={mainInput.toUpperCase()} defaultValue={undefined}           
            /> 
        </main>
    )
}

export default Main