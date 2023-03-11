import { useState, } from "react";
import { IRates } from "../types/IRates";
import { ISelector } from "../types/ISelector";
import Currency from "./Currency"

const selector:ISelector[] = [
    { text: "", disabled: true, selected: true },
    { text: "EUR" },
    { text: "UAH" },
    { text: "USD" }
];

const Main = (props:IRates) => {
    
    const [mainInput, setMainInput] = useState("");
    const [secondInput, setSecondInput] = useState("");
    const [moneyChanged, setMoneyChanged] = useState(null);
  
    const secondInputValue = !!moneyChanged ? moneyChanged[secondInput] : "";
    const firstInputValue = !!moneyChanged ? moneyChanged[mainInput] : "";
  
    const switchHandle = (num:number, value:string) => {
      switch (value) {
        case "usd":
          return {
            eur: (num * 36) / 38,
            uah: num * 36
          };
        case "uah":
          return {
            eur: num / 38,
            usd: num / 36
          };
        case "eur":
          return {
            uah: num * 38,
            usd: (num * 38) / 36
          };
        default:
          return "";
      }
    };
  
    const changer = (e:any, currency:string) => {
      const num = Number(e.target?.value);
  
      const result:any = switchHandle(num, currency);
  
      setMoneyChanged(result);
    };
    console.log('input',mainInput)
    return(
        
        <main className='flex flex-col text-center justify-around align-middle mt-10 bg-blue-600 rounded-3xl h-72'>
            <Currency 
                inputOnChange={(e: Event) => changer(e, mainInput)}
                disabledInput={!mainInput}
                newValue={firstInputValue}
                firstCurrency={(e: any) => setMainInput(e.target?.value.toLowerCase())}
                selector={selector}
                secondCurrency={secondInput.toUpperCase()} defaultValue={undefined}           
            /> 
            <Currency 
                inputOnChange={(e: Event) => changer(e, secondInput)}
                disabledInput={!secondInput}
                newValue={secondInputValue}
                firstCurrency={(e: any) => setSecondInput(e.target?.value.toLowerCase())}
                selector={selector}
                secondCurrency={mainInput.toUpperCase()} defaultValue={undefined}           
            /> 
        </main>
    )
}

export default Main